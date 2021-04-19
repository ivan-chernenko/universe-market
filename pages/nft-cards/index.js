import {Card} from "../../components/card/card";
import {CardLine} from "../../components/card-line/styles";

const Index = () => {
    return <CardLine>
        <Card card='/card1.png' back='/card-back1.png'/>
        <Card card='/card2.png' back='/card-back1.png'/>
        <Card card='/card3.png' back='/card-back1.png'/>
        <Card card='/card4.png' back='/card-back1.png'/>
        <Card card='/card5.png' back='/card-back1.png'/>
        <Card card='/golden-card.png' back='/golden-back.png'/>
    </CardLine>
};

export default Index;