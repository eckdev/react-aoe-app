import filtersReducer, {
    changeCheckAction,
    changeInputAction,
    changeSelectedAge,
  } from '../../redux/slices/filters';
  
  describe('filtersSlice reducer', () => {
    const initialState = {
      age: "All",
      food: {
        checked: false,
        value: 0,
      },
      wood: {
        checked: false,
        value: 0,
      },
      gold: {
        checked: false,
        value: 0,
      },
    };
  
    it('should handle initial state', () => {
      expect(filtersReducer(undefined, {})).toEqual(initialState);
    });
  
    it('should handle changeSelectedAge', () => {
      const newState = filtersReducer(initialState, changeSelectedAge('Feudal'));
      expect(newState.age).toEqual('Feudal');
    });
  
    it('should handle changeCheckAction', () => {
      const checkedFilters = ['food', 'wood'];
      const newState = filtersReducer(initialState, changeCheckAction(checkedFilters));
      
      // Check if 'food' and 'wood' are checked, others should remain unchecked
      expect(newState.food.checked).toEqual(true);
      expect(newState.wood.checked).toEqual(true);
      expect(newState.gold.checked).toEqual(false);
    });
  
    it('should handle changeInputAction', () => {
      const newState = filtersReducer(initialState, changeInputAction({ key: 'food', resource: 50 }));
      expect(newState.food.value).toEqual(50);
    });
  });
  