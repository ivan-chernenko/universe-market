import {
    PlanetClouds,
    PlanetBackground,
    PlanetMask,
    PlanetTextsContainer,
    PlanetStyleWithLines,
} from './styles';


const PlanetTexts = props => {
    return <PlanetTextsContainer>
        {
            props.texts.map(text => <p
                key={text}
            >
                {text}
            </p>)
        }
    </PlanetTextsContainer>
};

export const PlanetWithLines = ({texts, planetBackground}) => {
    return <PlanetStyleWithLines>
        <PlanetTexts texts={texts}/>
        <PlanetBackground
            background={planetBackground}
        />
        <PlanetClouds/>
        <PlanetMask/>
    </PlanetStyleWithLines>
};