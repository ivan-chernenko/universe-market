import styled, {css} from 'styled-components';
import {animationTimeouts} from "../../common/constants";
import {appear, disappear, lineGrow} from "../../common/animations";

export const RoadMapContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-size: 100vh;
  background: rgba(0,0,0,0);
  ${({status}) => {
    if (status === 'entering') {
      return css`
        animation: ${appear} ${animationTimeouts.disappear}ms linear;
      `;
    } else if (status === 'exiting') {
      return css`
        animation: ${disappear} ${animationTimeouts.disappear}ms linear;
      `
    }
    return ''
  }}
`;

export const PlanetLine = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  padding: 0 50px;
  width: 100%;
  justify-content: space-between;

  &:before {
    width: 90%;
    height: 5px;
    top: 75px;
    position: absolute;
    z-index: 1;
    animation: ${lineGrow} 2s ease-in-out;
    animation-delay: ${animationTimeouts.disappear};
    background: rgb(200, 200, 200);
    box-shadow: rgb(200 200 200) 0 0 20px;
    content: "";
  }
`;

export const Header = styled.h1`
  position: absolute;
  color: rgb(200, 200, 200);
  font-size: 24px;
  left: 120px;
  top: 25px;
`;