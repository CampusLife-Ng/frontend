import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodgeList: [],
};

export const lodgeSlice = createSlice({
  name: "lodge",
  initialState,

  reducers: {
    // add a lodge detail to state
    addLodge: (state, action) => {
      const idx = state.lodgeList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (idx > -1) {
        state.lodgeList = state.lodgeList.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.lodgeList.push(action.payload);
      }
    },

    setLodges: (state, action) => {
      state.lodgeList = action.payload;
    },

    setLiked: (state, action) => {
      state.liked = action.payload;
    },
  },
});

export const { addLodge, removeLodge, setLodges, setLiked } =
  lodgeSlice.actions;

export const selectLodgeList = (state) => state.lodge.lodgeList;
export const selectLikedLodge = (state) => state.lodge.liked;

export default lodgeSlice.reducer;
