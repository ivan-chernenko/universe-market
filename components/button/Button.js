import styled from "styled-components";

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
  width: 100px;
  height: 100px;
  background: bisque;
  position: absolute;
  right: 30px;
  bottom: 80px;
  
  &:focus {
    outline: none;
  }
`;