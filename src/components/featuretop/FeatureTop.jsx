import "./FeatureTop.css";
import { motion } from "framer-motion";

const FeatureTop = ({ text }) => {
  return (
    <div className="feature__top">
      <h2>{text}</h2>

      <motion.div whileTap={{ scale: 0.8 }} className="feature__top-right">
        view all
      </motion.div>
    </div>
  );
};

export default FeatureTop;
