import {keyframes} from "styled-components";

export const translateBackground = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -600px;
  }
`;

export const disappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const raiseLines = keyframes`
  from {
    height: 0;
  }
  to {
    height: 25vh;
  }
`;

export const raiseLinesTop = keyframes`
  from {
    height: 0;
    top: 0;
  }
  to {
    height: 25vh;
    top: -25vh;
  }
`;

export const lineGrow = keyframes`
  from {
    width: 150px;
  }
  to {
    width: 90%;
  }
`;

export const shake = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  25% {
    transform: rotateZ(5deg);
  }

  50% {
    transform: rotateZ(0deg);
  }

  75% {
    transform: rotateZ(-5deg);
  }

  100% {
    transform: rotateZ(0deg);
  }
`;