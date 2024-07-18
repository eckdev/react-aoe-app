/* eslint-disable no-undef */
import { getUnitDetailSaga, getUnitsSaga } from "../../redux/saga";
import {
  getUnitsErrorAction,
  getUnitsSuccessAction,
} from "../../redux/slices/units";
import {
  getUnitErrorAction,
  getUnitSuccessAction,
} from "../../redux/slices/unit";
import { runSaga } from "redux-saga";



describe("getUnitsSaga", () => {
  it("should fetch units and dispatch success action", async () => {
    const mockFilters = {
      age: "Feudal",
      food: { checked: true, value: 50 },
      wood: { checked: false },
      gold: { checked: true, value: 100 },
    };
    const mockResponse = {
      json: jest
        .fn()
        .mockResolvedValueOnce({
          units: [
            { id: 1, age: "Feudal", cost: { Food: 50, Wood: 20, Gold: 100 } },
          ],
        }),
    };

    global.fetch = jest.fn().mockResolvedValueOnce(mockResponse);

    let dispatched = [];

    await runSaga({
      dispatch: action => dispatched.push(action),
    }, getUnitsSaga, { payload: mockFilters }).toPromise();


    expect(dispatched).toEqual([
      getUnitsSuccessAction([
        { id: 1, age: "Feudal", cost: { Food: 50, Wood: 20, Gold: 100 } },
      ])]
    );
  });

  it("should handle fetch error and dispatch error action", async () => {
    const mockFilters = { age: 'Feudal', food: { checked: true, value: 50 }, wood: { checked: false }, gold: { checked: true, value: 100 } };
    const error = new Error('Failed to fetch');
    global.fetch = jest.fn().mockRejectedValueOnce(error);

    let dispatched = [];

    await runSaga({
      dispatch: action => dispatched.push(action),
    }, getUnitsSaga, { payload: mockFilters }).toPromise();

    expect(dispatched).toEqual([getUnitsErrorAction(error)]);
  });
});

describe('getUnitDetailSaga', () => {
    it('should fetch unit detail data and dispatch success action', async () => {
      const mockId = 1;
      const mockResponse = {
        json: jest.fn().mockResolvedValueOnce({ units: [{ id: 1, name: 'Archer', age: 'Feudal', cost: { Food: 25, Wood: 45, Gold: 0 } }] }),
      };
  
      global.fetch = jest.fn().mockResolvedValueOnce(mockResponse);
  
      let dispatched = [];
  
      await runSaga({
        dispatch: action => dispatched.push(action),
      }, getUnitDetailSaga, { payload: mockId }).toPromise();
  
      expect(dispatched).toEqual([getUnitSuccessAction({ id: 1, name: 'Archer', age: 'Feudal', cost: { Food: 25, Wood: 45, Gold: 0 } })]);
    });
  
    it('should handle errors', async () => {
      const mockId = 1;
      const error = new Error('Failed to fetch');
      global.fetch = jest.fn().mockRejectedValueOnce(error);
  
      let dispatched = [];
  
      await runSaga({
        dispatch: action => dispatched.push(action),
      }, getUnitDetailSaga, { payload: mockId }).toPromise();
  
      expect(dispatched).toEqual([getUnitErrorAction(error)]);
    });
  });


