import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import NoImg from "./../../assets/no-img.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components";
import Select from "react-select";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/slices/userSlice";
const CREATE_SUGGEST_LODGE_URL = "suggestlodges";

const SuggestForm = ({ verify, lodge }) => {
  const navigator = useNavigate();
  const [imageSource, setImageSource] = useState(null);
  const getUser = useSelector(selectUser)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  // console.log(lodge)

  const [suggestLodgeData, setSuggestLodgeData] = useState({
    fullname: null,
    email: null,
    phonenumber: null,
    institution: null,
    lodgename: null,
    lodgetype: null,
    lodgetown: null,
    address: null,
    lodgeprice: null,
    lodgedescription: null,
    lodgepicture: null,
    caretakernumber: null,
    lodgemultiplepicture: [],
    lng: null,
    lat: null,
    specifications: null,
  });

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

    setSuggestLodgeData((prev) => {
      return {
        ...prev,
        ["specifications"]: ans,
      };
    });
  };

  useEffect(() => {
    let preview = document.getElementById("image-file-preview");
    preview.src = NoImg;
  }, []);

  // console.log(suggestLodgeData);

  const handleImgUpload = (e) => {
    if (e.target.files.length > 0) {
      let preview = document.getElementById("image-file-preview");
      // console.log(e.target.files[0])
      const imgSrc = URL.createObjectURL(e.target.files[0]);
      // console.log(imgSrc)
      // console.log(preview)
      preview.src = imgSrc;
      setSuggestLodgeData((prev) => {
        return {
          ...prev,
          ["lodgepicture"]: e.target.files[0],
        };
      });
    }
  };

  const handleImgUploadMultiple = (e) => {
    let boxContainer = document.getElementById("multiple-img-showcase");
    let finalArr = [];
    if (e.target.files.length < 1 || e.target.files.length > 3)
      return toast.warning("Showcase images must be between 1 and 3 images");
    boxContainer.innerHTML = "";
    for (let i = 0; i < e.target.files.length; i++) {
      boxContainer.innerHTML += `<p>${e.target.files[i].name}</p>`;
      finalArr.push(e.target.files[i]);
      // console.log(e.target.files[i].name)
    }

    setSuggestLodgeData((prev) => {
      return {
        ...prev,
        ["lodgemultiplepicture"]: finalArr,
      };
    });
  };

  const updateSuggestFormState = (type, value) => {
    // console.log(type, value);
    setSuggestLodgeData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const handleTrashSuggestion = async() => {
    try {
      setIsLoading(true)
      const response = await axios.delete(`/suggestlodges/${lodge?._id}`, {
        headers: {
          "x-auth-token": getUser?.token,
        },
      });
      navigate(-1);
      toast.success(response?.data?.message);
      setIsLoading(false)
    } catch (error) {
        setIsLoading(false);
        toast.error(error?.response?.data?.msg);
    }
  }

  const submitSuggestForm = async(e) => {
    let finalObj = {}
    let verifyObj = {...suggestLodgeData}
    e.preventDefault();
    if (verify) {
      for (let val in verifyObj) {
        if (
          val === "fullname" ||
          val === "email" ||
          val === "phonenumber" ||
          val === "institution"
        ) {
          delete verifyObj[val];
        }
        // if (!suggestLodgeData[val])
        //   return toast.warning("All fields are required");
      }

      const isEmpty = () => {
        for (const val of Object.values(verifyObj)){
          if (val === "" || val === null || val.length === 0){
            continue
          }else {
            return false
          }
        }
        return true
      }

      if (isEmpty()) return toast.warning("There's nothing to update 😊");
      // console.log(verifyObj)

      try {
        setIsLoading(true)
        for (let val in verifyObj){
          if (verifyObj[val] && !(JSON.stringify(verifyObj[val]) === "[]")){
            finalObj[val] = verifyObj[val]
          }
        }
        const formData = new FormData();
        for(let val in finalObj){
          if (val === "lodgemultiplepicture" && finalObj[val].length > 0){
            for (let i = 0; i < finalObj[val].length; i++){
              formData.append("lodgemultiplepicture", finalObj[val][i])
            }
          }

          if (finalObj[val] && val !== "lodgemultiplepicture"){
            formData.append(val, finalObj[val])
          }
        }

        //TODO: AXIOS HERE
        for (const pair of formData.entries()) {
          console.log(pair);
        }
        const response = await axios.put(`suggestlodges/updateSuggestedLodge/${lodge?._id}`, formData, { headers: { "x-auth-token": getUser?.token } })
        // console.log(response)
        navigate(-1);
        toast.success(response?.data?.message);
        setIsLoading(false)
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        setIsLoading(false)
      }
      
    }
    // console.log(finalObj)


    if (!verify) {
      for (let val in suggestLodgeData) {
        if (val === "lat" || val === "lng" || val === "lodgemultiplepicture") {
          continue;
        }
        if (!suggestLodgeData[val])
          return toast.warning("All fields are required");
      }

      try {
        setIsLoading(true)
        for (let val in suggestLodgeData){
          if (suggestLodgeData[val] && (!(JSON.stringify(suggestLodgeData[val]) === "[]") || !suggestLodgeData[val] === null)){
            finalObj[val] = suggestLodgeData[val]
          }
        }

        // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
        // console.log(suggestLodgeData);
        // console.log(finalObj)
        const formData = new FormData();
        formData.append("address", finalObj?.address);
        formData.append("caretakernumber", finalObj?.caretakernumber);
        formData.append("lodgedescription", finalObj?.lodgedescription);
        formData.append("lodgename", finalObj?.lodgename);
        formData.append("lodgepicture", finalObj?.lodgepicture);
        formData.append("lodgeprice", finalObj?.lodgeprice);
        formData.append("lodgetown", finalObj?.lodgetown);
        formData.append("lodgetype", finalObj?.lodgetype);
        formData.append("specifications", finalObj?.specifications);

        // console.log(formData.entries())
        // for (const pair of formData.entries()) {
        //   console.log(pair);
        // }
        // window.location.reload(); // for now!!
        const response = await axios.post(`${CREATE_SUGGEST_LODGE_URL}`, formData, { headers: { "x-auth-token": getUser?.token } })
        setIsLoading(false);
        navigate(-1);
        toast.success(response?.data?.message);
      } catch (error) {
        setIsLoading(false);
        toast.error(error?.response?.data?.msg);
      }
    }
  };
  // console.log(suggestLodgeData);

  return (
    <>
      <form onSubmit={(e) => submitSuggestForm(e)} className={`${isLoading && "loading"}`}>
        {!verify && (
          <>
            {" "}
            <div className="personal-details">
              <div>
                {" "}
                <div className="peronal-details-form-group">
                  <label>Fullname</label>
                  <input
                    onChange={(e) =>
                      updateSuggestFormState("fullname", e.target.value)
                    }
                    type="text"
                    placeholder="fullname"
                  />
                </div>{" "}
                <div className="peronal-details-form-group">
                  <label>Email</label>
                  <input
                    onChange={(e) =>
                      updateSuggestFormState("email", e.target.value)
                    }
                    type="email"
                    placeholder="email"
                  />
                </div>
              </div>
              <div>
                <div className="peronal-details-form-group">
                  <label>Phone number</label>
                  <div>
                    <span className="country-code">+234</span>
                    <input
                      onChange={(e) =>
                        updateSuggestFormState("phonenumber", e.target.value)
                      }
                      type="number"
                    />
                  </div>
                </div>

                <div className="peronal-details-form-group">
                  <label>Institution</label>
                  <div>
                    <select
                      onChange={(e) =>
                        updateSuggestFormState("institution", e.target.value)
                      }
                      defaultValue={"Select Institution"}
                      className="institution-select"
                      name="institution"
                      id="institution"
                    >
                      <option value={"Select Institution"} disabled>
                        Select Institution
                      </option>
                      <option value="futo">Futo</option>
                    </select>
                    <ArrowDropDownOutlinedIcon className="instDropDown" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className={`property-details ${verify ? "verify" : ""}`}>
          <div>
            {" "}
            <div className="peronal-details-form-group">
              <label>Lodge name</label>
              <input
                onChange={(e) =>
                  updateSuggestFormState("lodgename", e.target.value)
                }
                type="text"
                placeholder="lodge name"
              />
            </div>
          </div>
          <div>
            <div className="peronal-details-form-group">
              <label>Lodge Type</label>
              <div>
                <select
                  onChange={(e) =>
                    updateSuggestFormState("lodgetype", e.target.value)
                  }
                  defaultValue={"Select Lodge Type"}
                  className="institution-select"
                  name="lodgetype"
                  id="lodgetype"
                >
                  <option value={"Select Lodge Type"} disabled>
                    Select Lodge Type
                  </option>
                  <option value="self-con">Self con</option>
                  <option value="2-bedroom">2 bedroom</option>
                  <option value="villa">Villa</option>
                </select>
                <ArrowDropDownOutlinedIcon className="instDropDown" />
              </div>
            </div>
            <div className="peronal-details-form-group">
              <label>Town</label>
              <div>
                <select
                  onChange={(e) =>
                    updateSuggestFormState("lodgetown", e.target.value)
                  }
                  defaultValue={"Select Town"}
                  className="institution-select"
                  name="lodgetown"
                  id="lodgetown"
                >
                  <option value={"Select Town"} disabled>
                    Select Town
                  </option>
                  <option value="futo">Eziobodo</option>
                </select>
                <ArrowDropDownOutlinedIcon className="instDropDown" />
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="peronal-details-form-group">
              <label>Address</label>
              <input
                onChange={(e) =>
                  updateSuggestFormState("address", e.target.value)
                }
                type="text"
                placeholder="lodge address"
              />
            </div>
          </div>{" "}
          <div>
            <div className="peronal-details-form-group">
              <label>CareTaker's Number</label>
              <div>
                <span className="country-code">+234</span>
                <input
                  onChange={(e) =>
                    updateSuggestFormState("caretakernumber", e.target.value)
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
              options={specifications}
              isMulti
              onChange={handleSelectChange}
            />
          </div>
          <div>
            <div className="peronal-details-form-group">
              <label>Lodge Price</label>
              <div>
                <span className="country-code">₦</span>
                <input
                  onChange={(e) =>
                    updateSuggestFormState("lodgeprice", e.target.value)
                  }
                  type="number"
                />
              </div>
            </div>
          </div>{" "}
          {verify && (
            <>
              <div>
                {" "}
                <div className="peronal-details-form-group">
                  <label>Longitude</label>
                  <input
                    onChange={(e) =>
                      updateSuggestFormState("lng", e.target.value)
                    }
                    type="number"
                  />
                </div>{" "}
                <div className="peronal-details-form-group">
                  <label>Latitude</label>
                  <input
                    onChange={(e) =>
                      updateSuggestFormState("lat", e.target.value)
                    }
                    type="number"
                  />
                </div>
              </div>
            </>
          )}
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
                  id="lodge-img"
                  className="lodge-img"
                  htmlFor="lodge-image"
                ></label>
                <input
                  onChange={(e) => handleImgUpload(e)}
                  className="lodge-image-action"
                  id="lodge-image"
                  type="file"
                  accept="image/*"
                />
                <FileUploadOutlinedIcon className="lodge-img-icon" />
              </div>
            </div>
          </div>
          {verify && (
            <>
              {" "}
              <div className="showcase-div">
                {" "}
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
                      htmlFor="lodge-image-showcase"
                    ></label>
                    <input
                      onChange={(e) => handleImgUploadMultiple(e)}
                      className="lodge-image-action"
                      id="lodge-image-showcase"
                      type="file"
                      accept="image/*"
                      multiple
                    />
                    <FileUploadOutlinedIcon className="lodge-img-icon" />
                  </div>
                  <div
                    id="multiple-img-showcase"
                    className="multiple-img-showcase"
                  ></div>
                </div>
              </div>
            </>
          )}
          <div>
            {" "}
            <div className="peronal-details-form-group">
              <label>Description</label>
              <textarea
                onChange={(e) =>
                  updateSuggestFormState("lodgedescription", e.target.value)
                }
                name="description"
                id="description"
                cols="30"
                rows="15"
              ></textarea>
            </div>
          </div>
        </div>

        {verify ? (
          <div className="verify-btns">
            <motion.button
              type="submit"
              whileTap={{ scale: 0.8 }}
              className="verify-btn verify"
            >
              Verify
            </motion.button>
            <motion.div
              onClick={() => navigator(-1)}
              whileTap={{ scale: 0.8 }}
              className="verify-btn continue"
            >
              Continue
            </motion.div>
            <motion.div onClick={handleTrashSuggestion} whileTap={{ scale: 0.8 }} className="verify-btn trash">
              Trash
            </motion.div>
          </div>
        ) : (
          <>
            <div className="suggest-btn">
              <Button text="Suggest" type="fill" />
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default SuggestForm;
