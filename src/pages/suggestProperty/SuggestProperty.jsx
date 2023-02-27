import "./SuggestProperty.css";
import React from "react";
import { Footer, Navbar, NewsLetter } from "../../components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { motion } from "framer-motion";
const SuggestProperty = () => {
  return (
    <>
      <Navbar />
      <div className="suggest_body">
        <div className="suggest_body-top">
          <h1>Suggest a property</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Iaculis lacinia felis amet
            blandit pretium lectus. Risus a sit vulputate diam volutpat lorem id
            nunc.
          </p>
        </div>

        <div className="suggest_property-content">
          <div className="left">
            <div className="info-card">
              <div className="icon">
                <PersonOutlineOutlinedIcon className="info-card-icon" />
              </div>
              <h3>1. Client Information</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vivamus turpis malesuada
                enim nisl praesent massa morbi eu morbi. Neque semper ultricies
                fames.
              </p>
            </div>

            <div className="info-card">
              <div className="icon">
                <WorkHistoryOutlinedIcon className="info-card-icon" />
              </div>
              <h3>2. Property Information</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vivamus turpis malesuada
                enim nisl praesent massa morbi eu morbi. Neque semper ultricies
                fames.
              </p>
            </div>
          </div>
          <div className="right">
            <form>
              <div className="personal-details">
                <div>
                  {" "}
                  <div className="peronal-details-form-group">
                    <label>Fullname</label>
                    <input type="text" placeholder="fullname" />
                  </div>{" "}
                  <div className="peronal-details-form-group">
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                  </div>
                </div>
                <div>
                  <div className="peronal-details-form-group">
                    <label>Phone number</label>
                    <input type="number" />
                  </div>

                  <div className="peronal-details-form-group">
                    <label>Institution</label>
                    <input type="text" placeholder="institution" />
                  </div>
                </div>
              </div>
              <div className="property-details">
                <div>
                  {" "}
                  <div className="peronal-details-form-group">
                    <label>Listing name</label>
                    <input type="text" placeholder="listing name" />
                  </div>
                </div>
                <div>
                  <div className="peronal-details-form-group">
                    <label>Lodge Type</label>
                    <input type="text" placeholder="Town" />
                  </div>
                  <div className="peronal-details-form-group">
                    <label>Town</label>
                    <input type="text" placeholder="Town" />
                  </div>
                </div>{" "}
                <div>
                  <div className="peronal-details-form-group">
                    <label>Location</label>
                    <input type="text" placeholder="Location" />
                  </div>
                  <div className="peronal-details-form-group">
                    <label>Address</label>
                    <input type="text" placeholder="Address" />
                  </div>
                </div>{" "}
                <div>
                  <div className="peronal-details-form-group">
                    <label>Lodge Price</label>
                    <input type="number" />
                  </div>
                  <div className="peronal-details-form-group">
                    <label>Bedroom</label>
                    <input type="text" placeholder="Town" />
                  </div>
                </div>{" "}
                <div>
                  {" "}
                  <div className="peronal-details-form-group">
                    <label>Lodge Pictures</label>
                    <input type="text" placeholder="listing name" />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="peronal-details-form-group">
                    <label>Description</label>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="15"
                    ></textarea>
                  </div>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.8 }}
                className="suggest-btn"
                type="submit"
              >
                Suggest
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default SuggestProperty;
