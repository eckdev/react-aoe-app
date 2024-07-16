import styled from "styled-components";
import BackgroundImg from "./background.png";

export const BackgroundImage = styled.div`
  min-height: 100vh;
  background: url(${BackgroundImg}) no-repeat center center fixed;
  background-size: cover;
  background-position: bottom;
`;
