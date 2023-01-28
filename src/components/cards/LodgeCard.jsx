import { useState } from "react";
import "./LodgeCard.css";
import MobileImg3 from "./../../assets/mobile-img3.jpg";
import { motion } from "framer-motion";
import RoomIcon from "@mui/icons-material/Room";
import Specs from "./../specs/Specs";
import HouseIcon from "@mui/icons-material/House";
import WaterIcon from "@mui/icons-material/Water";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import WcIcon from "@mui/icons-material/Wc";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LodgeCard = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="lodge__card">
      <div className="top">
        <img src={MobileImg3} alt="" />
        <div className="availability available">Available</div>
        <motion.div
          onClick={toggleLike}
          whileTap={{ scale: 0.8 }}
          className="like__box"
        >
          <FavoriteIcon className={`${liked ? "lodge-liked" : "lodge-like"}`} />
        </motion.div>
      </div>
      <div className="bottom">
        <div className="bottom__first">
          <p className="lodge__card-price">₦ 300,000.00 </p>
          <motion.p whileTap={{ scale: 0.8 }}>Show on map</motion.p>
        </div>
        <p className="lodge__name">Chukwuebube Lodge, FUTO</p>
        <p className="lodge__location">
          <RoomIcon className="desc__location-icon" />
          <span>No 17, Onuiyi, Owerri road. Futo</span>
        </p>

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

export default LodgeCard;