import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Json from "../../../../assets/gym.json";
import { FireIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import muscleIcon from "../../../../assets/IMG/muscle-icon.png";
import { useAppSelector } from "../../../../App/Hooks/Hooks";


const ExercisesDetails = () => {
    const { name } = useParams();
    const { filter } = useAppSelector((state) => state);
    const exercise = filter.exercises.find((exercise:any) => exercise.name === name);

    const [details, setDetails] = useState({
        name: name,
        repetition: exercise.repetition,
        series: exercise.series,
        video: "https://www.youtube.com/embed/-K0vejAHmWg",
        image: "https://images.unsplash.com/photo-1652363722833-509b3aac287b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzIwNTI2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        muscle: exercise.muscle,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae voluptas consequatur sapiente quo voluptates odit temporibus maiores nostrum eveniet assumenda, cumque commodi officia aut quae non, porro asperiores ut!",
        calories: exercise.calories,
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
        <div className="  bg-gray-100 flex flex-col w-custom_3  p-4 h-fit gap-5">
            <div className="flex">
                <div className=" w-2/4 flex justify-center items-center">
                    <h1 className=" text-5xl font-sans font-black text-stone-500">{details.name}</h1>
                </div>
                <img src={details.image} alt={details.name} className=" w-2/4" />
            </div>
            <div className="flex justify-between">
                <div className="bg-redClare p-2 h-fit justify-center items-center flex flex-row w-custom_4">
                    <FireIcon className="h-10 mr-4"/>
                    <p className=" text-xl  font-black">{details.calories} Cal/h</p>
                </div>
                <div className="bg-redClare p-2 h-fit justify-center items-center flex flex-row w-custom_4">
                    <ArrowPathIcon className="h-10 mr-4"/>
                    <div>
                    <p className=" text-sm  font-black">{details.series} Series</p>
                    <p className=" text-sm  font-black">{details.repetition} Repeticiones</p>
                    </div>
                </div>
                <div className="bg-redClare p-2 h-fit justify-center items-center flex flex-row w-custom_4">
                    <img src={muscleIcon} alt="muscle"  className="mr-4 h-10"/>
                    <p className=" text-xl  font-black">{details.muscle}</p>
                </div>
            </div>
            <div className=" flex justify-between">
                <iframe src={details.video} title={details.name} className="mb-5 h-96 w-5/12"/>
                <div className="w-7/12 flex p-10 justify-center items-center">
                    <p className=" ">{details.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExercisesDetails;

