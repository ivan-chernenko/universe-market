import {RoadMapContainer, Header, PlanetLine} from "./styles";
import {PlanetWithLines} from "../planet";
import {EXPLORE, ROAD_MAP} from "../../common";
import {Transition} from "react-transition-group";
import {animationTimeouts} from "../../common/constants";
import {RocketButton} from "../button";

export const RoadMap = ({state, setShownState}) => {
    return <Transition
        in={state === ROAD_MAP}
        timeout={animationTimeouts.disappear}
        mountOnEnter
        unmountOnExit
        appear
    >
        {
            (status) => <RoadMapContainer
                status={status}
            >
                <Header>
                    QUARTER 1 and 2, 2021
                </Header>
                <PlanetLine>
                    <PlanetWithLines
                        texts={[
                            'Advertising company',
                            'Partnerships with third-party projects',
                            'Presale round',
                            'Community outreach',
                        ]}
                        opacity={0}
                        planetBackground='/milk-planet.jpg'
                    />
                    <PlanetWithLines
                        texts={[
                            'Orbit marketplace launch',
                            'NFT and ORT distribution',
                            'First NFT cards drop',
                            'Listing on Uniswap',
                        ]}
                        opacity={0.4}
                        planetBackground='/galaxy-planet.jpg'
                    />
                    <PlanetWithLines
                        texts={[
                            'Layer 2 protocol implementation',
                            'Integration with different NFT project',
                        ]}
                        planetBackground='/fire-planet.jpg'
                        opacity={0}
                    />
                    <PlanetWithLines
                        texts={[
                            'Orbit NFT events',
                            'First NFT projects launch',
                        ]}
                        planetBackground='/red-planet.jpeg'
                        opacity={0.4}
                    />
                    <PlanetWithLines
                        texts={[
                            'TBA',
                        ]}
                        planetBackground='/temperature-planet.jpg'
                        opacity={0.8}
                    />
                </PlanetLine>
                <RocketButton
                    onClick={() => setShownState(EXPLORE)}
                />
            </RoadMapContainer>
        }
    </Transition>
};