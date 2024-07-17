import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AgeCard from "../../components/pages/Units/AgeCard";
import { changeSelectedAge } from "../../redux/slices/filters";

const mockStore = configureStore([]);
const ageList = ["All", "Dark", "Feudal", "Castle", "Imperial"];

describe("AgeCard Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      filters: { age: "All" },
    });

    store.dispatch = jest.fn();
  });

  test("renders AgeCard component", () => {
    render(
      <Provider store={store}>
        <AgeCard />
      </Provider>
    );

    ageList.forEach((age) => {
      expect(screen.getByText(age)).toBeInTheDocument();
    });
  });

  test("dispatches changeSelectedAge action on age change", () => {
    render(
      <Provider store={store}>
        <AgeCard />
      </Provider>
    );

    const ageItem = screen.getByText("Feudal");
    fireEvent.click(ageItem);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(changeSelectedAge("Feudal"));
  });
});
