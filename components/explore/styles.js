import styled, {css, keyframes} from "styled-components";
import {animationTimeouts} from "../../common/constants";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

export const ExploreContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position: absolute;
  background-size: 100vh;
  background: rgba(0, 0, 0, 0);
  ${({status}) => {
    if (status === 'entering') {
      return css`animation: ${appear} ${animationTimeouts.disappear}ms linear;`;
    } else if (status === 'exiting') {
      return css`animation: ${disappear} ${animationTimeouts.disappear}ms linear;`
    }
    return ''
  }}
`;

export const PlanetLine = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  padding: 0 150px;
  width: 100%;
  justify-content: space-between;
`;