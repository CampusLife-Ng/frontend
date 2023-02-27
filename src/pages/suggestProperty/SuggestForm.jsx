import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SuggestForm = ({ verify }) => {
  const navigator = useNavigate();
  return (
    <>
      <form>
        <div className="personal-details">
          <div>
            {" "}
            <div className="peronal-details-form-group">
              <label>Fullname</label>
              <input type="text" placeholder="fullname" />
            </div>{" "}
            <div className="peronal-details-form-group">
              <label>Email</label>
              <input type="email" placeholder="email" />
            </div>
          </div>
          <div>
            <div className="peronal-details-form-group">
              <label>Phone number</label>
              <input type="number" />
            </div>

            <div className="peronal-details-form-group">
              <label>Institution</label>
              <input type="text" placeholder="institution" />
            </div>
          </div>
        </div>
        <div className="property-details">
          <div>
            {" "}
            <div className="peronal-details-form-group">
              <label>Listing name</label>
              <input type="text" placeholder="listing name" />
            </div>
          </div>
          <div>
            <div className="peronal-details-form-group">
              <label>Lodge Type</label>
              <input type="text" placeholder="Town" />
            </div>
            <div className="peronal-details-form-group">
              <label>Town</label>
              <input type="text" placeholder="Town" />
            </div>
          </div>{" "}
          <div>
            <div className="peronal-details-form-group">
              <label>Location</label>
              <input type="text" placeholder="Location" />
            </div>
            <div className="peronal-details-form-group">
              <label>Address</label>
              <input type="text" placeholder="Address" />
            </div>
          </div>{" "}
          <div>
            <div className="peronal-details-form-group">
              <label>Lodge Price</label>
              <input type="number" />
            </div>
            <div className="peronal-details-form-group">
              <label>Bedroom</label>
              <input type="text" placeholder="Town" />
            </div>
          </div>{" "}
          <div>
            {" "}
            <div className="peronal-details-form-group">
              <label>Lodge Pictures</label>
              <input type="text" placeholder="listing name" />
            </div>
          </div>
          <div>
            {" "}
            <div className="peronal-details-form-group">
              <label>Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="15"
              ></textarea>
            </div>
          </div>
        </div>

        {verify ? (
          <div className="verify-btns">
            <motion.div whileTap={{ scale: 0.8 }} className="verify-btn verify">
              Verify
            </motion.div>
            <motion.div
              onClick={() => navigator(-1)}
              whileTap={{ scale: 0.8 }}
              className="verify-btn continue"
            >
              Continue
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }} className="verify-btn trash">
              Trash
            </motion.div>
          </div>
        ) : (
          <>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="suggest-btn"
              type="submit"
            >
              Suggest
            </motion.button>
          </>
        )}
      </form>
    </>
  );
};

export default SuggestForm;
