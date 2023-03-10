import "./Details.css";
import { Footer, Navbar, NewsLetter, SearchBar, Specs } from "../../components";
import HouseIcon from "@mui/icons-material/House";
import RoomIcon from "@mui/icons-material/Room";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const Details = () => {
  const handleShowMap = () => {
    toast.info("Map Coming Soon.. 😁");
  };

  const location = useLocation();
  // console.log(location);

  return (
    <>
      <Navbar />
      <section className="details__section">
        <div className="details__section-content">
          <div className="details__top">
            <div className="details__top-display">
              <div className="details-container">
                <div className="details__top-display-right">
                  <div className="right__text">
                    <h3>
                      {location?.state?.data?.lodgename}, Federal University of
                      Technology, Owerri.
                    </h3>
                    <div className="right__location">
                      <RoomIcon className="right__location-icon" />
                      <p>{location?.state?.data?.lodgedescription}</p>
                    </div>
                    <div className="price-map">
                      <p className="right__price">
                        {location?.state?.data?.lodgeprice}
                      </p>
                      <motion.div
                        onClick={handleShowMap}
                        whileTap={{ scale: 0.8 }}
                        className="details__top-map-box-btn"
                      >
                        Show on map
                      </motion.div>
                    </div>
                  </div>

                  <div className="right__images">
                    <div className="right__images-top">
                      <img
                        src={location?.state?.data?.lodgepicture}
                        alt="image-1"
                      />
                    </div>
                    <div className="right__images-bottom">
                      {location?.state?.data?.lodgemultiplepicture?.map(
                        (item, idx) => (
                          <>
                            <div className={`right__images-bottom-${idx + 1}`}>
                              <img src={item} alt="image-2" />
                            </div>
                          </>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="details-container">
              <div className="details__top-specs">
                {location?.state?.data?.specifications[0]
                  .split(", ")
                  .map((item, idx) => (
                    <Specs key={idx} Icon={HouseIcon} text={item} />
                  ))}
              </div>
            </div>
          </div>
          <div className="details__bottom">
            <div className="details__bottom-desc">
              <h3>Property</h3>
              <div className="details__bottom-desc-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores ea magni ratione quae architecto delectus? Fugit,
                  unde? Ducimus, numquam doloremque? Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Rem libero veniam sint sed quis
                  aliquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  iure nisi est dolorem illo dolor eaque veniam rem maiores
                  tempora, optio iusto. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Molestiae, ullam.
                </p>
              </div>
            </div>

            <div className="details__bottom-desc">
              <h3>Availability</h3>
              <div className="details__bottom-desc-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores ea magni ratione quae architecto delectus? Fugit,
                  unde? Ducimus, numquam doloremque? Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam.
                </p>
              </div>
            </div>

            <div className="details__bottom-desc">
              <h3>Payment Process</h3>
              <div className="details__bottom-desc-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores ea magni ratione quae architecto delectus? Fugit,
                  unde? Ducimus, numquam doloremque? Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam.
                </p>
              </div>
            </div>

            <div className="details__bottom-desc">
              <h3>Agent And Contact Info</h3>
              <div className="details__bottom-desc-content">
                <p>
                  Lorem ipsum dolor, {location?.state?.data?.caretakernumber}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default Details;
