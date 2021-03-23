import styled from "styled-components";
import {shake} from "../../common/animations";

export const Button = styled.button`
  box-sizing: border-box;
  text-decoration: none;
  width: 278px;
  height: 58px;
  text-align: center;
  line-height: 52px;
  color: rgb(249 0 255);
  border: 1px solid rgb(249 0 255);
  box-shadow: 0 0 20px rgb(249 0 255);
  border-radius: 5px;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  @media(max-width: 1024px) {
    height: 40px;
    width: 200px;
    line-height: 40px;
    font-size: 18px;
  }
  
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
  
  @media(max-width: 600px) {
    width: 25px;
    height: 100px;
    right: 20px;
    bottom: 20px;
  }

  @media(max-height: 800px) {
    width: 25px;
    height: 100px;
    right: 20px;
    bottom: 20px;
  }
  
  &:hover {
    animation: ${shake} 150ms infinite ease-in-out;
  }
  
  &:focus {
    outline: none;
  }
`;