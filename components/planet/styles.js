import styled, {keyframes} from "styled-components";

const translateBackground = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -600px;
  }
`;

export const PlanetTextsContainer = styled.div`
  position: absolute;
  z-index: 10;
  color: rgb(200 200 200);
  font-size: 18px;
  width: 250px;
  left: 100px;
`;

export const PlanetStyle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  z-index: 10;
  box-shadow: 0 0 60px -20px rgba(255, 189, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23);

  :nth-child(even):before {
    height: 300px;
    width: 3px;
    top: 150px;
    left: 75px;
    position: absolute;
    z-index: 1;
    background: rgb(200, 200, 200);
    box-shadow: rgb(200 200 200) 0px 0px 20px;
    content: "";
  }
  
  :nth-child(odd):before {
    height: 300px;
    width: 3px;
    top: -300px;
    left: 75px;
    position: absolute;
    z-index: 1;
    background: rgb(200, 200, 200);
    box-shadow: rgb(200 200 200) 0 0 20px;
    content: "";
  }

  :nth-child(even):after {
    content: "";
    top: 450px;
    position: absolute;
    width: 16px;
    left: 68px;
    height: 16px;
    background: rgb(200, 200, 200);
    box-shadow: rgb(200 200 200) 0 0 15px;
    border-radius: 50%;
  }
  
  :nth-child(odd):after {
    content: "";
    top: -316px;
    position: absolute;
    width: 16px;
    left: 68px;
    height: 16px;
    background: rgb(200, 200, 200);
    box-shadow: rgb(200 200 200) 0 0 15px;
    border-radius: 50%;
  }

  &:nth-child(even) ${PlanetTextsContainer} {
    top: 465px;
    transform: translateY(-100%);
  }

  &:nth-child(odd) ${PlanetTextsContainer} {
    top: -310px;
  }
`;

export const PlanetMask = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: absolute;
  box-shadow: inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(255, 204, 159, 0.6);
  border-radius: 50%;
`;

export const PlanetBackground = styled.div`
  animation: ${translateBackground} 40s infinite linear;
  background: url(/mars.jpg) repeat-x;
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
`;

export const PlanetClouds = styled.div`
  background: url(/clouds.png) repeat-x;
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
  animation: ${translateBackground} 30s infinite linear;
  opacity: 0.4;
`;