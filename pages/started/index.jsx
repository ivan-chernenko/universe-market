import {GalaxyImage, StartedPageContainer} from '../../styles/started-page.styles';
import {ButtonLink} from "../../components/link";

const Index = () => {
    return <StartedPageContainer>
        <GalaxyImage
            src='/galaxy.png'
        />
        <ButtonLink href='/explore' title='Start explore'/>
    </StartedPageContainer>
};

export default Index;