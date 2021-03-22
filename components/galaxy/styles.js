import styled, {keyframes, css} from "styled-components";
import {Button} from "../button";
import {animationTimeouts} from "../../common/constants";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.05);
  }

  50% {
    transform: scale(1.1);
  }

  75% {
    transform: scale(1.05);
  }
  
  100% {
    transform: scale(1);
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
    margin-top: 80vh;
    z-index: 100;
  }
`;

export const GalaxyImage = styled.img`
  width: 900px;
  position: absolute;
  animation: ${pulse} 2s linear infinite;
  left: calc(50% - 450px);
  top: calc(50% - 350px);
  z-index: 10;
`;