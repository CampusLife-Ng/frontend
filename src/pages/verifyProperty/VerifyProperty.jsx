import "./VerifyProperty.css";
import { Navbar, NewsLetter, Footer } from "../../components";
import { motion } from "framer-motion";
import Room1 from "./../../assets/room1.jpg";
import Room2 from "./../../assets/room2.jpg";
import Room3 from "./../../assets/room3.jpg";
import { useNavigate } from "react-router-dom";

const VerifyProperty = () => {
  const navigator = useNavigate();

  const handleViewClick = () => {
    navigator("/suggest", { state: { verify: true } });
  };

  return (
    <>
      <Navbar />
      <div className="suggest">
        <div className="heading">
          <h2>View Suggested Properties</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            iure distinctio sapiente saepe, temporibus voluptates.
          </p>
        </div>

        <div className="suggest__cards">
          <div className="suggest__card">
            <div className="card__img">
              <img src={Room1} alt="" />
            </div>
            <p className="lodge__name">Lodge Name: Odilanma Lodge</p>
            <div className="card__status not-verified">
              Status: <span>Not Verified</span>{" "}
            </div>
            <div className="card__date">Last Updated: 11/05/2023</div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="card__btn"
              onClick={handleViewClick}
            >
              View
            </motion.div>
          </div>

          <div className="suggest__card">
            <div className="card__img">
              <img src={Room1} alt="" />
            </div>
            <p className="lodge__name">Lodge Name: Mimi's Lodge</p>
            <div className="card__status not-verified">
              Status: <span>Not Verified</span>{" "}
            </div>
            <div className="card__date">Last Updated: 11/05/2023</div>
            <motion.div whileTap={{ scale: 0.8 }} className="card__btn">
              View
            </motion.div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default VerifyProperty;
