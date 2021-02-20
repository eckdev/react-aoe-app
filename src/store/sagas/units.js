import { put, call } from 'redux-saga/effects';
import {
    GET_UNITS_SUCCESS,
    GET_UNITS_FAILURE,
} from '../actions/types';
import data from '../age-of-empires-units.json'

export function* getUnitsRequestSaga({ payload }) {
    try {
        yield put({ type: GET_UNITS_SUCCESS, data });
    } catch (error) {
        yield put({ type: GET_UNITS_FAILURE, error });
    }
}
