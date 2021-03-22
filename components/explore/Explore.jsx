import {ExploreContainer, CharactersLine} from "./styles";
import {EXPLORE, ROAD_MAP} from "../../common";
import {Transition} from "react-transition-group";
import {animationTimeouts} from "../../common/constants";
import {RocketButton} from "../button";
import {Character} from "../character/Character";

const characters = [
    {
        common: '/gangsta.png',
        hovered: '/gangsta-hovered.png',
        text: 'Marketplace'
    },
    {
        common: '/smoker.png',
        hovered: '/smoker-hovered.png',
        text: 'NFT drops',
    },
    {
        common: '/football-fan.png',
        hovered: '/football-fan-hovered.png',
        text: 'NFT tokens',
    },
];

export const Explore = ({state, setShownState}) => {
    return <Transition
        in={state === EXPLORE}
        timeout={animationTimeouts.disappear}
        unmountOnExit
        mountOnEnter
    >
        {
            (status) => <ExploreContainer
                status={status}
            >
                <CharactersLine>
                    {
                        characters.map(character => <Character
                            avatar={character.common}
                            hoveredAvatar={character.hovered}
                            onClick={() => {}}
                            text={character.text}
                            key={character.common}
                        />)
                    }
                </CharactersLine>
                <RocketButton
                    onClick={() => setShownState(ROAD_MAP)}
                />
            </ExploreContainer>
        }
    </Transition>
};