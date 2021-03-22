import styled, {css} from "styled-components";
import {animationTimeouts} from "../../common/constants";
import {appear, disappear} from "../../common/animations";

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

export const CharactersLine = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  padding: 0 15%;
  width: 100%;
  justify-content: space-between;
`;