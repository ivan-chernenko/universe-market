import styled from 'styled-components';
import {appear} from "../../common/animations";
import {animationTimeouts} from "../../common/constants";

export const CharacterAvatar = styled.div`
  background: url(${props => props.avatar}) no-repeat;
  background-size: contain;
  height: 270px;
  width: 270px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: url(${props => props.hoveredAvatar}) no-repeat;
    background-size: contain;
  }
`;

export const CharacterContainer = styled.div`
  margin-top: 45px;
  cursor: pointer;
`;

export const CharacterText = styled.div`
  color: rgb(200,200,200);
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  opacity: 0;
  animation: ${appear} ${animationTimeouts.disappear}ms linear;
  animation-fill-mode: forwards;
  animation-delay: ${animationTimeouts.disappear}ms;
`;