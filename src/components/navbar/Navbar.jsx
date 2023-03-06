import "./Navbar.css";
import Logo from "./../../assets/logowhite.png";
import { Button } from "../../components";
import { Link, useNavigate, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLodgeList } from "../../features/slices/lodgeSlice";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { selectUser } from "../../features/slices/userSlice";

const Navbar = ({ marketplace }) => {
  const getUser = useSelector(selectUser);
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  const getLodgeList = useSelector(selectLodgeList);

  const handleLikedPage = () => {
    navigate("/liked-lodges");
  };

  const activeStyling = ({ isActive }) =>
    isActive ? { color: "#44c570" } : { color: "#0a0d14" };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__content">
            <Link to="/" className="nav__logo-container">
              <img src={Logo} className="nav__logo" alt="nav-logo" />
            </Link>

            <ul className="nav__links">
              {/* <li className="nav__link">Town</li> */}
              {marketplace && (
                <AnchorLink href="#market-place">
                  <li className="nav__link">Marketplace</li>
                </AnchorLink>
              )}
              <li className="nav__link">
                <NavLink
                  className={"NAVLINK"}
                  style={activeStyling}
                  to="/liked-lodges"
                >
                  <span>Liked</span>
                  <span className="liked-notification">
                    {getLodgeList?.length}
                  </span>
                </NavLink>
              </li>

              <li className="nav__link">
                <NavLink style={activeStyling} to="/auth">
                  Signup/Login
                </NavLink>
              </li>

              <li className="nav__link">
                <NavLink style={activeStyling} to="/our-team">
                  Our Team
                </NavLink>
              </li>

              <Link to="/suggest">
                <Button text="Suggest a lodge" type="fill" />
              </Link>
              {getUser && (
                <>
                  {" "}
                  <Link to="/verify-property">
                    <Button text="View Suggested" type="outline" />
                  </Link>
                </>
              )}
            </ul>

            {openNav ? (
              <HighlightOffIcon
                onClick={() => setOpenNav(false)}
                className="nav__mobile-close"
              />
            ) : (
              <MenuIcon
                onClick={() => setOpenNav(true)}
                className="nav__mobile-menu"
              />
            )}
          </div>
        </div>
        <ul className={`mobile__nav ${openNav && "active"}`}>
          {/* <li className="nav__link">Town</li> */}
          {marketplace && (
            <AnchorLink href="#market-place">
              <li className="nav__link">Marketplace</li>
            </AnchorLink>
          )}

          <li className="nav__link">
            <NavLink
              className={"NAVLINK"}
              style={activeStyling}
              to="/liked-lodges"
            >
              <span>Liked</span>
              <div className="liked-notification">{getLodgeList?.length}</div>
            </NavLink>
          </li>
          <li className="nav__link">
            <NavLink style={activeStyling} to="/auth">
              Signup/Login
            </NavLink>
          </li>

          <li className="nav__link">
            <NavLink style={activeStyling} to="/our-team">
              Our Team
            </NavLink>
          </li>

          <Link to="/suggest">
            <Button text="Suggest a lodge" type="fill" />
          </Link>
          {getUser && (
            <>
              {" "}
              <Link to="/verify-property">
                <Button text="View Suggested" type="outline" />
              </Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
