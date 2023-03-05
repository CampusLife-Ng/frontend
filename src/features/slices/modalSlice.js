import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalHeading: "",
  modalContent: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {},
});

export const selectOpenModal = (state) => state.modal.isOpen;
export const selectModalHeader = (state) => state.modal.modalHeading;
export const selectModalContent = (state) => state.modal.modalContent;

export default modalSlice.reducer;
