import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState.filter,
  reducers: {
    // setStatusFilter: (state, action) => {
    //   return action.payload;
    // },

    setStatusFilter(state, action) {
      return state = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
export default filterReducer;
