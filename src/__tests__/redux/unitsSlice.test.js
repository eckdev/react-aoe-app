import unitsReducer,{ getUnitsAction, getUnitsErrorAction, getUnitsSuccessAction } from "../../redux/slices/units";


describe('unitsSlice reducer', () => {
  const initialState = {
    data: [],
    isLoading: false,
    errors: ""
  };

  it('should handle initial state', () => {
    expect(unitsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle getUnitsAction', () => {
    const newState = unitsReducer(initialState, getUnitsAction());
    expect(newState.isLoading).toEqual(true);
    expect(newState.errors).toEqual("");
  });

  it('should handle getUnitsSuccessAction', () => {
    const mockData = [{ id: 1, name: 'Archer' }];
    const newState = unitsReducer(initialState, getUnitsSuccessAction(mockData));
    expect(newState.isLoading).toEqual(false);
    expect(newState.data).toEqual(mockData);
    expect(newState.errors).toEqual("");
  });

  it('should handle getUnitsErrorAction', () => {
    const mockError = "Failed to fetch units";
    const newState = unitsReducer(initialState, getUnitsErrorAction(mockError));
    expect(newState.isLoading).toEqual(false);
    expect(newState.errors).toEqual(mockError);
  });
});
