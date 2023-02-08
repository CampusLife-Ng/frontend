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
  NewsLetter,
  Footer,
} from "../../components";
import Hero1 from "./../../assets/heroimg1.png";
import Hero2 from "./../../assets/heroimg2.png";
import Hero3 from "./../../assets/heroimg3.png";
import Hero4 from "./../../assets/heroimg4.png";
import MobileImg1 from "./../../assets/mobile-img1.jpg";
import MobileImg2 from "./../../assets/mobile-img2.jpg";
import MobileImg3 from "./../../assets/mobile-img3.jpg";
import MpImg1 from "./../../assets/mpimg1.png";
import MpImg2 from "./../../assets/mpimg2.png";
import {
  lodgeDataEziobodo,
  lodgeDataFeatured,
  lodgeDataUmuchimma,
  lodgeDataIhiagwa,
} from "../../utils/dev-data";
// import { v4 as uuidv4 } from "uuid";

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
        <FeatureTop text="Featured Lodges" type="featured" />

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
            {lodgeDataFeatured.map(
              ({
                id,
                lodgeImg,
                available,
                lodgePrice,
                lodgeName,
                lodgeLocation,
              }) => (
                <SwiperSlide key={id}>
                  <FeaturedCard
                    img={lodgeImg}
                    key={id}
                    id={id}
                    available={available}
                    lodgePrice={lodgePrice}
                    lodgeName={lodgeName}
                    lodgeLocation={lodgeLocation}
                  />
                </SwiperSlide>
              )
            )}
            {/* <SwiperSlide>
              <FeaturedCard img={MobileImg1} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard img={MobileImg2} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard img={MobileImg3} />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>

      {/* LODGES IN EZIOBODO SECTION*/}
      <section className="lodges__section-1">
        <FeatureTop text="Lodges Around Eziobodo" />
        <div className="lodges__box">
          {lodgeDataEziobodo.map(
            ({
              id,
              lodgeImg,
              available,
              lodgePrice,
              lodgeName,
              lodgeLocation,
            }) => (
              <LodgeCard
                key={id}
                id={id}
                lodgeImg={lodgeImg}
                available={available}
                lodgePrice={lodgePrice}
                lodgeName={lodgeName}
                lodgeLocation={lodgeLocation}
              />
            )
          )}
        </div>
      </section>

      {/* LODGES IN UMUCHIMMA SECTION*/}
      <section className="lodges__section-1">
        <FeatureTop text="Lodges Around Umuchimma" />
        <div className="lodges__box">
          {lodgeDataUmuchimma.map(
            ({
              id,
              lodgeImg,
              available,
              lodgePrice,
              lodgeName,
              lodgeLocation,
            }) => (
              <LodgeCard
                key={id}
                id={id}
                lodgeImg={lodgeImg}
                available={available}
                lodgePrice={lodgePrice}
                lodgeName={lodgeName}
                lodgeLocation={lodgeLocation}
              />
            )
          )}
        </div>
      </section>

      {/* LODGES IN IHIAGWA SECTION*/}
      <section className="lodges__section-1">
        <FeatureTop text="Lodges Around Ihiagwa" />
        <div className="lodges__box">
          {lodgeDataIhiagwa.map(
            ({
              id,
              lodgeImg,
              available,
              lodgePrice,
              lodgeName,
              lodgeLocation,
            }) => (
              <LodgeCard
                key={id}
                id={id}
                lodgeImg={lodgeImg}
                available={available}
                lodgePrice={lodgePrice}
                lodgeName={lodgeName}
                lodgeLocation={lodgeLocation}
              />
            )
          )}
        </div>
      </section>

      {/* MARKET PLACE SECTION */}
      <section className="market__place">
        <FeatureTop text="Our Marketplace" type="market-place" />
        <div className="market__place-content">
          <div className="market__place-content-container">
            <div className="left">
              <h3>
                Get all types of properties from the campuslife marketplace!{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ac netus id erat
                commodo. Magna tristique pretium nulla cursus diam lectus
                imperdiet rutrum faucibus.
              </p>
              <div className="market-place-btn">
                <Button text="Coming Soon" type="outline" color="blue" />
              </div>
            </div>
            <div className="right">
              <img src={MpImg1} alt="" />
              <img src={MpImg2} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <NewsLetter />

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
};

export default Home;
