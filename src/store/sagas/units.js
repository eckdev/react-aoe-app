import { put } from 'redux-saga/effects';
import * as types from '../actions/types';
import data from '../age-of-empires-units.json'

export function* getUnitsRequestSaga() {
    try {
        yield put({ type: types.GET_UNITS_SUCCESS, data });
    } catch (error) {
        yield put({ type: types.GET_UNITS_FAILURE, error });
    }
}
