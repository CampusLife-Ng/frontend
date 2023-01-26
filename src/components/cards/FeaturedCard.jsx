import { useState } from "react";
import "./FeaturedCard.css";
import RoomIcon from "@mui/icons-material/Room";
import Specs from "./../specs/Specs";
import HouseIcon from "@mui/icons-material/House";
import WaterIcon from "@mui/icons-material/Water";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import WcIcon from "@mui/icons-material/Wc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

const FeaturedCard = ({ img }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="featured__card">
      <div className="featured__card-left">
        <img src={img} alt="" />
        <div className="availability available">Available</div>
        <motion.div
          onClick={toggleLike}
          whileTap={{ scale: 0.8 }}
          className="like__box"
        >
          <FavoriteIcon className={`${liked ? "lodge-liked" : "lodge-like"}`} />
        </motion.div>
      </div>
      <div className="featured__card-desc">
        <div className="featured__card-desc-first">
          <p className="desc__location">
            <RoomIcon className="desc__location-icon" />
            <span>No 17, Onuiyi, Owerri road. Futo</span>
          </p>
          <p className="desc__price">₦ 250,000.00 </p>
        </div>
        <div className="featured__card-desc-second">
          <h3>Odilanma Lodge, Futo</h3>
          <motion.p whileTap={{ scale: 0.8 }}>Show on map</motion.p>
        </div>
        <div className="featured__card-desc-third">
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero viverra gravida
            aliquet adipiscing tellus in. Nunc diam suspendisse in fringilla id
            mauris urna lacus.
          </p>
        </div>
        <div className="featured__card-desc-fourth">
          <Specs Icon={HouseIcon} text="Self con" />
          <Specs Icon={SoupKitchenIcon} text="Kitchen" />
          <Specs Icon={WcIcon} text="Toilet" />
          <Specs Icon={WaterIcon} text="Running water" />
        </div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="featured__card-desc-btn"
        >
          View Details
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedCard;
