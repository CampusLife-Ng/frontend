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
      state.lodgeList.push(action.payload);
      state.idLikedList.push(action.payload.id);
      // window.localStorage.setItem("lodgeList", JSON.stringify(state.lodgeList));
    },

    // remove a lodge detail from the state
    removeLodge: (state, action) => {
      state.lodgeList = state.lodgeList.filter(
        (item) => item.id !== action.payload
      );
      state.idLikedList = state.idLikedList.filter(
        (num) => num !== action.payload
      );
      // window.localStorage.setItem("lodgeList", JSON.stringify(state.lodgeList));
    },

    setLodges: (state, action) => {
      // console.log(action.payload);
      state.lodgeList = action.payload;
    },

    setIdOfLodges: (state, action) => {
      state.idLikedList = action.payload;
    },
  },
});

export const { addLodge, removeLodge, setLodges, setIdOfLodges } =
  lodgeSlice.actions;

export const selectLodgeList = (state) => state.lodge.lodgeList;
export const selectIdLodgeList = (state) => state.lodge.idLikedList;

export default lodgeSlice.reducer;
