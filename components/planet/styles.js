import styled from "styled-components";
import {animationTimeouts} from "../../common/constants";
import {appear, raiseLines, raiseLinesTop, translateBackground} from "../../common/animations";

export const PlanetTextsContainer = styled.div`
  position: absolute;
  z-index: 10;
  color: rgb(200 200 200);
  font-size: 20px;
  width: 250px;
  left: 100px;
  opacity: 0;
  animation: ${appear} 400ms ease-in-out forwards;

  @media(max-width: 600px) {
    width: 170px;
    font-size: 16px;
    > p {
      margin: 4px 0;
    }
  }
`;

export const PlanetStyle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  z-index: 10;
  @media(max-width: 600px) {
    height: 75px;
    width: 75px;
    min-width: 75px;
    min-height: 75px;
    margin-bottom: 100px;
  }
`;

export const PlanetStyleWithLines = styled(PlanetStyle)`
  :nth-child(even):before {
    width: 3px;
    top: 150px;
    left: 75px;
    position: absolute;
    z-index: 1;
    background: rgb(200, 200, 200);
    box-shadow: rgb(200 200 200) 0 0 20px;
    content: "";
    animation: ${raiseLines} 400ms ease-in-out forwards;
  }

  :nth-child(odd):before {
    width: 3px;
    top: -300px;
    left: 75px;
    position: absolute;
    z-index: 1;
    animation: ${raiseLinesTop} 400ms ease-in-out forwards;
    background: rgb(200, 200, 200);
    box-shadow: rgb(200 200 200) 0 0 20px;
    content: "";
  }
  
  :nth-child(1):before {
    animation-delay: 0ms;
  }

  :nth-child(2):before {
    animation-delay: 400ms;
  }

  :nth-child(3):before {
    animation-delay: 800ms;
  }

  :nth-child(4):before {
    animation-delay: 1200ms;
  }

  :nth-child(5):before {
    animation-delay: 1600ms;
  }

  :nth-child(1) ${PlanetTextsContainer} {
    animation-delay: 400ms;
  }

  :nth-child(2) ${PlanetTextsContainer} {
    animation-delay: 800ms;
  }

  :nth-child(3) ${PlanetTextsContainer} {
    animation-delay: 1200ms;
  }

  :nth-child(4) ${PlanetTextsContainer} {
    animation-delay: 1600ms;
  }

  :nth-child(5) ${PlanetTextsContainer} {
    animation-delay: 2000ms;
  }

  :nth-child(even):after {
    content: "";
    top: calc(149px + 25vh);
    position: absolute;
    width: 16px;
    left: 69px;
    height: 16px;
    background: rgb(200, 200, 200);
    box-shadow: rgb(200 200 200) 0 0 15px;
    border-radius: 50%;
  }

  :nth-child(odd):after {
    content: "";
    top: -25vh;
    position: absolute;
    width: 16px;
    left: 68px;
    height: 16px;
    background: rgb(200, 200, 200);
    box-shadow: rgb(200 200 200) 0 0 15px;
    border-radius: 50%;
  }

  &:nth-child(even) ${PlanetTextsContainer} {
    top: calc(27vh + 150px);
    transform: translateY(-100%);
  }

  &:nth-child(odd) ${PlanetTextsContainer} {
    top: -25vh;
  }

  @media(max-width: 600px) {
    flex-direction: column;
    :nth-child(even):before {
      height: 0;
      width: 0;
      animation: none;
    }

    :nth-child(odd):before {
      height: 0;
      width: 0;
      animation: none;
    }

    :nth-child(even):after {
      height: 0;
      width: 0;
      animation: none;
    }

    :nth-child(odd):after {
      height: 0;
      width: 0;
      animation: none;
    }

    &:nth-child(even) ${PlanetTextsContainer} {
      top: 0;
      transform: unset;
    }

    &:nth-child(odd) ${PlanetTextsContainer} {
      top: 0;
    }
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
  animation-delay: ${animationTimeouts.disappear}ms;
  background: url(${props => props.background}) repeat-x;
  width: 150px;
  background-size: cover;
  height: 150px;
  position: absolute;
  border-radius: 50%;
  @media(max-width: 600px) {
    min-width: 75px;
    min-height: 75px;
    height: 75px;
    width: 75px;
  }
`;

export const PlanetClouds = styled.div`
  background: url(/clouds.png) repeat-x;
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
  animation: ${translateBackground} 30s infinite linear;
  animation-delay: ${animationTimeouts.disappear}ms;
  opacity: ${props => props.opacity};
  @media(max-width: 600px) {
    height: 75px;
    width: 75px;
    min-width: 75px;
    min-height: 75px;
  }
`;