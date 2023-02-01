import "./FeatureTop.css";
import { motion } from "framer-motion";

const FeatureTop = ({ text, type }) => {
  return (
    <div className="feature__top">
      <h2 className={`${type}`}>{text}</h2>

      {type === "market-place" ? (
        <></>
      ) : (
        <motion.div whileTap={{ scale: 0.8 }} className="feature__top-right">
          view all
        </motion.div>
      )}
    </div>
  );
};

export default FeatureTop;
