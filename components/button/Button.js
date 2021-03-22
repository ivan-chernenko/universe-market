import styled from "styled-components";
import {shake} from "../../common/animations";

export const Button = styled.button`
  box-sizing: border-box;
  text-decoration: none;
  width: 258px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  color: #C8C8C8;
  border: 1px solid #C8C8C8;
  box-shadow: 0 0 20px #C8C8C8;
  border-radius: 5px;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

export const RocketButton = styled.button`
  border: none;
  width: 50px;
  height: 200px;
  background: url("/rocket.png") no-repeat;
  background-size: contain;
  position: absolute;
  right: 80px;
  bottom: 80px;
  cursor: pointer;
  
  &:hover {
    animation: ${shake} 150ms infinite ease-in-out;
  }
  
  &:focus {
    outline: none;
  }
`;