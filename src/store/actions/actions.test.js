import * as action from './index';
import {
    GET_UNITS_REQUEST,
    GET_UNIT,
    COST_FILTER,
    SET_ACTIVE_COST_FILTER,
    SET_COST_FILTER
  } from './types';

describe("actions", () => {
	it("getUnit should take filter and return it", () => {
		expect(action.getUnit(1)).toEqual({
			type: GET_UNIT,
            payload:1
		})
	})

    it("getUnits should return units", () => {
		expect(action.getUnits()).toEqual({
			type: GET_UNITS_REQUEST
		})
	})

    it("activeCostFilter should set active for selected filter", () => {
		expect(action.activeCostFilter("Wood")).toEqual({
			type: SET_ACTIVE_COST_FILTER,
            payload:"Wood"
		})
	})

	it("setCostFilter should set as a costs filter", () => {
		expect(action.setCostFilter("Wood",25)).toEqual({
			type: SET_COST_FILTER,
            payload:{
				name: "Wood",
				value: 25
			}
		})
	})

	it("costFilter should get filtered data by selected costs filter", () => {
		expect(action.costFilter()).toEqual({
			type: COST_FILTER
		})
	})
})