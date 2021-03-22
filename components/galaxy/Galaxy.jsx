import {Button} from "../button";
import {GalaxyImage, StartedPageContainer} from "./styles";
import {Transition} from 'react-transition-group';
import {EXPLORE, GALAXY} from "../../common";
import {animationTimeouts} from "../../common/constants";

export const Galaxy = ({setShownState, state}) => {
    return <Transition
        in={state === GALAXY}
        timeout={animationTimeouts.disappear}
        unmountOnExit
    >
        {
            status => <StartedPageContainer
                status={status}
            >
                <GalaxyImage
                    src='/logo.png'
                />
                <Button
                    onClick={() => setShownState(EXPLORE)}
                >
                    Start explore
                </Button>
            </StartedPageContainer>
        }
    </Transition>
};