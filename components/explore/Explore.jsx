import {ExploreContainer, CharactersLine, ButtonsContainer} from "./styles";
import {EXPLORE, ROAD_MAP} from "../../common";
import {Transition} from "react-transition-group";
import {animationTimeouts} from "../../common/constants";
import {Character} from "../character/Character";
import {RocketButtonC} from "../button/rocket-button";
import {TelegramLink} from "../telegram";
import {WhitePaperLink} from "../white-paper";
import {Button} from "../button";

const characters = [
    {
        common: '/gangsta.png',
        hovered: '/gangsta-hovered.png',
        text: 'Marketplace',
        onClick: () => {
            window.location.href = '/market';
        }
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
                <ButtonsContainer>
                    <Button
                        onClick={() => setShownState(ROAD_MAP)}
                    >
                        Roadmap
                    </Button>
                    <Button
                        margin={true}
                    >
                        Become a partner
                    </Button>
                </ButtonsContainer>
                <CharactersLine>
                    {
                        characters.map(character => <Character
                            avatar={character.common}
                            hoveredAvatar={character.hovered}
                            onClick={character.onClick}
                            text={character.text}
                            key={character.common}
                        />)
                    }
                </CharactersLine>
                <RocketButtonC
                    onClick={() => {}}
                />
                <TelegramLink/>
                <WhitePaperLink/>
            </ExploreContainer>
        }
    </Transition>
};