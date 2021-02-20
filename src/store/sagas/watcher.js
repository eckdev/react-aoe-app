import { takeLatest } from 'redux-saga/effects';
import { getUnitsRequestSaga } from './units';

import {
    GET_UNITS_REQUEST,
} from '../actions/types';

export default function* unitsWatch() {
	yield takeLatest(GET_UNITS_REQUEST, getUnitsRequestSaga);
}