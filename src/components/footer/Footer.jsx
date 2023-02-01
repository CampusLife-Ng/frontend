import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BlackLogo from "./../../assets/logoblack.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__first">
          <div className="footer__img">
            <img src={BlackLogo} alt="footer-logo" />
          </div>
          <div className="footer__first-socials">
            <InstagramIcon className="footer__icon" />
            <WhatsAppIcon className="footer__icon" />
            <LinkedInIcon className="footer__icon" />
          </div>
        </div>
        <ul className="footer__lists">
          <p>Contact Us</p>
          <li className="footer__list">N0 17, Aiyedun street, Cyprus</li>
          <li className="footer__list">Campuslife@gmail.com</li>
          <li className="footer__list">+2348114568883</li>
        </ul>

        <ul className="footer__lists">
          <p>Market Place</p>
          <li className="footer__list">Help Center</li>
          <li className="footer__list">Message us on twitter</li>
          <li className="footer__list">Send us an email</li>
        </ul>

        <ul className="footer__lists">
          <p>Properties</p>
          <li className="footer__list">Lodges Around Owerri</li>
          <li className="footer__list">Lodges Around Odili</li>
          <li className="footer__list">Featured Lodges</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
