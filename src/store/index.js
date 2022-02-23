import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import personSlice from "./person-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    person: personSlice.reducer,
  },
});

export default store;
