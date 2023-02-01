import { useEffect, useState } from "react";
import "./FeaturedCard.css";
import RoomIcon from "@mui/icons-material/Room";
import Specs from "./../specs/Specs";
import HouseIcon from "@mui/icons-material/House";
import WaterIcon from "@mui/icons-material/Water";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import WcIcon from "@mui/icons-material/Wc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addLodge, selectLodgeList } from "../../features/slices/lodgeSlice";

const FeaturedCard = ({
  img,
  id,
  available,
  lodgePrice,
  lodgeName,
  lodgeLocation,
}) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const lodgeList = useSelector(selectLodgeList);

  const toggleLike = () => {
    setLiked(!liked);
  };

  // add liked property to the state
  useEffect(() => {
    dispatch(
      addLodge({
        id,
        img,
        available,
        lodgePrice,
        lodgeName,
        lodgeLocation,
      })
    );
  }, [liked]);

  const activateLike = (num) => {
    return lodgeList?.findIndex((item) => item.id === num);
  };

  return (
    <div className="featured__card">
      <div className="featured__card-left">
        <img src={img} alt="" />
        <div
          className={`availability ${available ? "available" : "notavailable"}`}
        >
          {available ? "Available" : "Not Available"}
        </div>
        <motion.div
          onClick={toggleLike}
          whileTap={{ scale: 0.8 }}
          className="like__box"
        >
          <FavoriteIcon
            className={`${
              activateLike(id) > -1 ? "lodge-liked" : "lodge-like"
            }`}
          />
        </motion.div>
      </div>
      <div className="featured__card-desc">
        <div className="featured__card-desc-first">
          <p className="desc__location">
            <RoomIcon className="desc__location-icon" />
            <span>{lodgeLocation}</span>
          </p>
          <p className="desc__price">₦ {lodgePrice} </p>
        </div>
        <div className="featured__card-desc-second">
          <h3>{lodgeName}</h3>
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
