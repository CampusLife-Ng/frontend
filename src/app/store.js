import { configureStore } from "@reduxjs/toolkit";
import lodgeSlice from "../features/slices/lodgeSlice";
import authSlice from "../features/slices/authSlice";
import userSlice from "../features/slices/userSlice";

export const store = configureStore({
  reducer: {
    lodge: lodgeSlice,
    auth: authSlice,
    user: userSlice,
  },
});
