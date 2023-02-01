import "./Button.css";
import { motion } from "framer-motion";

const Button = ({ text, type, color }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      className={`btn btn-${type}${color ? `-${color}` : ""}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
