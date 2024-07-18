import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import UnitTable from "../../components/ui/table";

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

const columns = [
  { key: "id", header: "Id" },
  { key: "name", header: "Name" },
  { key: "age", header: "Age" },
  {
    key: "cost",
    header: "Cost",
    render: (item) => (item.cost ? `${Object.entries(item.cost).map(([key, value]) => `${key}: ${value}`).join(", ")}` : "-"),
  },
];

const mockData = [
  { id: 1, name: "Unit 1", age: "Feudal", cost: { Wood: 20, Gold: 30 } },
  { id: 2, name: "Unit 2", age: "Castle", cost: { Wood: 50, Food: 50 } },
];

describe("UnitTable Component", () => {
  test("renders table headers correctly", () => {
    render(
      <Router>
        <UnitTable data={mockData} columns={columns} />
      </Router>
    );

    columns.forEach((column) => {
      expect(screen.getByText(column.header)).toBeInTheDocument();
    });
  });

  test("renders table data correctly", () => {
    render(
      <Router>
        <UnitTable data={mockData} columns={columns} />
      </Router>
    );

    mockData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.age)).toBeInTheDocument();
    });

    expect(screen.getByText("Wood: 20, Gold: 30")).toBeInTheDocument();
    expect(screen.getByText("Wood: 50, Food: 50")).toBeInTheDocument();
  });

  test("calls navigate function on row click", () => {
    render(
      <Router>
        <UnitTable data={mockData} columns={columns} />
      </Router>
    );

    fireEvent.click(screen.getByText("Unit 1"));
    expect(mockedNavigate).toHaveBeenCalledWith("/unit/1");

    fireEvent.click(screen.getByText("Unit 2"));
    expect(mockedNavigate).toHaveBeenCalledWith("/unit/2");
  });

  test("renders 'No Records' when data is empty", () => {
    render(
      <Router>
        <UnitTable data={[]} columns={columns} />
      </Router>
    );

    expect(screen.getByText("No Records")).toBeInTheDocument();
  });
});
