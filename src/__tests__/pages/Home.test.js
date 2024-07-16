import '@testing-library/jest-dom';
import 'jest-styled-components';
import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages/Home";

describe('Home component', () => {
  test('renders Home component', () => {
    const { container } = render(<Home />);
    const backgroundImage = container.firstChild;

    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveStyleRule('min-height', '100vh');
  });

  test('contains BackgroundImage component', () => {
    const { container } = render(<Home />);
    const backgroundImage = container.querySelector('div');

    expect(backgroundImage).toHaveStyleRule('background', expect.stringContaining('background.png'));
  });
});
