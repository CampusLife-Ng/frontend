import "./LikedPage.css";
import {
  Navbar,
  NewsLetter,
  Footer,
  FeaturedCard,
  FeatureTop,
  LodgeCard,
  Button,
} from "../../components";
import { useSelector } from "react-redux";
import {
  selectFeaturedLodgeList,
  selectNormalLodgeList,
} from "../../features/slices/lodgeSlice";
import EmptyCart from "./../../assets/empty-cart.jpg";
import { useNavigate } from "react-router-dom";

const LikedPage = () => {
  const navigate = useNavigate();
  // const featuredLodgesList = useSelector(selectFeaturedLodgeList);
  const normalLodgesList = useSelector(selectNormalLodgeList);

  // console.log(normalLodgesList);

  const isDataEmpty = (arr) => {
    return arr.length === 0;
  };

  const handleGoBackHome = () => {
    navigate("/");
  };

  const handleViewAllLodges = () => {
    navigate("/view-all");
  };

  return (
    <>
      <Navbar />
      <div className="liked-lodges">
        <div className="liked-lodges__content">
          {isDataEmpty(normalLodgesList) ? (
            <>
              <div className="empty-liked">
                <div className="empty-liked__img">
                  <img src={EmptyCart} alt="" />
                </div>
                <div className="empty-liked__text">
                  <h3>Your Liked is Empty</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iure asperiores reprehenderit mollitia.
                  </p>

                  <div className="empty-liked__btn">
                    <div onClick={handleGoBackHome}>
                      <Button text="Go Back Home" type="fill" />
                    </div>
                    <div onClick={handleViewAllLodges}>
                      <Button text="Browse All Properties" type="outline" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* {!isDataEmpty(featuredLodgesList) && (
                <>
                  FEATURED LODGES SECTION
                  <section className="feature__section">
                    <FeatureTop text="Featured Lodges" type="featured" />

                    <div className="featured__box-liked">
                      {featuredLodgesList?.map(
                        ({
                          id,
                          img,
                          available,
                          lodgePrice,
                          lodgeName,
                          lodgeLocation,
                        }) => (
                          <FeaturedCard
                            img={img}
                            key={id}
                            id={id}
                            available={available}
                            lodgePrice={lodgePrice}
                            lodgeName={lodgeName}
                            lodgeLocation={lodgeLocation}
                            type="featured"
                          />
                        )
                      )}
                      <div className="arrow__box">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </section>
                </>
              )} */}

              {!isDataEmpty(normalLodgesList) && (
                <>
                  {/* ALL LIKED LODGES SECTION*/}
                  <section className="lodges__section-1">
                    <FeatureTop text="Liked lodges" type="featured" />
                    <div className="lodges__box">
                      {normalLodgesList?.map(
                        ({
                          id,
                          lodgepicture,
                          lodgeprice,
                          lodgename,
                          address,
                          specifications,
                          lodgemultiplepicture,
                          lodgedescription,
                          caretakernumber,
                          lodgetype,
                          lodgetown,
                        }) => (
                          <LodgeCard
                            key={id}
                            id={id}
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
                            type="featured"
                          />
                        )
                      )}
                    </div>
                  </section>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default LikedPage;
