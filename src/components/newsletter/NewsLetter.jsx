import "./NewsLetter.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const [newsLetterEmail, setNewsLetterEmail] = useState("");

  const handleNewsLetterForm = (e) => {
    e.preventDefault();
    if (!newsLetterEmail)
      return toast.warning("Please enter your email address");

    return toast.info("Newletter functionality comming soon😊")
  };
  return (
    <section className="news__section">
      <div className="news__section-content">
        <h1>Subscribe to our newsletter</h1>
        <p>We email you all the latest lodges in FUTO. Subscribe now! </p>
        <form
          onSubmit={(e) => handleNewsLetterForm(e)}
          className="news__section-form"
        >
          <div className="form__group">
            <TelegramIcon className="news__section-icon" />
            <input
              onChange={(e) => setNewsLetterEmail(e.target.value)}
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div className="news__section-btn">
            <motion.button type="submit" whileTap={{ scale: 0.8 }}>
              Subscribe
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
