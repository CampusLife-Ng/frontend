import "./UpdateLodge.css";
import { Navbar, NewsLetter, Footer, Button } from "../../components";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import NoImg from "./../../assets/no-img.png";
import { useEffect, useReducer } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Select from "react-select";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { toast } from "react-toastify";

// UPDATE LODGE STATE
const UPDATEDETAILSTATE = {
  lodgename: "",
  lodgetype: "",
  lodgetown: "",
  lodgeaddress: "",
  caretakernumber: null,
  lodgeprice: null,
  lodgespecs: [],
  lng: null,
  lat: null,
  description: "",
};

// UPDATE IMAGE STATE
const UPDATEIMGSTATE = {
  lodgemultiplepicture: [],
  lodgepicture: null,
};

//  UPDATE LODGE ACTIONS
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
  LODGESPECS: "lodgespecs",
};

// UPDATE IMG REDUCER
const imgReducer = (state, action) => {
  switch (action.type) {
    case "lodgepicture":
      return { ...state, lodgepicture: action.payload };

    case "lodgemultiplepicture":
      return { ...state, lodgemultiplepicture: action.payload };
  }
};

// UPDATE LODGE REDUCER
const detailsReducer = (state, action) => {
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

    case "lodgespecs":
      return { ...state, lodgespecs: action.payload };

    case "lodgeprice":
      return { ...state, lodgeprice: action.payload };

    case "lat":
      return { ...state, lat: action.payload };

    case "lng":
      return { ...state, lng: action.payload };

    case "description":
      return { ...state, description: action.payload };
  }
};

const UpdateLodge = () => {
  useEffect(() => {
    let preview = document.getElementById("update-img-preview");
    preview.src = NoImg;
  }, []);

  const [updateDetailState, dispatch] = useReducer(
    detailsReducer,
    UPDATEDETAILSTATE
  );
  const [updateImgState, imgDispatch] = useReducer(imgReducer, UPDATEIMGSTATE);

  const lodgeSpecs = [
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
    dispatch({ type: ACTION.LODGESPECS, payload: ans });
  };

  // handle single image upload
  const handleImgUpload = (e) => {
    if (e.target.files.length > 0) {
      let preview = document.getElementById("update-img-preview");
      const imgSrc = URL.createObjectURL(e.target.files[0]);
      preview.src = imgSrc;
      imgDispatch({ type: ACTION.LODGEPICTURE, payload: e.target.files[0] });
    }
  };

  // handle multiple image upload
  const handleMultipleImgUpload = (e) => {
    let boxContainer = document.getElementById("update-multiple-img-showcase");
    let finalArr = [];
    if (e.target.files.length < 1 || e.target.files.length > 3)
      return toast.warning("Showcase images must be between 1 and 3 images");
    boxContainer.innerHTML = "";
    for (let i = 0; i < e.target.files.length; i++) {
      boxContainer.innerHTML += `<p>${e.target.files[i].name}</p>`;
      finalArr.push(e.target.files[i]);
    }

    imgDispatch({ type: ACTION.LODGEMULTIPLEPICTURE, payload: finalArr });
  };

  const handleSubmitUpdateDetail = (e) => {
    e.preventDefault();

    // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
    console.log(updateDetailState);
    // window.location.reload(); // for now!!
  };

  const handleSubmitUpdateImg = (e) => {
    e.preventDefault();

    for (const val in updateImgState) {
      if (!updateImgState[val])
        return toast.warning("Atleast one field is required!");
    }

    // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
    console.log(updateImgState);
    // window.location.reload(); // for now!!
  };

  return (
    <>
      <Navbar />
      <div className="update-lodge">
        <div className="update-lodge-content">
          <div className="update-lodge-content-details">
            {/* IMAGE PREVIEW */}
            <div className="left">
              <div className="left-top">
                <h3>
                  Image Preview <span>(lodge frontal view*)</span>
                </h3>
                <div className="left-top-icon-box">
                  <DeleteOutlineOutlinedIcon className="left-top-icon" />
                </div>
              </div>
              <div className="left-img-container">
                <img src="" alt="" id="update-img-preview" />
              </div>
            </div>

            {/* FORM DETAILS */}
            <div className="right">
              <form
                onSubmit={(e) => handleSubmitUpdateDetail(e)}
                className="update-details"
              >
                <h2>Update Lodge Details</h2>
                <div>
                  {" "}
                  <div className="peronal-details-form-group">
                    <label>Lodge name</label>
                    <input
                      onChange={(e) =>
                        dispatch({
                          type: ACTION.LODGENAME,
                          payload: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="lodge name"
                    />
                  </div>
                </div>
                <div className="update-flat">
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
                        <option value="umuchimma">Umuchimma</option>
                        <option value="ihiagwa">Ihiagwa</option>
                      </select>
                      <ArrowDropDownOutlinedIcon className="instDropDown" />
                    </div>
                  </div>
                </div>{" "}
                <div className="update-flat">
                  <div className="peronal-details-form-group">
                    <label>Address</label>
                    <input
                      onChange={(e) =>
                        dispatch({
                          type: ACTION.LODGEADDRESS,
                          payload: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="lodge address"
                    />
                  </div>
                </div>{" "}
                <div className="update-flat">
                  <div className="peronal-details-form-group">
                    <label>CareTaker's Number</label>
                    <div>
                      <span className="country-code">+234</span>
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
                </div>{" "}
                <div className="create-lodge-select">
                  <label>
                    Lodge Specs <span>(you can select multiple specs)</span>
                  </label>
                  <Select
                    onChange={handleSelectChange}
                    options={lodgeSpecs}
                    isMulti
                  />
                </div>
                <div className="update-flat">
                  <div className="peronal-details-form-group">
                    <label>Lodge Price</label>
                    <div>
                      <span className="country-code">₦</span>
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
                </div>{" "}
                <div className="update-flat">
                  {" "}
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
                <div>
                  {" "}
                  <div className="peronal-details-form-group">
                    <label>Description</label>
                    <textarea
                      onChange={(e) =>
                        dispatch({
                          type: ACTION.DESCRIPTION,
                          payload: e.target.value,
                        })
                      }
                      name="description"
                      id="description"
                      cols="30"
                      rows="15"
                    ></textarea>
                  </div>
                </div>
                <div className="suggest-btn">
                  <Button text="Update Lodge Details" type="fill" />
                </div>
              </form>

              <form
                onSubmit={(e) => handleSubmitUpdateImg(e)}
                className="upload-img-form"
              >
                <h2>Update Images</h2>

                <div className="upload-img-form-content">
                  <div>
                    {" "}
                    <div className="peronal-details-form-group">
                      <label>
                        Lodge Picture{" "}
                        <span className="lodge-picture-notice">
                          (lodge frontal view*)
                        </span>
                      </label>
                      <div>
                        <label
                          id="upload-update-lodge-img"
                          className="lodge-img"
                          htmlFor="upload-update-lodge-image"
                        ></label>
                        <input
                          onChange={(e) => handleImgUpload(e)}
                          className="lodge-image-action"
                          id="upload-update-lodge-image"
                          type="file"
                          accept="image/*"
                        />
                        <FileUploadOutlinedIcon className="lodge-img-icon" />
                      </div>
                    </div>
                  </div>

                  <div className="showcase-div">
                    <div className="peronal-details-form-group showcase">
                      <label>
                        Showcase Pictures{" "}
                        <span className="lodge-picture-notice">
                          (between 1 to 3 images*)
                        </span>
                      </label>
                      <div>
                        <label
                          id="lodge-img-showcase"
                          className="lodge-img"
                          htmlFor="upload-update-lodge-image-showcase"
                        ></label>
                        <input
                          onChange={(e) => handleMultipleImgUpload(e)}
                          className="lodge-image-action"
                          id="upload-update-lodge-image-showcase"
                          type="file"
                          accept="image/*"
                          multiple
                        />
                        <FileUploadOutlinedIcon className="lodge-img-icon" />
                      </div>
                      <div
                        id="update-multiple-img-showcase"
                        className="multiple-img-showcase"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="suggest-btn">
                  <Button text="Update Image" type="fill" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default UpdateLodge;
