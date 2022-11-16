import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FiPlay } from "react-icons/fi";
import { AiOutlinePause } from "react-icons/ai";
import Sactive from "../../../assets/Sound/Active.mp3";
import Sinactive from "../../../assets/Sound/Inactive.mp3";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import { getFilterData } from "../../../App/Action/FilterActions";  

const colorLogo = "#FCA5A5";
const redGray = "#FF0055";

function Timer() {

    const dispatch = useAppDispatch()
    const { filter } = useAppSelector((state) => state)
    

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [activo, setActivo] = useState(false);
    const [porcentaje, setPorcentaje] = useState(0);

    let sound = new Audio();
    let sound2 = new Audio();
    sound.src = Sactive;
    sound2.src = Sinactive;

    

    function toggle() {
        if (activo) sound2.play();
        else sound.play();
        setActivo(!activo);
    }

    function reset() {

        if(count !== 0){
            if(count != filter.exercises.length){
               filter.exercises.slice(1);
            }
            setCount(count - 1);
        }

       
        
        setSeconds(59);
        setPorcentaje(0);
        setActivo(false);
    }
    

    useEffect(() => {
        let intervalo: any;
        let secondIntervalo: any;
        dispatch(getFilterData())

        if (activo) {
            intervalo = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);

            secondIntervalo = setInterval(() => {
                porcentaje < 100 &&
                    setPorcentaje(porcentaje + 1.6666666666666667);
            }, 1000);
        }
        if (seconds === 0) {
            reset();
            clearInterval(intervalo);
        }
        return () => {
            clearInterval(intervalo);
            clearInterval(secondIntervalo);
        };
    }, [activo, seconds, minutes,dispatch]);
    const [count , setCount] = useState(filter.exercises.length);

    let second = seconds < 10 ? "0" + seconds : seconds

    console.log(filter.exercises[count]?.name)
    console.log(count)
    

    return (
        <div className="w-full mt-20 select-none grid grid-flow-row-dense grid-cols-12">
            <div className="col-start-5 col-span-3 mb-10">
                <h2 className="text-5xl text-rose-700 text-center">
                    {filter.exercises[count]?.name}
                </h2>
            </div>
            <div className="col-start-5 col-span-3">
                <CircularProgressbar
                    value={porcentaje}
                    text={minutes + ":" + second }
                    styles={buildStyles({
                        textColor: redGray,
                        pathColor: redGray,
                        trailColor: "rgba(241,241,241,.5)",
                    })}
                />
            </div>
            <div className="text-black text-5xl col-span-12 grid grid-cols-12 mt-20">
                <div
                    className="col-start-6 bg-rose-700 m-auto p-5 text-white rounded-full cursor-pointer"
                    onClick={toggle}
                >
                    <span>{activo ? <AiOutlinePause /> : <FiPlay />}</span>
                </div>
            </div>
        </div>
    );
}

export default Timer;
