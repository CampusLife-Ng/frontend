import React, { useState } from "react";
import { motion } from "framer-motion";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { giveAccess } from "../../features/slices/authSlice";
import { setUser } from "../../features/slices/userSlice";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";
const LOGIN_URL = "/users/login"

const Login = ({location}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [seePwd, setSeePwd] = useState(false);
  const [formIsLoading, setFormIsLoading] = useState(false)

  // console.log(location)
  const destination = location?.state?.destination.pathname || "/"

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleVisiblesOpen = () => {
    setSeePwd(true);
  };

  const handleVisiblesClose = () => {
    setSeePwd(false);
  };

  const updateLoginData = (type, value) => {
    // console.log(type, value);
    setLoginData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    setFormIsLoading(true)
    // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
    try {
      for (const val in loginData) {
      if (!loginData[val]) {
        toast.warning("All fields are required");
        setFormIsLoading(false)
        return;
      }
    }
    // console.log(loginData);
    const response = await axios.post(LOGIN_URL, loginData, { headers: { "Content-Type": "application/json" }, withCredentials: true })

    // console.log(response?.data?.data)
    dispatch(setUser(response?.data?.data))
    setFormIsLoading(false)
    navigate(destination, {replace: true} )
    toast.success("Login successful")
    // window.location.reload(); // for now!!
    } catch (error) {
      toast.error(error?.response?.data?.message)
      setFormIsLoading(false)
    }
  };

  const handleChangeAuthPage = () => {
    dispatch(giveAccess());
  };

  // console.log(formIsLoading)

  return (
    <>
      <form onSubmit={(e) => handleLoginForm(e)} className="signup-form">
        {formIsLoading && (<Spinner />)}
        <h3>Welcome to Campuslife</h3>
        <div className="account-question">
          Don't have an account?{" "}
          <motion.p onClick={handleChangeAuthPage} whileTap={{ scale: 0.8 }}>
            Signup
          </motion.p>
        </div>

        <div className="signup-form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={(e) => updateLoginData("email", e.target.value)}
            type="text"
            id="email"
            placeholder="example@email.com"
            autoComplete="off"
          />
        </div>

        <div className="signup-form-group">
          <label htmlFor="password">Password</label>
          <div>
            <input
              onChange={(e) => updateLoginData("password", e.target.value)}
              type={seePwd ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              autoComplete="off"
            />
            <div className="visibles-icon">
              <VisibilityOutlinedIcon
                onClick={handleVisiblesOpen}
                className={`signup-eye-open ${seePwd ? "hidden" : ""}`}
              />
              <VisibilityOffOutlinedIcon
                onClick={handleVisiblesClose}
                className={`signup-eye-close ${seePwd ? "" : "hidden"}`}
              />
            </div>
          </div>
        </div>

        {/* SIGNUP OR LOGIN BUTTON */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.8 }}
          className="signup-form-btn"
        >
          Login
        </motion.button>

        <p>OR</p>

        <motion.div whileTap={{ scale: 0.8 }} className="signup-form-google">
          <GoogleIcon className="signup-form-icon" />
          <span>Sign In With Google</span>
        </motion.div>
      </form>
    </>
  );
};

export default Login;
