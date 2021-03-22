import {useState} from "react";
import {Galaxy} from "../components/galaxy";
import {RoadMap} from "../components/road-map";
import {Explore} from "../components/explore";
import {GALAXY} from "../common";
import {Footer} from "../components/footer";

const Index = () => {
    const [shownState, setShownState] = useState(GALAXY);
    return <>
        <Galaxy
            setShownState={setShownState}
            state={shownState}
        />
        <RoadMap
            state={shownState}
            setShownState={setShownState}
        />
        <Explore
            state={shownState}
            setShownState={setShownState}
        />
        {
            false && <Footer/>
        }
    </>

};

export default Index;
