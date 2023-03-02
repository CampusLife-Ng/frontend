import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessLoginPage: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    // give access
    giveAccess: (state) => {
      state.accessLoginPage = true;
    },

    //revoke access
    revokeAccess: (state) => {
      state.accessLoginPage = false;
    },
  },
});

export const { giveAccess, revokeAccess } = authSlice.actions;

export const selectAuth = (state) => state.auth.accessLoginPage;

export default authSlice.reducer;
