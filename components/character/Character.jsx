import {CharacterAvatar, CharacterContainer, CharacterText} from "./styles";
import Link from 'next/link'

export const Character = ({avatar, hoveredAvatar, text, onClick, href}) => {
    return <Link
        href={href}
    >
        <CharacterContainer
            onClick={onClick}
        >
            <CharacterAvatar
                hoveredAvatar={hoveredAvatar}
                avatar={avatar}
            />
            <CharacterText>
                {text}x
            </CharacterText>
        </CharacterContainer>
    </Link>
};