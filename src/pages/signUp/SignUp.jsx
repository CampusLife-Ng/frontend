import "./SignUp.css";
import GoogleIcon from "@mui/icons-material/Google";
import { motion } from "framer-motion";
import { useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch } from "react-redux";
import { revokeAccess } from "../../features/slices/authSlice";
import { toast } from "react-toastify";

import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../features/slices/userSlice";
const SIGNUP_URL = "/users/register"
const LOGIN_URL = "/users/login"

const SignUp = ({location}) => {
  const dispatch = useDispatch();
  const [seePwd, setSeePwd] = useState(false);
  const navigate = useNavigate()
  const [formIsLoading, setFormIsLoading] = useState(false)

  const destination = location?.state?.destination.pathname || "/"
  // console.log(destination)

  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    institution: "",
  });

  const updateSignupData = (type, value) => {
    // console.log(type, value);
    setSignupData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const handleVisiblesOpen = () => {
    setSeePwd(true);
  };

  const handleVisiblesClose = () => {
    setSeePwd(false);
  };

  const submitSignupForm = async(e) => {
    e.preventDefault();
    setFormIsLoading(true)

    try {
      for (const val in signupData) {
        if (!signupData[val]) {
          toast.warning("All fields are required");
          setFormIsLoading(false)
          return;
        }
      }

      // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
      const response = await axios.post(SIGNUP_URL, signupData, { headers: { "Content-Type": "application/json" }, withCredentials: true })
      // console.log(response)
      if (response.status === 201){
        const loginResponse = await axios.post(LOGIN_URL, {email: signupData.email, password: signupData.password}, { headers: { "Content-Type": "application/json" }, withCredentials: true })

        // console.log(loginResponse)
        dispatch(setUser(loginResponse?.data?.data))
        setFormIsLoading(false)
        navigate(destination, {replace: true} )
        toast.success(`Welcome ${loginResponse?.data?.data?.fullname}`)
      }
      // window.location.reload(); // for now!!
    } catch (error) {
      toast.error(error?.response?.data?.message)
      setFormIsLoading(false)
    }
  };

  const handleChangeAuthPage = () => {
    dispatch(revokeAccess());
  };

  return (
    <>
      <form onSubmit={(e) => submitSignupForm(e)} className="signup-form">
        {formIsLoading && (<Spinner />)}
        <h3>Welcome to Campuslife</h3>
        <div className="account-question">
          Already have an account?{" "}
          <motion.p onClick={handleChangeAuthPage} whileTap={{ scale: 0.8 }}>
            Log in now
          </motion.p>
        </div>

        <div className="signup-form-group">
          <label htmlFor="fullname">Full name</label>
          <input
            onChange={(e) => updateSignupData("fullname", e.target.value)}
            type="text"
            id="fullname"
            placeholder="Enter your full name"
            autoComplete="off"
          />
        </div>

        <div className="signup-form-group">
          <label htmlFor="email">Email address</label>
          <input
            value={signupData.email}
            onChange={(e) => updateSignupData("email", e.target.value)}
            type="email"
            id="email"
            placeholder="example@email.com"
            autoComplete="off"
          />
        </div>

        <div className="signup-form-group">
          <label htmlFor="password">Password</label>
          <div>
            <input
              onChange={(e) => updateSignupData("password", e.target.value)}
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

        <div className="signup-form-group">
          <label htmlFor="institution">Institution</label>

          <div>
            <select
              onChange={(e) => updateSignupData("institution", e.target.value)}
              defaultValue={"Select Institution"}
              className="signup-institution"
              id="signup-institution"
            >
              <option value="Select Institution" disabled>
                Select Institution
              </option>
              <option value="futo">Futo</option>
            </select>

            <ArrowDropDownOutlinedIcon className="signup-icon" />
          </div>
        </div>

        {/* SIGNUP OR LOGIN BUTTON */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.8 }}
          className="signup-form-btn"
        >
          SignUp
        </motion.button>

        {/* <p>OR</p>

        <motion.div whileTap={{ scale: 0.8 }} className="signup-form-google">
          <GoogleIcon className="signup-form-icon" />
          <span>Sign In With Google</span>
        </motion.div> */}
      </form>
    </>
  );
};

export default SignUp;
