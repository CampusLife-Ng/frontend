import { configureStore } from "@reduxjs/toolkit";
import lodgeSlice from "../features/slices/lodgeSlice";

export const store = configureStore({
  reducer: {
    lodge: lodgeSlice,
  },
});
