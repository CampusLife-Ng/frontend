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
// import { v4 as uuidv4 } from "uuid";

const lodgeDataEziobodo = [
  {
    id: "15e1ffd4-e73d-45f2-bf6c-ca29cbf22a6b",
    lodgeImg: MobileImg1,
    available: true,
    lodgePrice: "200,000.00",
    lodgeName: "Lafarge",
    lodgeLocation: "No 17, Onuiyi, Owerri road. Futo",
  },

  {
    id: "feceea57-77a3-4f3d-b9fc-8444399c23a0",
    lodgeImg: MobileImg2,
    available: false,
    lodgePrice: "60,000.00",
    lodgeName: "Mimi's",
    lodgeLocation: "No 10, ebuka, Owerri road. Futo",
  },

  {
    id: "a69d81c9-d5ec-419c-aaf9-95ea99a0f4fe",
    lodgeImg: MobileImg3,
    available: false,
    lodgePrice: "90,000.00",
    lodgeName: "Omuti",
    lodgeLocation: "No 17, naliti, Owerri road. Futo",
  },
];

const lodgeDataFeatured = [
  {
    id: "997de509-17c0-4949-a804-794c11f3169a",
    lodgeImg: MobileImg1,
    available: true,
    lodgePrice: "200,000.00",
    lodgeName: "Apple Hotel",
    lodgeLocation: "Apple junction, owerri.",
  },

  {
    id: "e5c4b3f2-6db7-4caf-96be-d705b485e1cd",
    lodgeImg: MobileImg2,
    available: false,
    lodgePrice: "60,000.00",
    lodgeName: "Orange Hotel",
    lodgeLocation: "Control bustop, owerri.",
  },
];

const lodgeDataUmuchimma = [
  {
    id: "f0160a34-d9e0-4cef-8ea6-4ff225ab8532",
    lodgeImg: MobileImg1,
    available: true,
    lodgePrice: "200,000.00",
    lodgeName: "Juno",
    lodgeLocation: "No 39, Onuiyi, Owerri road. Futo.",
  },

  {
    id: "34a4ee17-8e79-4178-84b2-3f9636c9de0c",
    lodgeImg: MobileImg2,
    available: false,
    lodgePrice: "60,000.00",
    lodgeName: "Makkie's",
    lodgeLocation: "No 22, Onuiyi, Owerri road. Futo.",
  },

  {
    id: "2342e37f-37c4-42ed-a6db-fe611ab2b3a9",
    lodgeImg: MobileImg3,
    available: false,
    lodgePrice: "60,000.00",
    lodgeName: "Sonmilly",
    lodgeLocation: "No 45, Onuiyi, Owerri road. Futo.",
  },
];

const lodgeDataIhiagwa = [
  {
    id: "00f2a83d-c646-454b-ba10-f5945bb03f07",
    lodgeImg: MobileImg1,
    available: true,
    lodgePrice: "200,000.00",
    lodgeName: "Felix",
    lodgeLocation: "No 79, Onuiyi, Owerri road. Futo.",
  },

  {
    id: "2656706d-18aa-4bb9-be4e-cc9de93550b7",
    lodgeImg: MobileImg2,
    available: false,
    lodgePrice: "60,000.00",
    lodgeName: "Metro",
    lodgeLocation: "No 3, Onuiyi, Owerri road. Futo.",
  },

  {
    id: "a84011d4-2155-4189-9060-f42a0046b672",
    lodgeImg: MobileImg3,
    available: false,
    lodgePrice: "60,000.00",
    lodgeName: "Villore",
    lodgeLocation: "No 8, Onuiyi, Owerri road. Futo.",
  },
];

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
    </>
  );
};

export default Home;
