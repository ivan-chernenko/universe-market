import styled, {keyframes, css} from "styled-components";
import {Button} from "../button";
import {animationTimeouts} from "../../common/constants";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const disappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const StartedPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  background-size: 100vh;
  background: rgba(0,0,0,0);
  ${({status}) => status === 'exiting' ? css`animation: ${disappear} ${animationTimeouts.disappear}ms linear;` : ''}
  
  ${Button} {
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