import {
    GET_UNITS_REQUEST,
    GET_UNITS_SUCCESS,
    GET_UNITS_FAILURE,
    FILTER_UNIT} from './types';

    export const getUnits = payload => ({
        type: GET_UNITS_REQUEST,
        payload,
      });
      
      export const getUnitsSuccess = data => ({
        type: GET_UNITS_SUCCESS,
        data,
      });
      
      export const getUnitsFailure = error => ({
        type: GET_UNITS_FAILURE,
        error,
      });

      export const filterUnit = payload => ({
        type: FILTER_UNIT,
        payload,
      });