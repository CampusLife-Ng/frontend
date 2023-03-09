import React, { useEffect, useReducer } from "react";
import "./CreateLodge.css";
import { Navbar, Footer, NewsLetter, Button } from "../../components";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { motion } from "framer-motion";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { useState } from "react";
import NoImg from "./../../assets/no-img.png";
import { toast } from "react-toastify";
import Select from "react-select";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/slices/userSlice";
import axios from "axios";
const CREATE_URL = "/lodges"

// create lodge state
const STATE = {
  lodgename: "",
  lodgetype: "",
  lodgetown: "",
  address: "",
  caretakernumber: null,
  lodgeprice: null,
  lng: "",
  lat: "",
  lodgepicture: null,
  lodgemultiplepicture: null,
  description: "",
  specifications: [],
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

    case "address":
      return { ...state, address: action.payload };

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

    case "specifications":
      return { ...state, specifications: action.payload };

    default:
      throw new Error().message;
  }
};

// create lodge actions
const ACTION = {
  LODGENAME: "lodgename",
  LODGETYPE: "lodgetype",
  LODGETOWN: "lodgetown",
  address: "address",
  CARETAKERNUMBER: "caretakernumber",
  LODGEPRICE: "lodgeprice",
  LNG: "lng",
  LAT: "lat",
  LODGEPICTURE: "lodgepicture",
  LODGEMULTIPLEPICTURE: "lodgemultiplepicture",
  DESCRIPTION: "description",
  specifications: "specifications",
};

const CreateLodge = () => {
  const [singleImg, setSingleImg] = useState(null);
  const [createLodgeState, dispatch] = useReducer(reducer, STATE);
  const getUser = useSelector(selectUser)
  const specifications = [
    { value: "water", label: "Water" },
    { value: "electricity", label: "Electricity" },
    { value: "good-network", label: "Good Network" },
    { value: "bustop-location", label: "Bustop Location" },
  ];

  const handleSelectChange = (event) => {
    let ans = [];
    for (let i = 0; i < event.length; i++) {
      ans.push(event[i].value);
    }
    // console.log(ans);
    dispatch({ type: ACTION.specifications, payload: ans });
  };

  useEffect(() => {
    let preview = document.getElementById("create-lodge__image-file-preview");
    preview.src = NoImg;
  }, []);

  // handle single image upload
  const handleImgUpload = (e) => {
    console.log(e.target.files[0])
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
    console.log(e.target.files)
    let boxContainer = document.getElementById("create-multiple-img-showcase");
    let finalArr = [];
    if (e.target.files.length < 1 || e.target.files.length > 3)
      return toast.warning("Showcase images must be between 1 and 3 images");
    boxContainer.innerHTML = "";
    for (let i = 0; i < e.target.files.length; i++) {
      boxContainer.innerHTML += `<p>${e.target.files[i].name}</p>`;
      finalArr.push(e.target.files[i]);
    }

    dispatch({ type: ACTION.LODGEMULTIPLEPICTURE, payload: e.target.files });
  };

  // handle delete preview picture
  const handleDeletePreviewPicture = () => {
    URL.revokeObjectURL(singleImg);
    let preview = document.getElementById("create-lodge__image-file-preview");
    preview.src = NoImg;
  };

  const handleCreateFormSubmit = async(e) => {
    e.preventDefault();

    try {
      for (const val in createLodgeState) {
      if (!createLodgeState[val])
        return toast.warning("All fields are required!");
      }

      console.log(createLodgeState?.lodgemultiplepicture)

      // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
      // console.log(createLodgeState);
      const formData = new FormData();
      formData.append("address", createLodgeState?.address);
      formData.append("caretakernumber", createLodgeState?.caretakernumber);
      formData.append("description", createLodgeState?.description);
      formData.append("lat", createLodgeState?.lat);
      formData.append("lng", createLodgeState?.lng);
      formData.append("lodgemultiplepicture", createLodgeState?.lodgemultiplepicture);
      formData.append("lodgename", createLodgeState?.lodgename);
      formData.append("lodgepicture", createLodgeState?.lodgepicture);
      formData.append("lodgeprice", createLodgeState?.lodgeprice);
      formData.append("lodgetown", createLodgeState?.lodgetown);
      formData.append("lodgetype", createLodgeState?.lodgetype);
      formData.append("specifications", createLodgeState?.specifications);
      // window.location.reload(); // for now!!

      // console.log(formData.entries())
      for (const pair of formData.entries()) {
        console.log(pair);
      }

      const response = await axios.post(`${CREATE_URL}`, formData, {headers: {"x-auth-token": getUser?.token }})
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  };
  // console.log(createLodgeState);
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
                    type: ACTION.address,
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

            {/* LODGE SPECS */}
            <div className="create-lodge-select">
              <label>
                Lodge Specs <span>(you can select multiple specs)</span>
              </label>
              <Select
                options={specifications}
                isMulti
                onChange={handleSelectChange}
              />
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
                  (between 1 to 3 images*)
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
