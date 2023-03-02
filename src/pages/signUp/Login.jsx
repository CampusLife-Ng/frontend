import React, { useState } from "react";
import { motion } from "framer-motion";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { revokeAccess } from "../../features/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [seePwd, setSeePwd] = useState(false);

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

  const handleLoginForm = (e) => {
    e.preventDefault();
    for (const val in loginData) {
      if (!loginData[val]) {
        toast.warning("All fields are required");
        return;
      }
    }

    // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
    console.log(loginData);
    // window.location.reload(); // for now!!
  };

  const handleChangeAuthPage = () => {
    dispatch(revokeAccess());
  };

  return (
    <>
      <form onSubmit={(e) => handleLoginForm(e)} className="signup-form">
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
