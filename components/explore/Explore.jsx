import {ExploreContainer, PlanetLine} from "./styles";
import {Planet} from "../planet";
import {EXPLORE, ROAD_MAP} from "../../common";
import {Transition} from "react-transition-group";
import {animationTimeouts} from "../../common/constants";
import {RocketButton} from "../button";

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
                <PlanetLine>
                    <Planet
                        title='Marketplace'
                    />
                    <Planet
                        title='NTF drops'
                    />
                    <Planet
                        title='NFT token'
                    />
                </PlanetLine>
                <RocketButton
                    onClick={() => setShownState(ROAD_MAP)}
                />
            </ExploreContainer>
        }
    </Transition>
};