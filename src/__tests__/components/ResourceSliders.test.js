import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ResourceSliders from "../../components/pages/Units/ResourceSliders";


const mockStore = configureStore([]);

describe("ResourceSliders Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      filters: {
        food: { checked: true, value: 50 },
        wood: { checked: true, value: 100 },
        gold: { checked: false, value: 150 },
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders ResourceSliders component", () => {
    render(
      <Provider store={store}>
        <ResourceSliders />
      </Provider>
    );

    expect(screen.getByText("Food Range")).toBeInTheDocument();
    expect(screen.getByText("Wood Range")).toBeInTheDocument();
    expect(screen.queryByText("Gold Range")).not.toBeInTheDocument();
  });

  test("displays the correct initial slider values", () => {
    render(
      <Provider store={store}>
        <ResourceSliders />
      </Provider>
    );

    expect(screen.getByText("Value: 50")).toBeInTheDocument();
    expect(screen.getByText("Value: 100")).toBeInTheDocument();
  });

});
