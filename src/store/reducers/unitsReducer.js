import * as types from '../actions/types';

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
    case types.GET_UNITS_REQUEST:{
      return {
        ...state,
        loading: true
      };
    }
    case types.GET_UNITS_SUCCESS:{
      return {
        ...state,
        loading: false,
        units: action.data.units,
        filteredUnits:action.data.units,
      };
    }
    case types.GET_UNITS_FAILURE:{
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
      case types.GET_UNIT:{
        const id = parseInt(action.payload);
        return {
          ...state,
          unit: state.units.find(x=> x.id === id)
        };
      }
      case types.GET_FILTERS:{
        return {
          ...state,
          ages:state.ages,
          costs: state.costs
        };
      }
    case types.AGE_FILTER:{
      const ageFilter = action.payload;
      return {
        ...state,
        filteredUnits: ageFilter === 'All' ? state.units : state.units.filter(unit => unit.age === ageFilter),
        ages: state.ages.map(function(age){
          age.filter === ageFilter ? age.isActive = true : age.isActive = false;
          return age;
        })
      };
    }
    case types.COST_FILTER:{
      var filteredData = state.units;
      const filters =state.costs.filter(x=> x.isActive); // get Active Cost Filters

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
    }
    case types.SET_ACTIVE_COST_FILTER:{
      return {
        ...state,
        costs: state.costs.map((cost) => {
          if(cost.name === action.payload){
            cost.isActive = !cost.isActive;
          }
          return cost;
        })
      }
    }
      case types.SET_COST_FILTER:{
        return {
          ...state,
          costs: state.costs.map((cost) => {
            if(cost.name === action.payload.name){
              cost.value = parseInt(action.payload.value);
            }
            return cost;
          })
        }
      }
    default:
      return state;
  }
}

export default reducer;