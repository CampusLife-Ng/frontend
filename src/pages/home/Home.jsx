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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/slices/userSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
const GETALLLODGES_URL = "/lodges/getLodges";
// import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const getUser = useSelector(selectUser);
  const handleShowMarketPlace = () => {
    toast.info("Futo Market Place Coming Soon.. 😁");
  };

  const [eziobodoLodges, setEziobodoLodges] = useState([]);
  const [umuchimmaLodges, setUmuchimmaLodges] = useState([]);
  const [ihiagwaLodges, setIhiagwaLodges] = useState([]);

  useEffect(() => {
    const fetchLodges = async () => {
      try {
        const response = await axios.get(GETALLLODGES_URL);
        // console.log(response?.data?.data);

        setEziobodoLodges(
          response?.data?.data?.lodges?.filter(
            (item) => item.lodgetown === "eziobodo"
          )
        );
        setUmuchimmaLodges(
          response?.data?.data?.lodges?.filter(
            (item) => item.lodgetown === "umuchimma"
          )
        );
        setIhiagwaLodges(
          response?.data?.data?.lodges?.filter(
            (item) => item.lodgetown === "ihiagwa"
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchLodges();
  }, []);

  // console.log(eziobodoLodges);
  // console.log(ihiagwaLodges)
  // console.log(umuchimmaLodges)

  return (
    <>
      {/* NAVIGATION */}
      <Navbar marketplace={true} />

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
                <Link to="/suggest">
                  <Button text="Suggest a lodge" type="fill" />
                </Link>
                <Link to="/view-all">
                  <Button text="Browse all properties" type="outline" />
                </Link>
                {getUser.role === "admin" && (
                  <>
                    <Link to="/create-lodge">
                      <Button text="Create a Lodge" type="outline-blue" />
                    </Link>
                  </>
                )}
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
                <Link to="/suggest">
                  <Button text="Suggest a lodge" type="fill" />
                </Link>
                <Link to="/view-all">
                  <Button text="Browse all properties" type="outline" />
                </Link>
                {getUser.role === "admin" && (
                  <>
                    <Link to="/create-lodge">
                      <Button text="Create a Lodge" type="outline-blue" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED LODGES SECTION*/}
      {/* <section className="feature__section">
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
          </Swiper>
        </div>
      </section> */}

      {/* SEARCH BAR */}
      {/* <SearchBar /> */}

      {/* LODGES IN EZIOBODO SECTION*/}
      <section className="lodges__section-1">
        <FeatureTop text="Lodges Around Eziobodo" />
        <div className="lodges__box">
          {eziobodoLodges.map(
            ({
              _id,
              lodgepicture,
              lodgeprice,
              lodgename,
              address,
              specifications,
              lodgemultiplepicture,
              caretakernumber,
              lodgedescription,
              lodgetype,
              lodgetown,
            }) => (
              <LodgeCard
                key={_id}
                id={_id}
                lodgepicture={lodgepicture}
                lodgeprice={lodgeprice}
                lodgename={lodgename}
                address={address}
                specifications={specifications}
                lodgemultiplepicture={lodgemultiplepicture}
                caretakernumber={caretakernumber}
                lodgedescription={lodgedescription}
                lodgetype={lodgetype}
                lodgetown={lodgetown}
              />
            )
          )}
        </div>
      </section>

      {/* LODGES IN UMUCHIMMA SECTION*/}
      <section className="lodges__section-1">
        <FeatureTop text="Lodges Around Umuchimma" />
        <div className="lodges__box">
          {umuchimmaLodges.map(
            ({
              _id,
              lodgepicture,
              lodgeprice,
              lodgename,
              address,
              specifications,
              lodgemultiplepicture,
              caretakernumber,
              lodgedescription,
              lodgetype,
              lodgetown,
            }) => (
              <LodgeCard
                key={_id}
                id={_id}
                lodgepicture={lodgepicture}
                lodgeprice={lodgeprice}
                lodgename={lodgename}
                address={address}
                specifications={specifications}
                lodgemultiplepicture={lodgemultiplepicture}
                caretakernumber={caretakernumber}
                lodgedescription={lodgedescription}
                lodgetype={lodgetype}
                lodgetown={lodgetown}
              />
            )
          )}
        </div>
      </section>

      {/* LODGES IN IHIAGWA SECTION*/}
      <section className="lodges__section-1">
        <FeatureTop text="Lodges Around Ihiagwa" />
        <div className="lodges__box">
          {ihiagwaLodges.map(
            ({
              _id,
              lodgepicture,
              lodgeprice,
              lodgename,
              address,
              specifications,
              lodgemultiplepicture,
              caretakernumber,
              lodgedescription,
              lodgetype,
              lodgetown,
            }) => (
              <LodgeCard
                key={_id}
                id={_id}
                lodgepicture={lodgepicture}
                lodgeprice={lodgeprice}
                lodgename={lodgename}
                address={address}
                specifications={specifications}
                lodgemultiplepicture={lodgemultiplepicture}
                caretakernumber={caretakernumber}
                lodgedescription={lodgedescription}
                lodgetype={lodgetype}
                lodgetown={lodgetown}
              />
            )
          )}
        </div>
      </section>

      {/* MARKET PLACE SECTION */}
      <section className="market__place" id="market-place">
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
                <Button
                  onclick={handleShowMarketPlace}
                  text="Coming Soon"
                  type="outline"
                  color="blue"
                />
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
