import "./AboutUs.css";
import { Navbar, NewsLetter, Footer } from "./../../components";
import AboutUsCard from "./AboutUsCard";

import Man2 from "./../../assets/man-2.jpg";
import MICHEAL from "./../../assets/micheal.jpeg";
import KIZITO from "./../../assets/kizito.jpeg";
import KINGSLEY from "./../../assets/kingsley.jpeg";

const ourData = [
  {
    id: 1,
    name: "Micheal Ezechukwu",
    job: "Co-founder",
    linkedin: "https://linkedin.com/in/michael-ezechukwu-ab5210223",
    gmail: "michaelezechukwu0@gmail.com",
    img: MICHEAL,
  },

  {
    id: 2,
    name: "Alfred Arinze",
    job: "Frontend Engineer, Co-founder",
    github: "https://github.com/fredintek",
    twitter: "https://twitter.com/arinze_alfred",
    linkedin: "https://linkedin.com/in/alfred-arinze/",
    gmail: "arinzedibor@gmail.com",
    img: Man2,
  },

  {
    id: 3,
    name: "Kizito Nwaka",
    job: "Backend Engineer, Co-founder",
    github: "https://github.com/Kizito007",
    twitter: "https://twitter.com/kelechithe3rd",
    linkedin: "https://linkedin.com/in/kizito-nwaka-b369691a7",
    gmail: "nwakakelechi49@gmail.com",
    img: KIZITO,
  },

  {
    id: 4,
    name: "Kingsley Akahibe",
    job: "Backend Engineer, Co-founder",
    github: "https://github.com/kingsley-59",
    twitter: "https://twitter.com/kivel_debug",
    linkedin: "https://www.linkedin.com/in/kingsley-akahibe-a55598202",
    gmail: "kingsleyakahibe@gmail.com",
    img: KINGSLEY,
  },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us">
        <h2>Meet Our Team</h2>
        <div className="about-us-display">
          {ourData.map((item) => (
            <AboutUsCard
              key={item.id}
              name={item.name}
              job={item.job}
              github={item.github}
              twitter={item.twitter}
              linkedin={item.linkedin}
              gmail={item.gmail}
              img={item.img}
            />
          ))}
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default AboutUs;
