import styled from "styled-components";
import BackgroundImg from "./background.png";
import MobileBackgroundImg from "./mobile-background-min.png";

export const BackgroundImage = styled.div`
  display: flex;
  height: 100%;
  background: url(${(props) =>
      props.isMobile ? MobileBackgroundImg : BackgroundImg})
    no-repeat center center fixed;
  background-size: cover;
  background-position: bottom;
`;
