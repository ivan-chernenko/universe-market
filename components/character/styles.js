import styled from 'styled-components';
import {appear} from "../../common/animations";
import {animationTimeouts} from "../../common/constants";

export const CharacterAvatar = styled.div`
  background: url(${props => props.avatar}) no-repeat;
  background-size: contain;
  height: 270px;
  width: 270px;
  transition: all 0.4s ease-in-out;
  
  @media(max-width: 1200px) {
    height: 200px;
    width: 200px;
  }
  
  @media(max-width: 1024px) {
    margin: 0 20px;
  }

  @media(max-height: 800px) {
    height: 150px;
    width: 150px;
  }

  @media(max-width: 600px) {
    height: 100px;
    width: 100px;
  }

  &:hover {
    transform: scale(1.05);
    background: url(${props => props.hoveredAvatar}) no-repeat;
    background-size: contain;
  }
`;

export const CharacterContainer = styled.div`
  margin-top: 45px;
  cursor: pointer;

  @media(max-width: 1024px) {
    display: flex;
    
    :nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

export const CharacterText = styled.div`
  @media(max-width: 1024px) {
    font-size: 18px;
    display: flex;
    align-items: center;
    margin-top: 0;
  }
  
  color: rgb(200,200,200);
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  opacity: 0;
  animation: ${appear} ${animationTimeouts.disappear}ms linear;
  animation-fill-mode: forwards;
  animation-delay: ${animationTimeouts.disappear}ms;
`;