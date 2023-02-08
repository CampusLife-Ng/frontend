import "./FeatureTop.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FeatureTop = ({ text, type, page }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/view-all");
  };

  return (
    <div className="feature__top">
      <h2 className={`${type}`}>{text}</h2>

      {page === "view-all" || type === "market-place" || type === "featured" ? (
        <></>
      ) : (
        <motion.div
          onClick={handleViewAll}
          whileTap={{ scale: 0.8 }}
          className="feature__top-right"
        >
          view all
        </motion.div>
      )}
    </div>
  );
};

export default FeatureTop;
