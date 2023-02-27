import "./SignUp.css";
import { Navbar, NewsLetter, Footer } from "../../components";
import GoogleIcon from "@mui/icons-material/Google";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const SignUp = () => {
  const navigate = useNavigate();
  const [loginNow, setLoginNow] = useState(false);
  const instituteOpt = [
    { value: "futo", label: "Futo" },
    { value: "unn", label: "Unn" },
    { value: "unizil", label: "Unizik" },
  ];

  const controlStyles = {
    control: (baseStyles, state) => {
      return {
        ...baseStyles,
        backgroundColor: "white",
        borderRadius: "10px",
        minHeight: "45px",
        cursor: "pointer",
        borderColor:
          state.isFocused || state.menuIsOpen ? "#44c570" : "hsl(0, 0%, 80%)",
      };
    },
  };

  const handleLoginNow = () => {
    setLoginNow(true);
  };

  const handleSignUp = () => {
    setLoginNow(false);
  };

  const handleInstituteChange = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="signup__body">
        <form className="signup-form">
          <h3>Welcome to Campuslife</h3>
          <div className="account-question">
            {!loginNow ? (
              <>
                Already have an account?{" "}
                <motion.p onClick={handleLoginNow} whileTap={{ scale: 0.8 }}>
                  Log in now
                </motion.p>
              </>
            ) : (
              <>
                {" "}
                Don't have an account?{" "}
                <motion.p onClick={handleSignUp} whileTap={{ scale: 0.8 }}>
                  Sign up
                </motion.p>
              </>
            )}
          </div>

          {/* FULLNAME */}
          {!loginNow ? (
            <>
              {" "}
              <div className="signup-form-group">
                <label htmlFor="fullname">Full name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter your full name"
                />
              </div>
            </>
          ) : (
            <></>
          )}

          {/* EMAIL ADDRESS */}
          <div className="signup-form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@email.com"
            />
          </div>

          {/* PASSWORD */}
          <div className="signup-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>

          {/* INSTITUTION */}
          {!loginNow ? (
            <>
              {" "}
              <div className="signup-form-group">
                <label htmlFor="institution">Institution</label>

                <Select
                  styles={controlStyles}
                  options={instituteOpt}
                  onChange={handleInstituteChange}
                />
              </div>
            </>
          ) : (
            <></>
          )}

          {/* SIGNUP OR LOGIN BUTTON */}
          <motion.div whileTap={{ scale: 0.8 }} className="signup-form-btn">
            {loginNow ? "Login" : "Sign Up"}
          </motion.div>

          <p>OR</p>

          <motion.div whileTap={{ scale: 0.8 }} className="signup-form-google">
            <GoogleIcon className="signup-form-icon" />
            <span>Sign In With Google</span>
          </motion.div>
        </form>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default SignUp;
