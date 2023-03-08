import "./MissingPage.css";
import { Navbar, NewsLetter, Footer } from "./../../components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />

      <div className="missingpage-content">
        <div className="display-error">
          <p>You cannot Access this page 😊</p>

          <div className="display-error-btns">
            <motion.div
              onClick={handleGoBack}
              whileTap={{ scale: 0.8 }}
              className="display-error-btn"
            >
              Go Back!
            </motion.div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  )
}

export default Unauthorized