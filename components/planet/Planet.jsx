import {PlanetStyle, PlanetClouds, PlanetBackground, PlanetMask, PlanetTextsContainer} from './styles';


const PlanetTexts = props => {
  return <PlanetTextsContainer>
      {
        props.texts.map(text => <p>
            {text}
        </p>)
      }
  </PlanetTextsContainer>
};

export const Planet = props => {
    return <PlanetStyle>
        <PlanetTexts texts={props.texts}/>
        <PlanetBackground/>
        <PlanetClouds/>
        <PlanetMask/>
    </PlanetStyle>
};