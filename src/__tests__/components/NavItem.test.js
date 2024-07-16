import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import '@testing-library/jest-dom/extend-expect';
import NavItem from "../../components/ui/navItem";

// Custom component to test NavItem with different routes
// eslint-disable-next-line react/prop-types
const NavItemWithRouter = ({ link, label, initialEntries }) => (
  <MemoryRouter initialEntries={initialEntries}>
    <NavItem link={link} label={label} />
  </MemoryRouter>
);

test('renders NavItem and checks class based on pathname', () => {
  const { getByText } = render(
    <NavItemWithRouter link="/" label="Home" initialEntries={['/']} />
  );

  const navItem = getByText('Home');
  expect(navItem).toHaveClass('text-white');
});

test('renders NavItem with different pathname and checks class and span visibility', () => {
  const { getByText } = render(
    <NavItemWithRouter link="/" label="Home" initialEntries={['/different']} />
  );

  const navItem = getByText('Home');
  expect(navItem).toHaveClass('text-black');
  expect(navItem.querySelector('span')).not.toBeInTheDocument();
});

test('renders NavItem with active link and checks span visibility', () => {
  const { getByText } = render(
    <NavItemWithRouter link="/units" label="Units" initialEntries={['/units']} />
  );

  const navItem = getByText('Units');
  expect(navItem.querySelector('span')).toBeInTheDocument();
});
