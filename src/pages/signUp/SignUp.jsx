import "./SignUp.css";
import { Navbar, NewsLetter, Footer } from "../../components";
import GoogleIcon from "@mui/icons-material/Google";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="signup__body">
        <form className="signup-form">
          <h3>Welcome to Campuslife</h3>
          <div className="account-question">
            Already have an account?{" "}
            <motion.p whileTap={{ scale: 0.8 }}>Log in now</motion.p>
          </div>

          <div className="signup-form-group">
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter your full name"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@email.com"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              name="institution"
              id="institution"
              placeholder="Enter your full name"
            />
          </div>

          <motion.div whileTap={{ scale: 0.8 }} className="signup-form-btn">
            Sign Up
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
