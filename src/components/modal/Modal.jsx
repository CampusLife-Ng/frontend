import "./Modal.css";
import Button from "./../button/Button";
import { createPortal } from "react-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Modal = ({ isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal__container">
        <div className="close-modal">
          <HighlightOffIcon className="close-modal-icon" />
        </div>
        <h3>Modal Heading</h3>
        <p className="modal-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
          beatae.
        </p>
        <div className="modal-btns">
          <Button type="danger" text="Cancel" />
          <Button type="fill" text="Advance" />
        </div>
      </div>
    </>,
    document.getElementById("modal-popup")
  );
};

export default Modal;
