import { useEffect, useState } from "react";
import "./LodgeCard.css";
import { motion } from "framer-motion";
import RoomIcon from "@mui/icons-material/Room";
import Specs from "./../specs/Specs";
import HouseIcon from "@mui/icons-material/House";
import WaterIcon from "@mui/icons-material/Water";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import WcIcon from "@mui/icons-material/Wc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addLodge,
  removeLodge,
  selectIdLodgeList,
} from "../../features/slices/lodgeSlice";

const LodgeCard = ({
  id,
  lodgeImg,
  available,
  lodgePrice,
  lodgeName,
  lodgeLocation,
}) => {
  const idListOfLodge = useSelector(selectIdLodgeList);
  // console.log(idListOfLodge);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const toggleLike = () => {
    setLiked(!liked);
  };

  // add liked property to the state
  useEffect(() => {
    if (liked) {
      dispatch(
        addLodge({
          id,
          lodgeImg,
          available,
          lodgePrice,
          lodgeName,
          lodgeLocation,
        })
      );
    } else {
      dispatch(removeLodge(id));
    }
  }, [liked]);

  return (
    <div className="lodge__card">
      <div className="top">
        <img src={lodgeImg} alt="" />
        <div
          className={`availability ${available ? "available" : "notavailable"}`}
        >
          {available ? "Available" : "Not Available"}
        </div>
        <motion.div
          onClick={() => {
            toggleLike();
          }}
          whileTap={{ scale: 0.8 }}
          className="like__box"
        >
          <FavoriteIcon
            className={`${
              liked || idListOfLodge?.includes(id)
                ? "lodge-liked"
                : "lodge-like"
            }`}
          />
        </motion.div>
      </div>
      <div className="bottom">
        <div className="bottom__first">
          <p className="lodge__card-price">₦ {lodgePrice} </p>
          <motion.p whileTap={{ scale: 0.8 }}>Show on map</motion.p>
        </div>
        <p className="lodge__name">{lodgeName} Lodge, FUTO</p>
        <p className="lodge__location">
          <RoomIcon className="desc__location-icon" />
          <span>{lodgeLocation}</span>
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
