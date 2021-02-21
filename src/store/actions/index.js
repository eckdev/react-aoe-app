import {
  GET_UNITS_REQUEST,
  GET_UNITS_SUCCESS,
  GET_UNITS_FAILURE,
  GET_UNIT,
  COST_FILTER,
  AGE_FILTER,
  SET_ACTIVE_COST_FILTER,
  SET_COST_FILTER,
  GET_FILTERS
} from './types';

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

export const getUnit = payload => ({
  type: GET_UNIT,
  payload,
});

export const getFilters = payload => ({
  type: GET_FILTERS,
  payload,
});

export const ageFilter = payload => ({
  type: AGE_FILTER,
  payload,
});

export const costFilter = payload => ({
  type: COST_FILTER,
  payload,
});

export const setCostFilter = (name,value) => ({
  type: SET_COST_FILTER,
  payload:{
    name,value
  },
});

export const activeCostFilter = payload => ({
  type: SET_ACTIVE_COST_FILTER,
  payload,
});