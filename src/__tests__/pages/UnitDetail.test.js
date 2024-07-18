import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UnitDetail from "../../pages/UnitDetail";
import { getUnitAction } from "../../redux/slices/unit";


jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
}));


const mockStore = configureStore([]);

const initialState = {
  unit: {
    data: null,
    isLoading: true,
  },
};

describe("UnitDetail Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test("renders loading state", () => {
    render(
      <Provider store={store}>
        <UnitDetail />
      </Provider>
    );

    expect(screen.getByTestId("detail-loader")).toBeInTheDocument();
  });

  test("renders unit details correctly", async () => {
    store = mockStore({
      unit: {
        data: {
          id: 1,
          name: "Unit 1",
          age: "Feudal",
          cost: { Wood: 20, Gold: 30 },
        },
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <UnitDetail />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("id")).toBeInTheDocument();
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("name")).toBeInTheDocument();
      expect(screen.getByText("Unit 1")).toBeInTheDocument();
      expect(screen.getByText("age")).toBeInTheDocument();
      expect(screen.getByText("Feudal")).toBeInTheDocument();
      expect(screen.getByText("cost")).toBeInTheDocument();
      expect(screen.getByText("Wood: 20,")).toBeInTheDocument();
      expect(screen.getByText("Gold: 30")).toBeInTheDocument();
    });
  });

  test("dispatches getUnitAction on mount", () => {
    render(
      <Provider store={store}>
        <UnitDetail />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(getUnitAction("1"));
  });
});
