import {
    GET_UNITS_REQUEST,
    GET_UNITS_SUCCESS,
    GET_UNITS_FAILURE,
    FILTER_UNIT} from '../actions/types';

let initialState = {
    units:[],
    filteredUnits:[],
    filters:{},
    loading:false,
    error:'',

}

export default function(state = initialState, action) {
  debugger;
	switch (action.type) {
		case GET_UNITS_REQUEST:
			return {
                ...state,
                loading:true
            };
		case GET_UNITS_SUCCESS:
			return {
                ...state,
                loading:false,
                units:action.data.units
            };
            case GET_UNITS_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.error,
                };
              case FILTER_UNIT:
                return {
                  ...state,
                  filteredUnits: action.payload,
                };
		default:
			return state;
	}
}