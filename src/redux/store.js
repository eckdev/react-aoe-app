import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './saga/root-saga';
import unitsReducer from "./slices/units"
import unitReducer from "./slices/unit"
import filtersReducer from "./slices/filters"

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    units: unitsReducer,
    unit: unitReducer,
    filters: filtersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);

export default store