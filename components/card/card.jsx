import {FrontCard, BackCard, CardContainer} from "./styles";

export const Card = props => {
    return <CardContainer>
        <FrontCard card={props.card}/>
        <BackCard back={props.back}/>
    </CardContainer>
};