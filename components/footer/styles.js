import styled from "styled-components";

export const StyledFooter = styled.footer`
  z-index: 1000;
  box-sizing: border-box;
  padding: 6px 40px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: 50px;
  width: 100vw;
  border-top: 1px solid rgb(200,200,200);
  color: rgb(200,200,200);
  background: black;
  align-items: center;

  > p {
    margin: 0;
  }
`;