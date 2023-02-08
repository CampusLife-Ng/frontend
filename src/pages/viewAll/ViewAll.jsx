import "./ViewAll.css";
import {
  Navbar,
  NewsLetter,
  Footer,
  SearchBar,
  LodgeCard,
  FeatureTop,
} from "../../components";
import {
  lodgeDataEziobodo,
  lodgeDataIhiagwa,
  lodgeDataUmuchimma,
} from "../../utils/dev-data";

const ViewAll = () => {
  return (
    <>
      <Navbar />
      <section className="view-all">
        <div className="view-all__content">
          <div className="view-all__top">
            <h2>Browse All Lodges..</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Iaculis lacinia felis amet
              blandit pretium lectus. Risus a sit vulputate diam volutpat lorem
              id nunc.
            </p>

            <SearchBar />
          </div>
          <div className="view-all__bottom">
            {/* LODGES IN EZIOBODO SECTION*/}
            <section className="lodges__section-1">
              <FeatureTop text="Lodges Around Eziobodo" page="view-all" />
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
              <FeatureTop text="Lodges Around Umuchimma" page="view-all" />
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
              <FeatureTop text="Lodges Around Ihiagwa" page="view-all" />
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
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ViewAll;
