import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes, useRouteError } from "react-router-dom";
import configureStore from "redux-mock-store";
import App from "../../App";
import Error from "../../pages/Error";


const mockStore = configureStore([]);

const initialState = {
  units: { data: [], isLoading: false },
  unit: { data: null, isLoading: false },
  filters: { food: { checked: false }, wood: { checked: false }, gold: { checked: false } }
};

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useRouteError: jest.fn(),
  }));

describe("App Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("renders Home page on default route", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test("renders Units page on /units route", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/units"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/feudal/i)).toBeInTheDocument(); 
  });

  test("renders UnitDetail page on /unit/:id route", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/unit/1"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test("renders Error page on invalid route", () => {
    const mockError = { statusText: "Not Found", message: "Page not found" };
    useRouteError.mockReturnValue(mockError);
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/invalid-route"]}>
          <Routes>
            <Route path="*" element={<Error />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/error/i)).toBeInTheDocument(); 
  });
});
