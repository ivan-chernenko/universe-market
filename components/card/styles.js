import styled, {keyframes} from "styled-components";

const frontFlip = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  
  100% {
    transform: rotateY(360deg);
  }
`;

const backFlip = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  
  100% {
    transform: rotateY(540deg);
  }
`;

export const CardContainer = styled.div`
  position: relative;
  perspective: 1500px;
  width: 200px;
  height: 200px;
`;

export const FrontCard = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
  background: url(${props => props.card}) no-repeat;
  background-size: contain;
  perspective: 1000px;
  animation: linear ${frontFlip} infinite 5s;
`;

export const BackCard = styled.div`
  position: absolute;
  perspective: 1000px;
  backface-visibility: hidden;
  width: 200px;
  height: 200px;
  background: url(${props => props.back}) no-repeat;
  background-size: contain;
  animation: linear ${backFlip} infinite 5s;
`;