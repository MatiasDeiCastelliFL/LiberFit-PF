import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Json from "../../../assets/gym.json";
import { FireIcon } from "@heroicons/react/24/outline";


const ExercisesDetails = () => {
    const { name } = useParams();


    const [details, setDetails] = useState({
        name: name,
        repetition: 12,
        series: 4,
        video: "https://www.youtube.com/embed/-K0vejAHmWg",
        image: "https://images.unsplash.com/photo-1652363722833-509b3aac287b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzIwNTI2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        muscle: "Tren Superior",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae voluptas consequatur sapiente quo voluptates odit temporibus maiores nostrum eveniet assumenda, cumque commodi officia aut quae non, porro asperiores ut!",
        calories: 100,
    }); 

    function getDetails(name: any, Json: any){
        Json[0].exercises.forEach((exercise: { name: string, repetition: number, series: number, video:string, 
                                                muscle: string, description: string, calories: number, image:string }) => {
            if(exercise.name === name){
                setDetails({
                    ...details,
                    name: exercise.name,
                    repetition: exercise.repetition,
                    series: exercise.series,
                    video: exercise.video,
                    image: exercise.image,
                    muscle: exercise.muscle,
                    description: exercise.description,
                    calories: exercise.calories,
                })
            }
        })
    }

    useEffect(() => {
       // setDetails(getExercise(name));
        getDetails(name, Json);
    }, [name]);

    return (
        <div className="flex flex-col w-custom_3 h-max gap-5">
            <div className="flex">
                <div className=" w-2/4 flex justify-center items-center">
                    <h1 className=" text-5xl font-sans font-black text-stone-500">{details.name}</h1>
                </div>
                <img src={details.image} alt={details.name} className=" w-2/4" />
            </div>
            <div className="flex justify-between">
                <div className="bg-redClare p-2 h-fit justify-center items-center flex flex-row w-custom_4">
                    <FireIcon className="h-10"/>
                    <p className=" text-xl  font-black">{details.calories} Cal/h</p>
                </div>
                <div className="bg-redClare p-2 h-fit justify-center items-center flex flex-row w-custom_4">
                    <FireIcon className="h-10"/>
                    <p className=" text-xl  font-black">{details.calories} Cal/h</p>
                </div>
                <div className="bg-redClare p-2 h-fit justify-center items-center flex flex-row w-custom_4">
                    <FireIcon className="h-10"/>
                    <p className=" text-xl  font-black">{details.muscle}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <iframe src={details.video} title={details.name} className="h-96 w-5/12"/>
                <div className="w-7/12 flex p-10 justify-center items-center">
                    <p className=" ">{details.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExercisesDetails;

