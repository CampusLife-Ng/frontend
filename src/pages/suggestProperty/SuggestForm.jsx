import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import NoImg from "./../../assets/no-img.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SuggestForm = ({ verify }) => {
  const navigator = useNavigate();
  const [imageSource, setImageSource] = useState(null);
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
  });

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

  const updateSuggestFormState = (type, value) => {
    // console.log(type, value);
    setSuggestLodgeData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const submitSuggestForm = (e) => {
    e.preventDefault();
    for (const val in suggestLodgeData) {
      if (!suggestLodgeData[val]) {
        toast.warning("All fields are required");
        return;
      }
    }

    // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
    console.log(suggestLodgeData);
    // window.location.reload(); // for now!!
  };

  return (
    <>
      <form onSubmit={(e) => submitSuggestForm(e)}>
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
                  <option value="unn">Unn</option>
                  <option value="unizik">Unizik</option>
                </select>
                <ArrowDropDownOutlinedIcon className="instDropDown" />
              </div>
            </div>
          </div>
        </div>
        <div className="property-details">
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
                  <option value="unn">Umuchimma</option>
                  <option value="unizik">Ihiagwa</option>
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
          <div>
            {" "}
            <div className="peronal-details-form-group">
              <label>Lodge Picture</label>
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
            <motion.div whileTap={{ scale: 0.8 }} className="verify-btn verify">
              Verify
            </motion.div>
            <motion.div
              onClick={() => navigator(-1)}
              whileTap={{ scale: 0.8 }}
              className="verify-btn continue"
            >
              Continue
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }} className="verify-btn trash">
              Trash
            </motion.div>
          </div>
        ) : (
          <>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="suggest-btn"
              type="submit"
            >
              Suggest
            </motion.button>
          </>
        )}
      </form>
    </>
  );
};

export default SuggestForm;
