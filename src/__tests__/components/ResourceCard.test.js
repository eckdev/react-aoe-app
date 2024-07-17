import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ResourceCard from "../../components/pages/Units/ResourceCard";
import { changeCheckAction } from "../../redux/slices/filters";

const mockStore = configureStore([]);

describe("ResourceCard Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      filters: {
        food: { checked: true },
        wood: { checked: false },
        gold: { checked: true },
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders ResourceCard component", () => {
    render(
      <Provider store={store}>
        <ResourceCard />
      </Provider>
    );

    expect(screen.getByText("Food")).toBeInTheDocument();
    expect(screen.getByText("Wood")).toBeInTheDocument();
    expect(screen.getByText("Gold")).toBeInTheDocument();
  });

  test("dispatches changeCheckAction action on resource change", () => {
    render(
      <Provider store={store}>
        <ResourceCard />
      </Provider>
    );

    const woodCheckbox = screen.getByLabelText("Wood");
    fireEvent.click(woodCheckbox);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      changeCheckAction(["food", "gold", "wood"])
    );
  });
});
