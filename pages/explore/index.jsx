import {ExploreContainer, Header, PlanetLine} from "../../styles/explore-page.styles";
import {Planet} from "../../components/planet";

const Index = () => {
    return <ExploreContainer>
        <Header>
            QUARTER 1 and 2, 2021
        </Header>
        <PlanetLine>
            <Planet
                texts={[
                    'Advertising company',
                    'Partnerships with third-party projects',
                    'Presale round',
                    'Community outreach',
                ]}
            />
            <Planet
                texts={[
                    'Orbit marketplace launch',
                    'NFT and ORT distribution',
                    'First NFT cards drop',
                    'Listing on Uniswap',
                ]}
            />
            <Planet
                texts={[
                    'Layer 2 protocol implementation',
                    'Integration with different NFT project',
                ]}
            />
            <Planet
                texts={[
                    'Orbit NFT events',
                    'First NFT projects launch',
                ]}
            />
            <Planet
                texts={[
                    'TBA',
                ]}
            />
        </PlanetLine>
    </ExploreContainer>;
};

export default Index;