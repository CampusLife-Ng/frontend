import "./Navbar.css";
import Logo from "./../../assets/logowhite.png";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLodgeList } from "../../features/slices/lodgeSlice";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const getLodgeList = useSelector(selectLodgeList);

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
      .addEventListener("click", handleNavActiveLink);

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
            <li className="nav__link">Marketplace</li>
            <li className="nav__link">
              <span>Liked</span>
              <div className="liked-notification">{getLodgeList?.length}</div>
            </li>
            <li className="nav__link">Signup</li>
            <Button text="Suggest a lodge" type="fill" />
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
        <li className="nav__link">Marketplace</li>
        <li className="nav__link">
          <span>Liked</span>
          <div className="liked-notification">{getLodgeList?.length}</div>
        </li>
        <li className="nav__link">Signup</li>
        <Button text="Suggest a lodge" type="fill" />
      </ul>
    </nav>
  );
};

export default Navbar;
