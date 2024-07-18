import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Units from "../../pages/Units";
import { getUnitsAction } from "../../redux/slices/units";


const mockStore = configureStore([]);

const initialState = {
  units: {
    data: [],
    isLoading: false,
  },
  filters: {
    age: "All",
    food: { checked: true, value: 50 },
    wood: { checked: true, value: 50 },
    gold: { checked: true, value: 50 },
  },
};

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Units Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test("renders loading state", () => {
    store = mockStore({
        ...initialState,
        units: {
          data: [
          ],
          isLoading: true,
        },
      });
    render(
      <Provider store={store}>
        <Units />
      </Provider>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("renders data correctly", () => {
    store = mockStore({
      ...initialState,
      units: {
        data: [
          { id: 1, name: "Unit 1", age: "Feudal", cost: { Wood: 20, Gold: 30 } },
          { id: 2, name: "Unit 2", age: "Castle", cost: { Wood: 50, Food: 50 } },
        ],
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <Units />
      </Provider>
    );

    expect(screen.getByText(/unit 1/i)).toBeInTheDocument();
    expect(screen.getByText(/unit 2/i)).toBeInTheDocument();
  });

  test("dispatches getUnitsAction on mount", () => {
    render(
      <Provider store={store}>
        <Units />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(getUnitsAction(initialState.filters));
  });
});
