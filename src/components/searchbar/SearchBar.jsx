import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HouseIcon from "@mui/icons-material/House";
import RoomIcon from "@mui/icons-material/Room";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "../spinner/Spinner";

const SearchBar = ({ setLodgeData, setSearchInput }) => {
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const [searchForm, setSearchForm] = useState({
    lodgetype: null,
    lodgetown: null,
    address: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateSearchFormState = (type, value) => {
    // console.log(type, value);
    setSearchForm((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const submitSearchForm = async (e) => {
    // "/lodges/getLodgesByTTI?town=eziobodo&type=Self Con&institution=futo"
    let url = "/lodges/getLodgesByTTI";
    e.preventDefault();
    try {
      for (const val in searchForm) {
        if (!searchForm[val]) {
          toast.warning("Atleast a select filed is required");
          return;
        }
      }
      setIsLoading(true);

      // TODO: RUN AXIOS POST REQUEST TO SUBMIT DATA
      console.log(searchForm);
      const response = await axios.get(
        `${url}?town=${searchForm?.lodgetown}&type=${searchForm?.lodgetype}&institution=${searchForm?.address}`
      );
      setLodgeData(response?.data?.data?.lodges);
      setIsLoading(false);
      // window.location.reload(); // for now!!
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      setIsLoading(false);
    }
  };

  return (
    <div className="search">
      {/* DESKTOP SEARCH FORM */}
      <form onSubmit={(e) => submitSearchForm(e)} className="search__form">
        <div className="form-group">
          <SearchIcon className="group-icon" />
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            name="lodge-name"
            id="lodge-name"
            placeholder="Search..."
          />
        </div>

        <div className="form-group">
          <CallMergeIcon className="group-icon" />
          <select
            onChange={(e) => updateSearchFormState("lodgetype", e.target.value)}
            className="select"
            defaultValue={"Type Of Lodge"}
            name="lodge-type"
            id="lodge-type"
          >
            <option value={"Type Of Lodge"} disabled>
              Type Of Lodge
            </option>
            <option value="self con">Sel Con</option>
            <option value="2 bedroom">2 Bedroom</option>
            <option value="villa">Villa</option>
          </select>
          <KeyboardArrowDownIcon className="select-icon" />
        </div>

        <div className="form-group">
          <HouseIcon className="group-icon" />
          <select
            onChange={(e) => updateSearchFormState("lodgetown", e.target.value)}
            className="select"
            defaultValue={"Lodge Town"}
            name="lodge-town"
            id="lodge-town"
          >
            <option value="Lodge Town" disabled>
              Lodge Town
            </option>
            <option value="eziobodo">Eziobodo</option>
            <option value="umuchimma">Umuchimma</option>
            <option value="ihiagwa">Ihiagwa</option>
          </select>
          <KeyboardArrowDownIcon className="select-icon" />
        </div>

        <div className="form-group">
          <RoomIcon className="group-icon" />
          <select
            onChange={(e) => updateSearchFormState("address", e.target.value)}
            className="select"
            defaultValue={"Location"}
            name="lodge-location"
            id="lodge-location"
          >
            <option value="Location" disabled>
              Location
            </option>
            <option value="futo">Futo</option>
          </select>
          <KeyboardArrowDownIcon className="select-icon" />
        </div>

        <div className="form-group">
          <motion.button whileTap={{ scale: 0.8 }} type="submit">
            Search
          </motion.button>
        </div>
      </form>

      {/* MOBILE SEARCH FORM */}
      <form
        onSubmit={(e) => submitSearchForm(e)}
        className="search__form-mobile"
      >
        <div className="top">
          <div className="form-group">
            <SearchIcon className="group-icon" />
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              name="lodge-name"
              id="lodge-name"
              placeholder="Search Lodge..."
            />
            <FilterAltIcon
              onClick={() => setOpenFilterBox(!openFilterBox)}
              className="filter-icon"
            />
          </div>
          <motion.button whileTap={{ scale: 0.8 }} type="submit">
            Search
          </motion.button>
        </div>
        <div className={`bottom ${openFilterBox ? "active" : ""}`}>
          <div className="form-group">
            <CallMergeIcon className="group-icon" />
            <select
              onChange={(e) =>
                updateSearchFormState("lodgetype", e.target.value)
              }
              className="select"
              defaultValue={"Type Of Lodge"}
              name="lodge-type"
              id="lodge-type"
            >
              <option value={"Type Of Lodge"} disabled>
                Type Of Lodge
              </option>
              <option value="self con">Self Con</option>
              <option value="2 bedroom">2 Bedroom</option>
              <option value="villa">Villa</option>
            </select>
            <KeyboardArrowDownIcon className="select-icon" />
          </div>

          <div className="form-group">
            <HouseIcon className="group-icon" />
            <select
              onChange={(e) =>
                updateSearchFormState("lodgetown", e.target.value)
              }
              className="select"
              defaultValue={"Lodge Town"}
              name="lodge-town"
              id="lodge-town"
            >
              <option value="Lodge Town" disabled>
                Lodge Town
              </option>
              <option value="eziobodo">Eziobodo</option>
              <option value="umuchimma">Umuchimma</option>
              <option value="ihiagwa">Ihiagwa</option>
            </select>
            <KeyboardArrowDownIcon className="select-icon" />
          </div>

          <div className="form-group">
            <RoomIcon className="group-icon" />
            <select
              onChange={(e) => updateSearchFormState("address", e.target.value)}
              className="select"
              defaultValue={"Location"}
              name="lodge-location"
              id="lodge-location"
            >
              <option value="Location" disabled>
                Location
              </option>
              <option value="futo">Futo</option>
            </select>
            <KeyboardArrowDownIcon className="select-icon" />
          </div>
        </div>
      </form>

      {isLoading ? <Spinner /> : <></>}
    </div>
  );
};

export default SearchBar;
