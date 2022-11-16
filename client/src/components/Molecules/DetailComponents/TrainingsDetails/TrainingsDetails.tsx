import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Json from "../../../../assets/gym.json";
import isInSede from "../../../../App/utils/isInSede";
import { useAppSelector } from "../../../../App/Hooks/Hooks";

import SedesList from "../../SedesList/SedesList";
const TrainingsDetails = () => {
    const sedes = Json[0].sedes;
    const { name } = useParams();

    const {filter}= useAppSelector((state) => state);
    const training = filter.trainigns.find((training:any) => training.name === name);
    const [details, setDetails] = useState({
        name: name,
        image: training.image,
        description: "Lorem ipsum dolor sit amet, e,  nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n",
        price: 1000,
        sedesIn: [""],
    }); 

    useEffect(() => {
        setDetails({
            ...details,
            sedesIn: isInSede(name, sedes, "trainings")
        })
    }, []);
    
    return (
        <div className="flex flex-col w-full mb-5 p-4 bg-gray-100">
            <div className="flex flex-row w-max mb-3">
                <div className="w-2/5 flex items-center">
                    <img src={details.image} alt={details.name} />
                </div>
                <div className="w-3/5 flex flex-col p-4 justify-between">
                    <h1 className="w-full mb-10 flex justify-center text-6xl font-sans font-black">{details.name}</h1>
                    <SedesList sedes={details.sedesIn} />
                </div>
            </div>
            <div className="flex justify-between w-max">
                <div className="w-2/4">
                    <h1 className="text-4xl font-extrabold text-gray-800">Descripción</h1>
                    <p className="text-sm  text-gray-800 text-justify" >{details.description}</p>
                </div>
                <div className="flex flex-col justify-between  w-2/4 items-center">
                    <h1 className="text-4xl font-extrabold text-gray-800">Precio</h1>
                    <p className="text-2xl font-extrabold text-gray-800">$ {details.price}</p>
                </div>
            </div>
        </div>
    );
};

export default TrainingsDetails;
