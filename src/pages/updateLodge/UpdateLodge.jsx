import "./UpdateLodge.css"
import { Navbar, NewsLetter, Footer, Button } from "../../components";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import NoImg from "./../../assets/no-img.png"
import { useEffect } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Select from "react-select"
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";


const UpdateLodge = () => {

  useEffect(() => {
    let preview = document.getElementById('update-img-preview');
    preview.src = NoImg
  }, [])

  return (
    <>
        <Navbar />

            <div className="update-lodge">
                <div className="update-lodge-content">
                  <div className="update-lodge-content-details">

                    {/* IMAGE PREVIEW */}
                    <div className="left">
                      <div className="left-top">
                        <h3>Image Preview <span>(lodge frontal view*)</span></h3>
                        <div className="left-top-icon-box">
                          <DeleteOutlineOutlinedIcon className="left-top-icon"/>
                        </div>
                      </div>
                      <div className="left-img-container">
                        <img src="" alt="" id="update-img-preview" />
                      </div>
                    </div>

                    {/* FORM DETAILS */}
                    <div className="right">
                      <form className="update-details">
                        <h2>Update Lodge Details</h2>
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

                        <div className="update-flat">
                          <div className="peronal-details-form-group">
                            <label>Lodge Type</label>
                            <div>
                              <select
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

                        <div className="update-flat">
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

                        <div className="update-flat">
                          <div className="peronal-details-form-group">
                            <label>CareTaker's Number</label>
                            <div>
                              <span className="country-code">+234</span>
                              <input
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
                            // options={lodgeSpecs}
                            isMulti
                          />
                        </div>

                        <div className="update-flat">
                          <div className="peronal-details-form-group">
                            <label>Lodge Price</label>
                            <div>
                              <span className="country-code">₦</span>
                              <input
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
                              type="number"
                            />
                          </div>{" "}
                          <div className="peronal-details-form-group">
                            <label>Latitude</label>
                            <input
                              type="number"
                            />
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

                        <div className="suggest-btn">
                          <Button text="Update Lodge Details" type="fill" />
                        </div>
                      </form>

                      <form className="upload-img-form">
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
                                  (exactly 3 images*)
                                </span>
                              </label>
                              <div>
                                <label
                                  id="lodge-img-showcase"
                                  className="lodge-img"
                                  htmlFor="upload-update-lodge-image-showcase"
                                ></label>
                                <input
                                  onChange={(e) => handleImgUploadMultiple(e)}
                                  className="lodge-image-action"
                                  id="upload-update-lodge-image-showcase"
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
  )
}

export default UpdateLodge;