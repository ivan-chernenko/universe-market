import styled, {css} from "styled-components";
import {animationTimeouts} from "../../common/constants";
import {appear, disappear} from "../../common/animations";

export const ButtonsContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  top: 40px;
  padding: 0 20px;
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

export const CharactersLine = styled.div`
  @media(max-width: 1024px) {
    flex-direction: column;
    padding: 0 5%;
    margin-bottom: 100px;
  }
  
  box-sizing: border-box;
  display: flex;
  position: relative;
  padding: 0 15%;
  width: 100%;
  justify-content: space-between;
`;