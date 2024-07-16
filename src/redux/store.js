import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './saga/root-saga';
import unitsReducer from "./slices/units"
import unitReducer from "./slices/unit"

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    units: unitsReducer,
    unit: unitReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);

export default store