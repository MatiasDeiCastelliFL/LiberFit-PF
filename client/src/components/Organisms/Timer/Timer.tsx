import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {FiPlay} from 'react-icons/fi'
import {AiOutlinePause} from 'react-icons/ai'

const colorLogo = '#FCA5A5'
const redGray = '#FF0055'

function Timer() {
    const [paused , setPaused] = useState(false)
    const [mode , setMode] = useState('pushups')
    const [seconLeft , setSecondLeft] = useState(0)

    const exercise = ['pushups, sentadilla , diamante']

    const initTimer = () => {
        setSecondLeft( 1 * 60)
    }

    const switchMode = () => {
        const nextExercise = exercise.map(d => d).toString() === 'pushups' ? 'break' : 'pushups'
        const nextSeconds = (nextExercise === 'pushups' ? 1 : 0.1) * 60
        setMode(nextExercise)
        setSecondLeft( nextSeconds)
    }

    const tick = () => {
        setSecondLeft( seconLeft - 1)
    }

    useEffect(() => {
        initTimer()

        setInterval(() => {
            if(paused) return
            if(seconLeft === 0) return switchMode()

            tick()
        },1000)
    })
    return (
        <div className="w-full mt-20 select-none grid grid-flow-row-dense grid-cols-12">
            <div className="col-start-5 col-span-3 mb-10">
                <h2 className="text-5xl text-rose-700 text-center">Push up</h2>
            </div>
            <div className="col-start-5 col-span-3">
               
               <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
                    textColor: redGray,
                    pathColor: redGray,
                    trailColor: 'rgba(241,241,241,.5)',
                })}/>
               
            </div>
            <div className="text-black text-5xl col-span-12 grid grid-cols-12 mt-20 ml-60">
                <div className="col-start-4 bg-rose-700 m-auto p-2 text-white rounded-full">
                    <span >{<FiPlay/>}</span>
                </div>
                <div className="col-start-6  bg-rose-700 m-auto p-2 text-white rounded-full">
                    <span>{<AiOutlinePause/>}</span>
                </div>
            </div>
        </div>
    );
}

export default Timer;
