// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import {
  Navbar,
  Button,
  SearchBar,
  FeatureTop,
  FeaturedCard,
  LodgeCard,
} from "../../components";
import Hero1 from "./../../assets/heroimg1.png";
import Hero2 from "./../../assets/heroimg2.png";
import Hero3 from "./../../assets/heroimg3.png";
import Hero4 from "./../../assets/heroimg4.png";
import MobileImg1 from "./../../assets/mobile-img1.jpg";
import MobileImg2 from "./../../assets/mobile-img2.jpg";
import MobileImg3 from "./../../assets/mobile-img3.jpg";

const Home = () => {
  return (
    <>
      {/* NAVIGATION */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          {/* DESKTOP NAVIGATION */}
          <div className="hero__content">
            <div className="hero__left">
              <h1>The Best Place To Find Your Dream Lodge</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Massa gravida malesuada
                elit quis adipiscing duis ullamcorper aliquam. Congue vestibulum
                porta tempor nunc vestibulum id urna gravida. Nunc diam accumsan
                at gravida vestibulum. amet nunc dui lorem.
              </p>
              <div className="hero__btn">
                <Button text="Suggest a lodge" type="fill" />
                <Button text="Browse all properties" type="outline" />
              </div>
            </div>
            <div className="hero__right">
              <img src={Hero1} alt="heroimg" />
              <img src={Hero2} alt="heroimg" />
              <img src={Hero3} alt="heroimg" />
              <img src={Hero4} alt="heroimg" />
              <img src={Hero4} alt="heroimg" />
              <img src={Hero4} alt="heroimg" />
            </div>
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="hero__mobile">
            <div className="hero__carousel">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={MobileImg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={MobileImg2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={MobileImg3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="hero__mobile-content">
              <h2>The Best Place To Find Your Dream Lodge!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Massa gravida malesuada
                elit quis adipiscing duis ullamcorper aliquam. Congue vestibulum
                porta tempor nunc vestibulum id urna gravida. Nunc diam accumsan
                at.
              </p>
              <div className="hero__mobile-btn">
                <Button text="Sugget a lodge" type="fill" />
                <Button text="Browse all properties" type="outline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <SearchBar />

      {/* FEATURED LODGES SECTION*/}
      <section className="feature__section">
        <FeatureTop text="Featured Lodges" />

        <div className="featured__box">
          <Swiper
            className="mySwiper"
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 5000,
            }}
          >
            <SwiperSlide>
              <FeaturedCard img={MobileImg1} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard img={MobileImg2} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard img={MobileImg3} />
            </SwiperSlide>
          </Swiper>

          <div className="arrow__box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* LODGES IN EZIOBODO SECTION*/}
      <section className="lodges__section-1">
        <FeatureTop text="Lodges Around Eziobodo" />
        <div className="lodges__box">
          <LodgeCard />
          <LodgeCard />
          <LodgeCard />
          <LodgeCard />
          <LodgeCard />
          <LodgeCard />
        </div>
      </section>

      {/* LODGES IN UMUCHIMMA SECTION*/}
      <section className="lodges__section-1">
        <FeatureTop text="Lodges Around Umuchimma" />
        <div className="lodges__box">
          <LodgeCard />
          <LodgeCard />
          <LodgeCard />
          <LodgeCard />
        </div>
      </section>

      {/* LODGES IN IHIAGWA SECTION*/}
      <section className="lodges__section-1">
        <FeatureTop text="Lodges Around Ihiagwa" />
        <div className="lodges__box">
          <LodgeCard />
          <LodgeCard />
          <LodgeCard />
          <LodgeCard />
          <LodgeCard />
        </div>
      </section>
    </>
  );
};

export default Home;
