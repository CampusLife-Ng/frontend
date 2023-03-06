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
import {
  addLodge,
  displaceLodges,
  selectLodgeList,
} from "../../features/slices/lodgeSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { selectUser } from "../../features/slices/userSlice";

const FeaturedCard = ({
  img,
  id,
  available,
  lodgePrice,
  lodgeName,
  lodgeLocation,
  type,
}) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const lodgeList = useSelector(selectLodgeList);
  const getUser = useSelector(selectUser);

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
        lodgeType: "featured",
      })
    );
    dispatch(displaceLodges());
  }, [liked]);

  const activateLike = (num) => {
    return lodgeList?.findIndex((item) => item.id === num);
  };

  const handleShowMap = () => {
    toast.info("Map Coming Soon.. 😁");
  };

  return (
    <div className="featured__card">
      <div className="featured__card-left">
        <img src={img} alt="" />
        {/* <div
          className={`availability ${available ? "available" : "notavailable"}`}
        >
          {available ? "Available" : "Not Available"}
        </div> */}
        {type === "featured" ? (
          <></>
        ) : (
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
        )}
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
          <motion.p onClick={handleShowMap} whileTap={{ scale: 0.8 }}>
            Show on map
          </motion.p>
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
        <div className="featured-action-btns">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="featured__card-desc-btn"
          >
            <Link style={{ color: "white" }} to="/details">
              View Details
            </Link>
          </motion.div>

          {getUser && (
            <>
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="lodge-card-update-btn"
              >
                <Link style={{ color: "white" }} to="/update-lodge">
                  Update
                </Link>
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.8 }}
                className="lodge-card-delete-btn"
              >
                Delete
              </motion.div>
            </>
          )}
        </div>

        {type !== "featured" && (
          <div className="arrow__box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCard;
