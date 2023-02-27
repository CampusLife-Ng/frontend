import "./Navbar.css";
import Logo from "./../../assets/logowhite.png";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLodgeList } from "../../features/slices/lodgeSlice";
import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  const getLodgeList = useSelector(selectLodgeList);

  const handleLikedPage = () => {
    navigate("/liked-lodges");
  };

  // console.log(getLodgeList);
  useEffect(() => {
    const handleNavActiveLink = (e) => {
      if (e.target.closest(".nav__link")) {
        document
          .querySelectorAll(".nav__link")
          .forEach((item) => item.classList.remove("active"));
        e.target.closest(".nav__link").classList.add("active");
      }
    };
    document
      .querySelector(".nav__links")
      ?.addEventListener("click", handleNavActiveLink);

    return () =>
      document
        .querySelector(".nav__links")
        .removeEventListener("click", handleNavActiveLink);
  });

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__content">
          <Link to="/" className="nav__logo-container">
            <img src={Logo} className="nav__logo" alt="nav-logo" />
          </Link>

          <ul className="nav__links">
            {/* <li className="nav__link">Town</li> */}
            <AnchorLink href="#market-place">
              <li className="nav__link">Marketplace</li>
            </AnchorLink>
            <li className="nav__link" onClick={handleLikedPage}>
              <span>Liked</span>
              <div className="liked-notification">{getLodgeList?.length}</div>
            </li>
            <Link to="/signup">
              <li className="nav__link">Signup</li>
            </Link>
            <Link to="/suggest">
              <Button text="Suggest a lodge" type="fill" />
            </Link>
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
        <AnchorLink href="#market-place">
          <li className="nav__link">Marketplace</li>
        </AnchorLink>
        <li className="nav__link" onClick={handleLikedPage}>
          <span>Liked</span>
          <div className="liked-notification">{getLodgeList?.length}</div>
        </li>
        <Link to="/signup">
          <li className="nav__link">Signup</li>
        </Link>
        <Link to="/suggest">
          <Button text="Suggest a lodge" type="fill" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
