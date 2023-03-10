import "./ViewAll.css";
import {
  Navbar,
  NewsLetter,
  Footer,
  SearchBar,
  LodgeCard,
  FeatureTop,
  Pagination,
  SkeletonLoader,
} from "../../components";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ViewAll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  const [lodgeData, setLodgeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfLodges, setNumOfLodges] = useState(1);
  const [ searchInput, setSearchInput ] = useState("")

  

  const townName = location?.state?.townname;

  useEffect(() => {
    let url = "";
    const fetchLodges = async () => {
      try {
        setIsLoading(true);
        if (townName) {
          // /lodges/getLodgesByTown?town=eziobodo&page=1
          url = `lodges/getLodgesByTown?town=${townName}&page=${pageNumber}`;
          const response = await axios.get(url);
          setLodgeData(response?.data?.data?.lodges);
          setNumOfLodges(response?.data?.data?.totalLodgesByTown);
          setIsLoading(false);
        } else {
          // /lodges/getLodges?page=2
          url = `lodges/getLodges?page=${pageNumber}`;
          const response = await axios.get(url);
          setLodgeData(response?.data?.data?.lodges);
          setNumOfLodges(response?.data?.data?.totalLodges);
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        setIsLoading(false);
      }
    };

    fetchLodges();
  }, [townName]);


  useEffect(() => {
    
  }, [searchInput])

  // console.log(lodgeData);

  // Use page number to slice array
  // console.log(pageNumber)

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

            <SearchBar setLodgeData={setLodgeData} setSearchInput={setSearchInput}/>
          </div>
          <div className="view-all__bottom">
            <section className="lodges__section-1">
              <div className="lodges__box">
                {isLoading ? (
                  [1, 2, 3, 4, 5, 6].map((item, idx) => (
                    <SkeletonLoader key={idx} />
                  ))
                ) : lodgeData?.length > 0 ? (
                  lodgeData?.filter((item) => item.lodgename.toLowerCase().includes(searchInput.toLowerCase())).map(
                    ({
                      _id,
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
                  )
                ) : (
                  <>
                    <div className="display-error">
                      <p>No Available Lodges! 😊</p>
                    </div>
                  </>
                )}
                {}
              </div>
            </section>

            {lodgeData?.length > 0 && (
              <Pagination
                totalNumOfLodges={numOfLodges}
                itemsPerPage={10}
                setPageNumber={setPageNumber}
              />
            )}
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ViewAll;
