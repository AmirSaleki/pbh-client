import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profileData",
  initialState: {
    profileData: {
      name: "",
      email: "",
      role: "",
      learnedItems: [],
      truthyAnswers: [],
    },
  },
  reducers: {
    addName(state, action) {
      state.profileData.name = action.payload;
    },
    addEmail(state, action) {
      state.profileData.email = action.payload;
    },
    addRole(state, action) {
      state.profileData.role = action.payload;
    },
    addToLearnedItems(state, action) {
      state.profileData.learnedItems.push(action.payload);
    },
    addToTruthyAnswers(state, action) {
      state.profileData.truthyAnswers.push(action.payload);
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice;
