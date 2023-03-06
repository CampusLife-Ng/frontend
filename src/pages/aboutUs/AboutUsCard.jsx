import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Man1 from "./../../assets/man-1.jpg"

const AboutUsCard = ({ name, job, github, twitter, linkedin, gmail, img }) => {
  return (
    <div className="about-card">
      <div className="imgbox">
        <img src={img} alt="" />
      </div>
      <p className="about-card__name">{name}</p>
      <p className="about-card__job">{job}</p>
      <div className="about-card__socials">
        {linkedin && <LinkedInIcon className="about-card-icon" />}
        {gmail && <MailIcon className="about-card-icon" />}
        {github && <GitHubIcon className="about-card-icon" />}
        {twitter && <TwitterIcon className="about-card-icon" />}
      </div>
    </div>
  );
};

export default AboutUsCard;
