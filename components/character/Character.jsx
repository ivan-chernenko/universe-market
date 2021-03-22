import {CharacterAvatar, CharacterContainer, CharacterText} from "./styles";

export const Character = ({avatar, hoveredAvatar, text, onClick}) => {
    return <CharacterContainer
        onClick={onClick}
    >
        <CharacterAvatar
            hoveredAvatar={hoveredAvatar}
            avatar={avatar}
        />
        <CharacterText>
            {text}
        </CharacterText>
    </CharacterContainer>
};