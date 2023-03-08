import { useEffect, useState } from "react";
import "./LodgeCard.css";
import { motion } from "framer-motion";
import RoomIcon from "@mui/icons-material/Room";
import Specs from "./../specs/Specs";
import HouseIcon from "@mui/icons-material/House";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addLodge,
  displaceLodges,
  selectLodgeList,
} from "../../features/slices/lodgeSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { selectUser } from "../../features/slices/userSlice";

const LodgeCard = ({
  id,
  lodgepicture,
  lodgeprice,
  lodgename,
  address,
  specifications,
  type,
}) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const lodgeList = useSelector(selectLodgeList);
  const toggleLike = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    dispatch(
      addLodge({
        id,
        lodgepicture,
        lodgeprice,
        lodgename,
        address,
        specifications,
        lodgeType: "normal",
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

  const getUser = useSelector(selectUser);

  return (
    <div className="lodge__card">
      <div className="top">
        <img src={lodgepicture} alt="" />

        {type === "featured" ? (
          <></>
        ) : (
          <motion.div
            onClick={() => {
              toggleLike();
            }}
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
      <div className="bottom">
        <div className="bottom__first">
          <p className="lodge__card-price">₦ {lodgeprice} </p>
          <motion.p onClick={handleShowMap} whileTap={{ scale: 0.8 }}>
            Show on map
          </motion.p>
        </div>
        <p className="lodge__name">{lodgename} Lodge, FUTO</p>
        <p className="lodge__location">
          <RoomIcon className="desc__location-icon" />
          <span>{address}</span>
        </p>

        <div className="featured__card-desc-fourth">
          {
            specifications[0].split(", ").map(item => <Specs Icon={HouseIcon} text={item} />)
          }
        </div>
        <div className="card-btns">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="featured__card-desc-btn"
          >
            <Link style={{ color: "white" }} to="/details">
              View Details
            </Link>
          </motion.div>

          {getUser.role === "admin" && (
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
      </div>
    </div>
  );
};

export default LodgeCard;
