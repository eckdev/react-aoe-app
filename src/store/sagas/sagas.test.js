import { put, takeLatest } from 'redux-saga/effects';
import unitsWatch from './watcher'
import { getUnitsRequestSaga } from './units'
import data from '../age-of-empires-units.json'
import {
    GET_UNITS_REQUEST,
    GET_UNITS_SUCCESS
} from '../actions/types';

describe('SAGAS', () => {
    it('should dispatch action "GET_UNITS_REQUEST"', () => {
        const generator = unitsWatch();
        expect(generator.next().value)
            .toEqual(takeLatest(GET_UNITS_REQUEST, getUnitsRequestSaga))
        expect(generator.next().done).toBeTruthy();
    })

    it('should dispatch action "GET_UNITS_SUCCESS" with result', () => {
        const generator = getUnitsRequestSaga();
        expect(generator.next(data).value)
            .toEqual(put({ type: GET_UNITS_SUCCESS, data }))
        expect(generator.next().done).toBeTruthy();
    })
});