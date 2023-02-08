import "./Details.css";
import { Footer, Navbar, NewsLetter, SearchBar, Specs } from "../../components";
import HouseIcon from "@mui/icons-material/House";
import WaterIcon from "@mui/icons-material/Water";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import WcIcon from "@mui/icons-material/Wc";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RoomIcon from "@mui/icons-material/Room";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import Room1 from "./../../assets/room1.jpg";
import Room2 from "./../../assets/room2.jpg";
import Room3 from "./../../assets/room3.jpg";
import Room4 from "./../../assets/room4.jpg";

const Details = () => {
  return (
    <>
      <Navbar />
      <section className="details__section">
        <div className="details__section-content">
          <div className="details__top">
            <div className="details__top-display">
              <div className="details__top-display-left">
                <form className="details__top-form">
                  <h3>Search</h3>
                  <div className="details-form-group">
                    <p>Property Name</p>
                    <div>
                      <SearchIcon className="details-form-group-icon" />
                      <input
                        type="text"
                        name="lodge-name"
                        id="lodge-name"
                        placeholder="Search..."
                      />
                    </div>
                  </div>

                  <div className="details-form-group">
                    <p>Location</p>
                    <div>
                      <RoomIcon className="details-form-group-icon" />
                      <select
                        className="select"
                        defaultValue={"Location"}
                        name="lodge-location"
                        id="lodge-location"
                      >
                        <option value="Location" disabled>
                          Location
                        </option>
                        <option value="futo">Futo</option>
                        <option value="unn">Unn</option>
                        <option value="unizik">Unizik</option>
                      </select>
                      <KeyboardArrowDownIcon className="select-icon" />
                    </div>
                  </div>

                  <div className="details-form-group">
                    <p>Town</p>
                    <div>
                      <HouseIcon className="details-form-group-icon" />
                      <select
                        className="select"
                        defaultValue={"Town"}
                        name="lodge-town"
                        id="lodge-town"
                      >
                        <option value="Town" disabled>
                          Town
                        </option>
                        <option value="futo">Eziobodo</option>
                        <option value="unn">Umuchimma</option>
                        <option value="unizik">Ihiagwa</option>
                      </select>
                      <KeyboardArrowDownIcon className="select-icon" />
                    </div>
                  </div>

                  <div className="details-form-group">
                    <p>Type Of Lodge</p>
                    <div>
                      <CallMergeIcon className="details-form-group-icon" />
                      <select
                        className="select"
                        defaultValue={"Type Of Lodge"}
                        name="lodge-type"
                        id="lodge-type"
                      >
                        <option value="Type Of Lodge" disabled>
                          Type Of Lodge
                        </option>
                        <option value="futo">Big</option>
                        <option value="unn">Small</option>
                        <option value="unizik">Medium</option>
                      </select>
                      <KeyboardArrowDownIcon className="select-icon" />
                    </div>
                  </div>

                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    className="details-form-group-btn"
                  >
                    Search
                  </motion.div>
                </form>
                <div className="details__top-map-box">
                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    className="details__top-map-box-btn"
                  >
                    Show on map
                  </motion.div>
                </div>
              </div>
              <div className="details__top-display-right">
                <div className="right__text">
                  <h3>
                    Odilanma Lodge, Federal University of Technology, Owerri.
                  </h3>
                  <div className="right__location">
                    <RoomIcon className="right__location-icon" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Sagittis cum metus
                      praesent porttitor. Fusce pellentesque et mi euismod
                      habitasse pellentesque netus consequat.
                    </p>
                  </div>
                  <div className="price-map">
                    <p className="right__price">₦ 300,000.00 </p>
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      className="details__top-map-box-btn"
                    >
                      Show on map
                    </motion.div>
                  </div>
                </div>

                <div className="right__images">
                  <div className="right__images-top">
                    <img src={Room2} alt="image-1" />
                  </div>
                  <div className="right__images-bottom">
                    <div className="right__images-bottom-1">
                      <img src={Room2} alt="image-2" />
                    </div>
                    <div className="right__images-bottom-2">
                      <img src={Room3} alt="image-3" />
                    </div>
                    <div className="right__images-bottom-3">
                      <img src={Room4} alt="image-4" />
                      <motion.span whileTap={{ scale: 0.8 }}>
                        View More
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>

              {/* display this search only @device-width-of 900px */}
              <div className="details__top-display-search">
                <SearchBar />
              </div>
            </div>
            <div className="details__top-specs">
              <Specs Icon={HouseIcon} text="Self Con" />
              <Specs Icon={SoupKitchenIcon} text="Kitchen" />
              <Specs Icon={WaterIcon} text="Running Water" />
              <Specs Icon={WcIcon} text="2 Toilets" />
              <Specs Icon={ApartmentIcon} text="Top Floor" />
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores ea magni ratione quae architecto delectus? Fugit,
                  unde? Ducimus, numquam doloremque? Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam.
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
