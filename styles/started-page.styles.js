import styled, {keyframes} from "styled-components";
import {StyledButtonLink} from "../components/link";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StartedPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  
  ${StyledButtonLink} {
    margin-top: 70vh;
    z-index: 100;
  }
`;

export const GalaxyImage = styled.img`
  width: 900px;
  height: 900px;
  position: absolute;
  animation: ${rotate} 60s linear infinite;
  left: calc(50% - 450px);
  top: calc(50% - 450px);
  z-index: 10;
`;