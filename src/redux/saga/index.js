import { call, put, takeLatest } from "redux-saga/effects";

import { GET_UNITS, GET_UNIT_BY_ID } from "./types";
import { getUnitsErrorAction, getUnitsSuccessAction } from "../slices/units";
import { getUnitErrorAction, getUnitSuccessAction } from "../slices/unit";

// Generator function
function* getUnitsSaga() {
  try {
    const response = yield call(() => fetch("./data/age-of-empires-units.json"));
    const data = yield response.json();
    yield put(getUnitsSuccessAction(data.units));
  } catch (error) {
    yield put(getUnitsErrorAction(error));
  }
}

function* getUnitDetailSaga({payload: id}) {
    try {
      const response = yield call(() => fetch("../data/age-of-empires-units.json"));
      const data = yield response.json();
      const unit = data.units.find(x => x.id === Number(id));
      yield put(getUnitSuccessAction(unit ?? null));
    } catch (error) {
      yield put(getUnitErrorAction(error));
    }
  }

// Generator function
export function* watchGetUnits() {
  yield takeLatest(GET_UNITS, getUnitsSaga);
}

export function* watchGetUnitDetail() {
    yield takeLatest(GET_UNIT_BY_ID, getUnitDetailSaga);
  }