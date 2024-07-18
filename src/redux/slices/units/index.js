import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [],
  isLoading: false,
  errors: ""
};

export const unitsSlice = createSlice({
  name: "units",
  initialState: initialState,
  reducers: {
    getUnitsAction: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    getUnitsSuccessAction: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getUnitsErrorAction: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const { getUnitsAction, getUnitsErrorAction, getUnitsSuccessAction } = unitsSlice.actions;
export default unitsSlice.reducer;
