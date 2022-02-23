import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenticated: localStorage.getItem("isAuthenticated"),
    tokenID: localStorage.getItem("token"),
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.tokenID = action.payload;
      localStorage.setItem("token", state.tokenID);
      localStorage.setItem("isAuthenticated", true);
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
