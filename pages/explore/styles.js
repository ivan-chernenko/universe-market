import styled, {keyframes} from 'styled-components';

export const ExploreContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const lineGrow = keyframes`
  from {
    width: 150px;
  }

  to {
    width: 90%;
  }
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
    animation: ${lineGrow} 4s ease-in-out;
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