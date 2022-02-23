import { createSlice } from "@reduxjs/toolkit";

let personId = 0;
const personSlice = createSlice({
  name: "person",
  initialState: {
    person: [
      {
        id: personId,
        name: "",
        phone: "",
        weight: "",
        balance: 0,
      },
    ],
  },
  reducers: {
    addId(state, action) {
      state.person[personId].id = action.payload;
    },
    addName(state, action) {
      state.person[personId].name = action.payload;
    },
    addPhone(state, action) {
      state.person[personId].phone = action.payload;
    },
    addWeight(state, action) {
      state.person.weight = action.payload;
    },
    addBalance(state, action) {
      state.person.balance += action.payload;
    },
    subBalance(state, action) {
      state.person.balance -= action.payload;
    },
  },
});

export const personActions = personSlice.actions;
export default personSlice;
