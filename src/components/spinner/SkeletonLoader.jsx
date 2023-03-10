import { useSelector } from "react-redux";
import { selectUser } from "../../features/slices/userSlice";
import "./Spinner.css";

const SkeletonLoader = () => {

  const getUser = useSelector(selectUser)

  return (
    <div className="skeleton-lodge__card">
      <div className="skeleton-top">
        <img  alt="" />
      </div>
      <div className="skeleton-bottom">
        <div className="skeleton-bottom__first">
          <p className="skeleton-lodge__card-price"></p>
          <p> 
          </p>
        </div>
        <p className="skeleton-lodge__name"></p>
        <p className="skeleton-lodge__location">
        </p>

        <div className="skeleton-featured__card-desc-fourth">
          {/* simulate specs */}
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="skeleton-card-btns">
          <div
          >
          </div>

          {getUser.role === "admin" && (
            <>
              <div
              >
                
              </div>

              <div
              >
                
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
