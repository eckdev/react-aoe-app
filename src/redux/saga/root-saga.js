import { all, fork } from "redux-saga/effects";
import { watchGetUnitDetail, watchGetUnits } from ".";

const rootSaga = function* () {
  yield all([
    fork(watchGetUnits),
    fork(watchGetUnitDetail)
  ]);
};

export default rootSaga;