import {
    PlanetStyle,
    PlanetClouds,
    PlanetBackground,
    PlanetMask,
    PlanetTextsContainer,
    PlanetStyleWithLines, PlanetTitle, PlanetContainer
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

export const PlanetWithLines = ({texts}) => {
    return <PlanetStyleWithLines>
        <PlanetTexts texts={texts}/>
        <PlanetBackground/>
        <PlanetClouds/>
        <PlanetMask/>
    </PlanetStyleWithLines>
};

export const Planet = ({title, onClick}) => {
    return <PlanetContainer
        onClick={() => {
            if (onClick) {
                onClick();
            }
        }}
    >
        <PlanetStyle>
            <PlanetBackground/>
            <PlanetClouds/>
            <PlanetMask/>
        </PlanetStyle>
        <PlanetTitle>
            {title}
        </PlanetTitle>
    </PlanetContainer>
};