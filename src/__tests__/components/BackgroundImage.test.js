import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { BackgroundImage } from "../../components/pages/Home/BackgroundImage";
import BackgroundImg from "../../components/pages/Home/background.png";
import MobileBackgroundImg from "../../components/pages/Home/mobile-background-min.png";

describe('BackgroundImage component', () => {
  test('renders BackgroundImage component', () => {
    const { container } = render(<BackgroundImage />);
    const backgroundImage = container.firstChild;

    expect(backgroundImage).toBeInTheDocument();
  });

  test('uses desktop background image by default', () => {
    const { container } = render(<BackgroundImage />);
    const backgroundImage = container.firstChild;

    expect(backgroundImage).toHaveStyleRule('background', `url(${BackgroundImg}) no-repeat center center fixed`);
  });

  test('uses mobile background image when isMobile prop is true', () => {
    const { container } = render(<BackgroundImage isMobile={true} />);
    const backgroundImage = container.firstChild;

    expect(backgroundImage).toHaveStyleRule('background', `url(${MobileBackgroundImg}) no-repeat center center fixed`);
  });
});
