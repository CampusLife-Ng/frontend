import React, { useEffect, useReducer } from "react";
import "./CreateLodge.css";
import { Navbar, Footer, NewsLetter, Button } from "../../components";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { motion } from "framer-motion";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { useState } from "react";
import NoImg from "./../../assets/no-img.png";
import { Action } from "@remix-run/router";
import { toast } from "react-toastify";

// create lodge state
const STATE = {
  lodgename: "",
  lodgetype: "",
  lodgetown: "",
  lodgeaddress: "",
  caretakernumber: null,
  lodgeprice: null,
  lng: null,
  lat: null,
  lodgepicture: null,
  lodgemultiplepicture: [],
  description: "",
};

// create reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "lodgename":
      return { ...state, lodgename: action.payload };

    case "lodgetype":
      return { ...state, lodgetype: action.payload };

    case "lodgetown":
      return { ...state, lodgetown: action.payload };

    case "lodgeaddress":
      return { ...state, lodgeaddress: action.payload };

    case "caretakernumber":
      return { ...state, caretakernumber: action.payload };

    case "lodgeprice":
      return { ...state, lodgeprice: action.payload };

    case "lat":
      return { ...state, lat: action.payload };

    case "lng":
      return { ...state, lng: action.payload };

    case "lodgepicture":
      return { ...state, lodgepicture: action.payload };

    case "lodgemultiplepicture":
      return { ...state, lodgemultiplepicture: action.payload };

    case "description":
      return { ...state, description: action.payload };

    default:
      throw new Error().message;
  }
};

// create lodge actions
const ACTION = {
  LODGENAME: "lodgename",
  LODGETYPE: "lodgetype",
  LODGETOWN: "lodgetown",
  LODGEADDRESS: "lodgeaddress",
  CARETAKERNUMBER: "caretakernumber",
  LODGEPRICE: "lodgeprice",
  LNG: "lng",
  LAT: "lat",
  LODGEPICTURE: "lodgepicture",
  LODGEMULTIPLEPICTURE: "lodgemultiplepicture",
  DESCRIPTION: "description",
};

const CreateLodge = () => {
  const [singleImg, setSingleImg] = useState(null);
  const [createLodgeState, dispatch] = useReducer(reducer, STATE);

  useEffect(() => {
    let preview = document.getElementById("create-lodge__image-file-preview");
    preview.src = NoImg;
  }, []);

  // handle single image upload
  const handleImgUpload = (e) => {
    if (e.target.files.length > 0) {
      let preview = document.getElementById("create-lodge__image-file-preview");
      const imgSrc = URL.createObjectURL(e.target.files[0]);
      preview.src = imgSrc;
      setSingleImg(imgSrc);
      dispatch({ type: ACTION.LODGEPICTURE, payload: e.target.files[0] });
    }
  };

  // handle multiple image upload
  const handleMultipleImgUpload = (e) => {
    let boxContainer = document.getElementById("create-multiple-img-showcase");
    let finalArr = [];
    if (e.target.files.length < 3)
      return toast.warning("Show case image field must have 3 images");
    console.log(e.target.files);
    boxContainer.innerHTML = "";
    for (let i = 0; i < e.target.files.length; i++) {
      boxContainer.innerHTML += `<p>${e.target.files[i].name}</p>`;
      finalArr.push(e.target.files[i]);
    }

    dispatch({ type: ACTION.LODGEMULTIPLEPICTURE, payload: finalArr });
  };

  // handle delete preview picture
  const handleDeletePreviewPicture = () => {
    URL.revokeObjectURL(singleImg);
    let preview = document.getElementById("create-lodge__image-file-preview");
    preview.src = NoImg;
  };

  const handleCreateFormSubmit = (e) => {
    e.preventDefault();

    for (const val in createLodgeState) {
      if (!createLodgeState[val])
        return toast.warning("All fields are required!");
    }

    // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
    console.log(createLodgeState);
    // window.location.reload(); // for now!!
  };

  return (
    <>
      <Navbar />
      <div className="create-lodge">
        <div className="left">
          <div>
            <h3>
              Image Preview{" "}
              <p className="lodge-picture-notice">(lodge frontal view*)</p>
            </h3>
            <motion.div
              onClick={handleDeletePreviewPicture}
              whileTap={{ scale: 0.8 }}
              className="delete-box"
            >
              <DeleteOutlineOutlinedIcon className="delete-box-icon" />
            </motion.div>
          </div>

          <div className="create-lodge__preview-img">
            <img id="create-lodge__image-file-preview" src="" />
          </div>
        </div>
        <div className="right">
          <h2>Create A Lodge</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            accusantium placeat recusandae
          </p>

          <form
            onSubmit={(e) => handleCreateFormSubmit(e)}
            className="create-lodge-form"
          >
            {/* LODGENAME */}
            <div className="create-lodge-form-group">
              <label>Lodgename</label>
              <input
                value={createLodgeState.lodgename}
                onChange={(e) =>
                  dispatch({ type: ACTION.LODGENAME, payload: e.target.value })
                }
                type="text"
                placeholder="Lodgename"
              />
            </div>

            {/* LODGETYPE AND LODGETOWN */}
            <div className="collect">
              <div className="peronal-details-form-group">
                <label>Lodge Type</label>
                <div>
                  <select
                    onChange={(e) =>
                      dispatch({
                        type: ACTION.LODGETYPE,
                        payload: e.target.value,
                      })
                    }
                    defaultValue={"Select Lodge Type"}
                    className="institution-select"
                    name="lodgetype"
                    id="lodgetype"
                  >
                    <option value={"Select Lodge Type"} disabled>
                      Select Lodge Type
                    </option>
                    <option value="self con">Self con</option>
                    <option value="2 bedroom">2 bedroom</option>
                    <option value="villa">villa</option>
                  </select>
                  <ArrowDropDownOutlinedIcon className="instDropDown" />
                </div>
              </div>
              <div className="peronal-details-form-group">
                <label>Town</label>
                <div>
                  <select
                    onChange={(e) =>
                      dispatch({
                        type: ACTION.LODGETOWN,
                        payload: e.target.value,
                      })
                    }
                    defaultValue={"Select Town"}
                    className="institution-select"
                    name="lodgetown"
                    id="lodgetown"
                  >
                    <option value={"Select Town"} disabled>
                      Select Town
                    </option>
                    <option value="eziobodo">Eziobodo</option>
                    <option value="ummuchimma">Umuchimma</option>
                    <option value="ihiagwa">Ihiagwa</option>
                  </select>
                  <ArrowDropDownOutlinedIcon className="instDropDown" />
                </div>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="create-lodge-form-group">
              <label>Address</label>
              <input
                onChange={(e) =>
                  dispatch({
                    type: ACTION.LODGEADDRESS,
                    payload: e.target.value,
                  })
                }
                type="text"
                placeholder="Address"
              />
            </div>

            {/* CARETAKERS NUM AND LODGE PRICE */}
            <div className="collect">
              <div className="number-style">
                <label>Caretaker's number</label>
                <div>
                  <span>+234</span>
                  <input
                    onChange={(e) =>
                      dispatch({
                        type: ACTION.CARETAKERNUMBER,
                        payload: e.target.value,
                      })
                    }
                    type="number"
                  />
                </div>
              </div>

              <div className="number-style">
                <label>Lodge price</label>
                <div>
                  <span>₦</span>
                  <input
                    onChange={(e) =>
                      dispatch({
                        type: ACTION.LODGEPRICE,
                        payload: e.target.value,
                      })
                    }
                    type="number"
                  />
                </div>
              </div>
            </div>

            {/* LONGITUDE AND LATITUDE */}
            <div className="collect">
              <div className="peronal-details-form-group">
                <label>Longitude</label>
                <input
                  onChange={(e) =>
                    dispatch({
                      type: ACTION.LNG,
                      payload: e.target.value,
                    })
                  }
                  type="number"
                />
              </div>{" "}
              <div className="peronal-details-form-group">
                <label>Latitude</label>
                <input
                  onChange={(e) =>
                    dispatch({
                      type: ACTION.LAT,
                      payload: e.target.value,
                    })
                  }
                  type="number"
                />
              </div>
            </div>

            {/* LODGEPICTURE */}
            <div className="peronal-details-form-group">
              <label className="create-lodge-image-label">
                Lodge Picture{" "}
                <span className="lodge-picture-notice">
                  (lodge frontal view*)
                </span>
              </label>
              <div>
                <label
                  className="lodge-img"
                  htmlFor="create-lodge-image"
                ></label>
                <input
                  onChange={(e) => handleImgUpload(e)}
                  className="lodge-image-action"
                  id="create-lodge-image"
                  type="file"
                  accept="image/*"
                />
                <FileUploadOutlinedIcon className="lodge-img-icon" />
              </div>
            </div>
            {/* SHOWCASE PICTURES */}
            <div className="peronal-details-form-group showcase">
              <label className="create-lodge-image-label">
                Showcase Pictures{" "}
                <span className="lodge-picture-notice">
                  (exactly 3 images*)
                </span>
              </label>
              <div>
                <label
                  className="lodge-img"
                  htmlFor="create-lodge-image-showcase"
                ></label>
                <input
                  onChange={(e) => handleMultipleImgUpload(e)}
                  className="lodge-image-action"
                  id="create-lodge-image-showcase"
                  type="file"
                  accept="image/*"
                  multiple
                />
                <FileUploadOutlinedIcon className="lodge-img-icon" />
              </div>
              <div
                id="create-multiple-img-showcase"
                className="multiple-img-showcase"
              ></div>
            </div>
            {/* DESCRIPTION */}
            <div className="peronal-details-form-group">
              <label className="create-lodge-image-label">Description</label>
              <textarea
                onChange={(e) =>
                  dispatch({
                    type: ACTION.DESCRIPTION,
                    payload: e.target.value,
                  })
                }
                cols="30"
                rows="15"
              ></textarea>
            </div>

            <Button text="Creat Lodge" type="fill" submit={true} />
          </form>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default CreateLodge;
