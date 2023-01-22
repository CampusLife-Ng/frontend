import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    incrementBy: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = countSlice.actions;

export const selectCount = (state) => state.count.count;

export default countSlice.reducer;
