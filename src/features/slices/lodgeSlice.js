import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodgeList: [],
  featuredLodgeList: [],
  normalLodgeList: [],
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
      state.lodgeList = action.payload.data;
      state.featuredLodgeList = action.payload.featuredLodgedata;
      state.normalLodgeList = action.payload.normalLodgedata;
    },

    displaceLodges: (state) => {
      // TODO: logic to displace featuredlodgelist & normallodgelist
      state.featuredLodgeList = state.lodgeList.filter(
        (item) => item.lodgeType === "featured"
      );

      state.normalLodgeList = state.lodgeList.filter(
        (item) => item.lodgeType === "normal"
      );
    },
  },
});

export const { addLodge, setLodges, displaceLodges } = lodgeSlice.actions;

export const selectLodgeList = (state) => state.lodge.lodgeList;
export const selectLikedLodge = (state) => state.lodge.liked;
export const selectFeaturedLodgeList = (state) => state.lodge.featuredLodgeList;
export const selectNormalLodgeList = (state) => state.lodge.normalLodgeList;

export default lodgeSlice.reducer;
