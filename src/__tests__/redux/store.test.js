import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from '../../redux/slices/units';
import unitReducer from '../../redux/slices/unit';
import filtersReducer from '../../redux/slices/filters';

// Mocking the saga run method
jest.mock("redux-saga", () => ({
  ...jest.requireActual("redux-saga"),
  run: jest.fn(),
}));

describe("Redux Store Configuration", () => {
  let store;
  let sagaMiddleware;

  beforeEach(() => {
    sagaMiddleware = createSagaMiddleware();
    store = configureStore({
      reducer: {
        units: rootReducer,
        unit: unitReducer,
        filters: filtersReducer
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    });

  });

  test("Store configuration", () => {
    expect(store.getState()).toEqual({
      units: expect.any(Object), 
      unit: expect.any(Object), 
      filters: expect.any(Object), 
    });

  });

});
