import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../components/ui/navbar";

describe('Navbar component', () => {
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    );
  };

  test('renders Navbar component', () => {
    const { container } = renderWithRouter(<Navbar />);
    const navbar = container.querySelector('header');

    expect(navbar).toBeInTheDocument();
  });

  test('contains Home and Units NavItem components', () => {
    const { getByText } = renderWithRouter(<Navbar />);

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Units')).toBeInTheDocument();
  });

  test('NavItem components have correct links', () => {
    const { getByText } = renderWithRouter(<Navbar />);

    const homeLink = getByText('Home').closest('a');
    const unitsLink = getByText('Units').closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(unitsLink).toHaveAttribute('href', '/units');
  });
});

