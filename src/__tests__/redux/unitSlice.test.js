import unitReducer, { getUnitAction, getUnitSuccessAction, getUnitErrorAction } from '../../redux/slices/unit';

describe('unitSlice reducer', () => {
  const initialState = {
    data: null,
    isLoading: false,
    errors: ""
  };

  it('should handle initial state', () => {
    expect(unitReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle getUnitAction', () => {
    const newState = unitReducer(initialState, getUnitAction());
    expect(newState.isLoading).toEqual(true);
    expect(newState.errors).toEqual("");
  });

  it('should handle getUnitSuccessAction', () => {
    const mockData = { id: 1, name: 'Archer' };
    const newState = unitReducer(initialState, getUnitSuccessAction(mockData));
    expect(newState.isLoading).toEqual(false);
    expect(newState.data).toEqual(mockData);
    expect(newState.errors).toEqual("");
  });

  it('should handle getUnitErrorAction', () => {
    const mockError = "Failed to fetch unit";
    const newState = unitReducer(initialState, getUnitErrorAction(mockError));
    expect(newState.isLoading).toEqual(false);
    expect(newState.errors).toEqual(mockError);
  });
});
