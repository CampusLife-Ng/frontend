import "./SuggestProperty.css";
import React, { useState } from "react";
import { Footer, Navbar, NewsLetter } from "../../components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import SuggestForm from "./SuggestForm";
import { useNavigate, useLocation } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { motion } from "framer-motion";
import NoImg from "./../../assets/no-img.png"

const SuggestProperty = () => {
  const location = useLocation();
  const verify = location.state?.verify || false;
  
  const handleDeleteImage = () => {
    const preImg = document.getElementById("image-file-preview");
    preImg.src = NoImg
  }

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

            <div className="preview-box">
              <div>
                <h3>
                  Image Preview{" "}
                  <span className="lodge-picture-notice">
                    (lodge frontal view*)
                  </span>
                </h3>
                <motion.div
                  onClick={handleDeleteImage}
                  whileTap={{ scale: 0.8 }}
                  className="delete-box"
                >
                  <DeleteOutlineOutlinedIcon className="delete-preview-box" />
                </motion.div>
              </div>
              <div className="preview-img">
                <img id="image-file-preview" src="" />
              </div>
            </div>
          </div>
          <div className="right">
            <SuggestForm verify={verify} />
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default SuggestProperty;
