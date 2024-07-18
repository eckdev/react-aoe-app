import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, useRouteError } from "react-router-dom";
import Error from "../../pages/Error";

// Mock useRouteError
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteError: jest.fn(),
}));

describe("Error Component", () => {
  test("renders error message", () => {
    const mockError = { statusText: "Not Found", message: "Page not found" };
    useRouteError.mockReturnValue(mockError);

    const { getByText } = render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    expect(getByText(/Oops!/i)).toBeInTheDocument();
    expect(getByText(/Sorry, an unexpected error has occurred./i)).toBeInTheDocument();
    expect(getByText(/Not Found/i)).toBeInTheDocument();
  });

});
