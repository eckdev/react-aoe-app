import reducer from './unitsReducer';
import {initialState} from './unitsReducer'
import * as action from '../actions/types';

  describe('reducer', () => {
    it('should handle GET_UNITS_SUCCESS', () => {
        const mockData = [{
                    age: "All",
                    id: 0,
                  }];
        expect(
          reducer(initialState,
          {
            type: action.GET_UNITS_SUCCESS,
            data:{units:mockData}
          })
        ).toEqual({
            ...initialState,
            loading:false,
            units:mockData,
            filteredUnits:mockData
        });
      })

      it('should handle GET_UNIT', () => {
        const mockData = [{
            age: "All",
            id: 1,
          },
          {
              age:"Dark",
              id:2
          }];
        expect(
          reducer({
              units:mockData,
              unit:{}
          },
          {
            type: action.GET_UNIT,
            payload:"1"
          })
        ).toEqual({
            units:mockData,
            unit:{
                age: "All",
                id: 1,
              }
        });
      })

      it('should handle AGE_FILTER', () => {
        const mockData = [{
                    age: "All",
                    id: 1,
                  },{
                      age:"Dark",
                      id:2
                  }];
        expect(
          reducer({units:mockData,filteredUnits:[],ages:initialState.ages},
          {
            type: action.AGE_FILTER,
            payload:"Dark"
          })
        ).toEqual({
            units:mockData,
            filteredUnits:[{
                age:"Dark",
                id:2
            }],
            ages:[
                { filter: "All", isActive: false },
                { filter: "Dark", isActive: true },
                { filter: "Feudal", isActive: false },
                { filter: "Castle", isActive: false },
                { filter: "Imperial", isActive: false }
              ],
        });
      })
})
