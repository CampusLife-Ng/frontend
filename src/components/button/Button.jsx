import "./Button.css";
import { motion } from "framer-motion";

const Button = ({ text, type, color, submit, onclick }) => {
  return (
    <motion.button
      onClick={onclick}
      type={`${submit ? "submit" : ""}`}
      whileTap={{ scale: 0.8 }}
      className={`btn btn-${type}${color ? `-${color}` : ""}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
