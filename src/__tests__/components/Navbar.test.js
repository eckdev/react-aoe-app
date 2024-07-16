import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Navbar from "../../components/ui/navbar"

describe('Navbar component', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
    const homeLink = screen.getByText(/Home/i);
    const unitsLink = screen.getByText(/Units/i);

    expect(homeLink).toBeInTheDocument();
    expect(unitsLink).toBeInTheDocument();
  });

  test('contains correct links', () => {
    render(<Navbar />);
    const homeLink = screen.getByText(/Home/i).closest('a');
    const unitsLink = screen.getByText(/Units/i).closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(unitsLink).toHaveAttribute('href', '/units');
  });
});
