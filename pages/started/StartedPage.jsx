import {GalaxyImage, StartedPageContainer} from './styles';
import {ButtonLink} from "../../components/link";

const StartedPage = () => {
    return <StartedPageContainer>
        <GalaxyImage
            src='/galaxy.png'
        />
        <ButtonLink href='/explore' title='Start explore'/>
    </StartedPageContainer>
};

export default StartedPage;