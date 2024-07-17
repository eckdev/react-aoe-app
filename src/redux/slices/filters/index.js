import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: "All",
  food: {
    checked: false,
    value: 0,
  },
  wood: {
    checked: false,
    value: 0,
  },
  gold: {
    checked: false,
    value: 0,
  },
};
  
  const updateValue = (state, resource, value) => {
    state[resource].value = value;
  };
  
  export const filtersSlice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
      changeSelectedAge: (state, action) => {
        state.age = action.payload;
      },
      changeCheckAction: (state, action) => {
        Object.keys(state).forEach((key) => {
          if (Object.prototype.hasOwnProperty.call(state[key], 'checked')) {
            state[key].checked = action.payload.includes(key);
          }
        });
      },
      changeInputAction: (state, action) => {
        updateValue(state, action.payload.key, action.payload.resource);
      },
    },
  });
  
  export const {
    changeCheckAction,
    changeInputAction,
    changeSelectedAge,
  } = filtersSlice.actions;
  export default filtersSlice.reducer;
