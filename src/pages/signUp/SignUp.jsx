import "./SignUp.css";
import { Navbar, NewsLetter, Footer } from "../../components";
import GoogleIcon from "@mui/icons-material/Google";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Login from "./Login";

const SignUp = () => {
  const navigate = useNavigate();
  const [loginNow, setLoginNow] = useState(false);
  const [seePwd, setSeePwd] = useState(false);

  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    institution: "",
  });


  const handleLoginNow = () => {
    setLoginNow(true);
  };

  const handleSignUp = () => {
    setLoginNow(false);
  };

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

  const submitSignupForm = (e) => {
    e.preventDefault();
    if (loginNow) {
      // console.log(loginData);
    } else {
      console.log(signupData);
      // for (const val in signupData) {
      //   if (!signupData[val]) {
      //     toast.warning("All fields are required");
      //     return;
      //   }
      // }
    }

    // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
    console.log(signupData);
    console.log(loginData);
    // window.location.reload(); // for now!!
  };

  return (
    <>
      <Navbar />
      <div className="signup__body">
        <form onSubmit={(e) => submitSignupForm(e)} className="signup-form">
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

          {!loginNow ? (
            <>
              <div className="signup-form-group">
                <label htmlFor="fullname">Full name</label>
                <input
                  onChange={(e) => updateSignupData("fullname", e.target.value)}
                  type="text"
                  id="fullname"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="email">Email address</label>
                <input
                  value={signupData.email}
                  onChange={(e) => updateSignupData("email", e.target.value)}
                  type="text"
                  id="email"
                  placeholder="example@email.com"
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="password">Password</label>
                <div>
                  <input
                    onChange={(e) =>
                      updateSignupData("password", e.target.value)
                    }
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

              <div className="signup-form-group">
                <label htmlFor="institution">Institution</label>

                <div>
                  <select
                    onChange={(e) =>
                      updateSignupData("institution", e.target.value)
                    }
                    defaultValue={"Select Institution"}
                    className="signup-institution"
                    id="signup-institution"
                  >
                    <option value="Select Institution" disabled>
                      Select Institution
                    </option>
                    <option value="futo">Futo</option>
                    <option value="unn">Unn</option>
                    <option value="unizik">Unizik</option>
                  </select>

                  <ArrowDropDownOutlinedIcon className="signup-icon" />
                </div>
              </div>
            </>
          ) : (
            <>
              <Login />
            </>
          )}

          {/* SIGNUP OR LOGIN BUTTON */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.8 }}
            className="signup-form-btn"
          >
            {loginNow ? "Login" : "Sign Up"}
          </motion.button>

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
