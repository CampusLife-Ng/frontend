import "./FeatureTop.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FeatureTop = ({ text, type, page, town }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/view-all", { state: { townname: town } });
  };

  return (
    <div className="feature__top">
      <h2 className={`${type}`}></h2>

      {page === "view-all" || type === "market-place" || type === "featured" ? (
        <></>
      ) : (
        <motion.div
          onClick={handleViewAll}
          whileTap={{ scale: 0.8 }}
          className="feature__top-right"
        >
          All {text} Lodges
        </motion.div>
      )}
    </div>
  );
};

export default FeatureTop;
