import { configureStore } from "@reduxjs/toolkit";
import lodgeSlice from "../features/slices/lodgeSlice";
import authSlice from "../features/slices/authSlice";
import userSlice from "../features/slices/userSlice";
import modalSlice from "../features/slices/modalSlice";

export const store = configureStore({
  reducer: {
    lodge: lodgeSlice,
    auth: authSlice,
    user: userSlice,
    modal: modalSlice,
  },
});
