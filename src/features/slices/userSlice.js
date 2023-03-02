import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},
});

export const selectUser = (state) => state.user.isUser;

export default userSlice.reducer;
