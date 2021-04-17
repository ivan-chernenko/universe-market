import {RocketButton, Timer} from "./Button";
import {useEffect, useRef, useState} from "react";

const formatDate = (value) => {
    const days = Math.floor(value / (24 * 60 * 60 * 1000));
    const hours = Math.floor((value - days * 24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    const minutes = Math.floor((value - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) / (60 * 1000));
    const seconds = Math.floor((value - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000);
    return `0${days}:${hours >= 10 ? hours : `0${hours}`}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`
};

export const RocketButtonC = () => {
    const [time, setTime] = useState(+new Date(2021, 3, 19, 17) - Date.now());
    const timerRef = useRef(0);
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTime(time - 1000)
        }, 1000);
        return () => clearInterval(timerRef.current);
    }, [time]);
    return <>
        <Timer>
            {formatDate(time)}
        </Timer>
        <RocketButton/>
    </>
};