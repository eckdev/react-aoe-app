import reducer from './unitsReducer';
import { initialState } from './unitsReducer'
import * as action from '../actions/types';

describe('reducer', () => {
  it('should handle GET_UNITS_REQUEST', () => {
    expect(
      reducer(initialState,
        {
          type: action.GET_UNITS_REQUEST
        })
    ).toEqual({
      ...initialState,
      loading: true
    });
  })
  
  it('should handle GET_UNITS_SUCCESS', () => {
    const mockData = [{
      age: "All",
      id: 0,
    }];
    expect(
      reducer(initialState,
        {
          type: action.GET_UNITS_SUCCESS,
          data: { units: mockData }
        })
    ).toEqual({
      ...initialState,
      loading: false,
      units: mockData,
      filteredUnits: mockData
    });
  })

  it('should handle GET_UNITS_FAILURE', () => {
    expect(
      reducer(initialState,
        {
          type: action.GET_UNITS_FAILURE,
          error: "Error" 
        })
    ).toEqual({
      ...initialState,
      loading: false,
      error: "Error"
    });
  });

  it('should handle GET_UNIT', () => {
    const mockData = [{
      age: "All",
      id: 1,
    },
    {
      age: "Dark",
      id: 2
    }];
    expect(
      reducer({
        units: mockData,
        unit: {}
      },
        {
          type: action.GET_UNIT,
          payload: "1"
        })
    ).toEqual({
      units: mockData,
      unit: {
        age: "All",
        id: 1,
      }
    });
  })

  it('should handle GET_FILTERS', () => {
    expect(
      reducer(initialState,
        {
          type: action.GET_FILTERS
        })
    ).toEqual({
      ...initialState,
      ages: initialState.ages,
      costs: initialState.costs
    });
  });
  
  it('should handle AGE_FILTER', () => {
    const mockData = [{
      age: "All",
      id: 1,
    }, {
      age: "Dark",
      id: 2
    }];
    expect(
      reducer({
        units: mockData,
        filteredUnits: [],
        ages: initialState.ages
      },
        {
          type: action.AGE_FILTER,
          payload: "Dark"
        })
    ).toEqual({
      units: mockData,
      filteredUnits: [{
        age: "Dark",
        id: 2
      }],
      ages: [
        { filter: "All", isActive: false },
        { filter: "Dark", isActive: true },
        { filter: "Feudal", isActive: false },
        { filter: "Castle", isActive: false },
        { filter: "Imperial", isActive: false }
      ],
    });
  })

  it('should handle COST_FILTER', () => {
    const mockData = [{
      age: "Feudal",
      id: 1,
      cost: {
        Wood: 20,
        Gold: 35
      }
    },
    {
      age: "Dark",
      id: 2,
      cost: {
        Wood: 30,
        Gold: 45
      }
    }
    ];
    const initState = {
      units: mockData,
      ages: [
        { filter: "All", isActive: true }
      ],
      filteredUnits: [],
      costs: [
        { name: "Wood", isActive: true, value: 25 }
      ]
    }
    expect(
      reducer(initState,
        {
          type: action.COST_FILTER
        })
    ).toEqual({
      ...initState,
      filteredUnits: [{
        age: "Feudal",
        id: 1,
        cost: {
          Wood: 20,
          Gold: 35
        }
      }]
    });
  })

  it('should handle SET_ACTIVE_COST_FILTER', () => {
    const initState = {
      costs: [
        { name: "Wood", isActive: false, value: 0 },
        { name: "Gold", isActive: false, value: 0 }
      ]
    }
    expect(
      reducer(initState,
        {
          type: action.SET_ACTIVE_COST_FILTER,
          payload:"Wood"
        })
    ).toEqual({
      ...initState,
      costs:[
        { name: "Wood", isActive: true, value: 0 },
        { name: "Gold", isActive: false, value: 0 }
      ]
    });
  })

  it('should handle SET_COST_FILTER', () => {
    const initState = {
      costs: [
        { name: "Wood", isActive: true, value: 0 },
        { name: "Gold", isActive: false, value: 0 }
      ]
    }
    expect(
      reducer(initState,
        {
          type: action.SET_COST_FILTER,
          payload:{
            name:"Wood",
            value:25
          }
        })
    ).toEqual({
      ...initState,
      costs:[
        { name: "Wood", isActive: true, value: 25 },
        { name: "Gold", isActive: false, value: 0 }
      ]
    });
  })
})
