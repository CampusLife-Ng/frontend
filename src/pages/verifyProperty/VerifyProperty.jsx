import "./VerifyProperty.css";
import { Navbar, NewsLetter, Footer, Spinner } from "../../components";
import { motion } from "framer-motion";
import Room1 from "./../../assets/room1.jpg";
import Room2 from "./../../assets/room2.jpg";
import Room3 from "./../../assets/room3.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/slices/userSlice";
import { toast } from "react-toastify";
const GET_ALL_SUGGESTED_LODGES_URL = "/suggestlodges/getSuggestedLodges"

const VerifyProperty = () => {
  const navigator = useNavigate();
  const getUser = useSelector(selectUser)
  const [suggestedLodges, setSuggestedLodges] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchLodges = async() => {
      try {
        setIsLoading(true)
        const response = await axios.get(GET_ALL_SUGGESTED_LODGES_URL, { headers: { "x-auth-token": getUser?.token } })
        // console.log(response?.data?.data?.lodges)
        setSuggestedLodges(response?.data?.data?.lodges)
        setIsLoading(false)
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        setIsLoading(false)
      }
    }

    fetchLodges()
  }, [])

  const handleViewClick = (item) => {
    navigator("/suggest", { state: { verify: true, lodge: item } });
  };

  return (
    <>
      <Navbar />
      <div className="suggest">
        <div className="heading">
          <h2>View Suggested Properties</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            iure distinctio sapiente saepe, temporibus voluptates.
          </p>
          {
            isLoading && <Spinner />
          }
        </div>

        <div className="suggest__cards">

          {
            suggestedLodges?.map((item) => (
            <div className="suggest__card" key={item?._id}>
            <div className="card__img">
              <img src={item?.lodgepicture} alt="" />
            </div>
            <p className="lodge__name">Lodge Name: {item?.lodgename}</p>
            <div className="card__status not-verified">
              Status: <span>Not Verified</span>{" "}
            </div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="card__btn"
              onClick={() => handleViewClick(item)}
            >
              View
            </motion.div>
          </div>))
          }


          
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default VerifyProperty;
