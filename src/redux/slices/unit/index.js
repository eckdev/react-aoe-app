import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  errors: "",
};

export const unitSlice = createSlice({
  name: "unit",
  initialState: initialState,
  reducers: {
    getUnitAction: (state) => {
      state.isLoading = true;
      state.errors = "";
    },
    getUnitSuccessAction: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getUnitErrorAction: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    }
  },
});

export const { getUnitAction, getUnitErrorAction, getUnitSuccessAction } = unitSlice.actions;
export default unitSlice.reducer;