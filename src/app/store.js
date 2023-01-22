import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../features/slices/countSlice";

export const store = configureStore({
  reducer: {
    count: countSlice,
  },
});
