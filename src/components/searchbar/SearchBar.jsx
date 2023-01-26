import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HouseIcon from "@mui/icons-material/House";
import RoomIcon from "@mui/icons-material/Room";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [openFilterBox, setOpenFilterBox] = useState(false);

  return (
    <div className="search">
      <form className="search__form">
        <div className="form-group">
          <SearchIcon className="group-icon" />
          <input
            type="text"
            name="lodge-name"
            id="lodge-name"
            placeholder="Search..."
          />
        </div>

        <div className="form-group">
          <CallMergeIcon className="group-icon" />
          <select
            className="select"
            defaultValue={"Type Of Lodge"}
            name="lodge-type"
            id="lodge-type"
          >
            <option value={"Type Of Lodge"} disabled>
              Type Of Lodge
            </option>
            <option value="big">Big</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
          </select>
          <KeyboardArrowDownIcon className="select-icon" />
        </div>

        <div className="form-group">
          <HouseIcon className="group-icon" />
          <select
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
            <option value="obinze">Obinze</option>
          </select>
          <KeyboardArrowDownIcon className="select-icon" />
        </div>

        <div className="form-group">
          <RoomIcon className="group-icon" />
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

        <div className="form-group">
          <motion.button whileTap={{ scale: 0.8 }} type="submit">
            Search
          </motion.button>
        </div>
      </form>

      <form className="search__form-mobile">
        <div className="top">
          <div className="form-group">
            <SearchIcon className="group-icon" />
            <input
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
              className="select"
              defaultValue={"Type Of Lodge"}
              name="lodge-type"
              id="lodge-type"
            >
              <option value={"Type Of Lodge"} disabled>
                Type Of Lodge
              </option>
              <option value="big">Big</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
            </select>
            <KeyboardArrowDownIcon className="select-icon" />
          </div>

          <div className="form-group">
            <HouseIcon className="group-icon" />
            <select
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
              <option value="obinze">Obinze</option>
            </select>
            <KeyboardArrowDownIcon className="select-icon" />
          </div>

          <div className="form-group">
            <RoomIcon className="group-icon" />
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
      </form>
    </div>
  );
};

export default SearchBar;
