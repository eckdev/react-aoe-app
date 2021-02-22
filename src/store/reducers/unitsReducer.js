import {
  GET_UNITS_REQUEST,
  GET_UNITS_SUCCESS,
  GET_UNITS_FAILURE,
  GET_UNIT,
  AGE_FILTER,
  COST_FILTER,
  SET_ACTIVE_COST_FILTER,
  SET_COST_FILTER,
  GET_FILTERS
} from '../actions/types';

export const initialState = {
  units: [],
  filteredUnits: [],
  unit:[],
  loading: false,
  ages:[
    { filter: "All", isActive: true },
    { filter: "Dark", isActive: false },
    { filter: "Feudal", isActive: false },
    { filter: "Castle", isActive: false },
    { filter: "Imperial", isActive: false }
  ],
  costs:[
    { name: "Wood", isActive: false,value:0 },
    { name: "Food", isActive: false,value:0 },
    { name: "Gold", isActive: false,value:0 }
  ],
  error: '',

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNITS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_UNITS_SUCCESS:
      return {
        ...state,
        loading: false,
        units: action.data.units,
        filteredUnits:action.data.units,
      };
    case GET_UNITS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case GET_UNIT:
        const id = parseInt(action.payload);
        return {
          ...state,
          unit: state.units.find(x=> x.id === id)
        };
      case GET_FILTERS:
        return {
          ...state,
          ages:state.ages,
          costs: state.costs
        };
    case AGE_FILTER:
      let filter = action.payload;
      return {
        ...state,
        filteredUnits: filter === 'All' ? state.units : state.units.filter(unit => unit.age === filter),
        ages: state.ages.map(function(age){
          age.filter === filter ? age.isActive = true : age.isActive = false;
          return age;
        })
      };
    case COST_FILTER:
      let filteredData = state.units;
      let filters =state.costs.filter(x=> x.isActive); // get Active Cost Filters

      let getActiveAge = state.ages.find(x=> x.isActive); // get Active Age
      if (getActiveAge.filter !== 'All') {
        filteredData = state.units.filter(unit => unit.age === getActiveAge.filter)
      }

      let filtereds = filteredData.filter(unit => {
        return filters.every(filter => {
          if (unit.cost && typeof unit.cost[filter.name] !== 'undefined') {
            return unit.cost[filter.name] <= filter.value;
          }
          return false;
        })
      })

      return {
        ...state,
        filteredUnits: filtereds,
      };
    case SET_ACTIVE_COST_FILTER:
      return {
        ...state,
        costs: state.costs.map((cost) => {
          if(cost.name === action.payload){
            cost.isActive = !cost.isActive;
          }
          return cost;
        })
      }
      case SET_COST_FILTER:
        return {
          ...state,
          costs: state.costs.map((cost) => {
            if(cost.name === action.payload.name){
              cost.value = parseInt(action.payload.value);
            }
            return cost;
          })
        }
    default:
      return state;
  }
}

export default reducer;