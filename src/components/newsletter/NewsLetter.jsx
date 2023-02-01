import "./NewsLetter.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <section className="news__section">
      <div className="news__section-content">
        <h1>Subscribe to our newsletter</h1>
        <p>We email you all the latest lodges in FUTO. Subscribe now! </p>
        <form className="news__section-form">
          <div className="form__group">
            <MailOutlineIcon className="news__section-icon" />
            <input type="text" placeholder="example@email.com" />
          </div>
          <div className="news__section-btn">
            <motion.button whileTap={{ scale: 0.8 }}>Subscribe</motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
