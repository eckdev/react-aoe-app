import * as types from './types';

export const getUnits = payload => ({
  type: types.GET_UNITS_REQUEST,
  payload,
});

export const getUnitsSuccess = data => ({
  type: types.GET_UNITS_SUCCESS,
  data,
});

export const getUnitsFailure = error => ({
  type: types.GET_UNITS_FAILURE,
  error,
});

export const getUnit = payload => ({
  type: types.GET_UNIT,
  payload,
});

export const getFilters = payload => ({
  type: types.GET_FILTERS,
  payload,
});

export const ageFilter = payload => ({
  type: types.AGE_FILTER,
  payload,
});

export const costFilter = payload => ({
  type: types.COST_FILTER,
  payload,
});

export const setCostFilter = (name,value) => ({
  type: types.SET_COST_FILTER,
  payload:{
    name,value
  },
});

export const activeCostFilter = payload => ({
  type: types.SET_ACTIVE_COST_FILTER,
  payload,
});