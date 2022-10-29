import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Json from "../../../assets/gym.json";
import { MapPinIcon } from "@heroicons/react/24/outline";

const TrainingsDetails = () => {
    const sedes = Json[0].sedes;
    const { name } = useParams();
    
    const [details, setDetails] = useState({
        name: name,
        image: "https://eurogimnas.com/wp-content/uploads/entrenamiento-funcional-eurogimnas-granollers.jpg",
        description: "Lorem ipsum dolor sit amet, e,  nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n",
        price: 1000,
        sedesIn: [""],
    }); 

    function isInSede(name: any, sedes: any[]){
        let isIn = false;
        let sedesList: string[] = [];
        sedes.forEach((sede) => {
            sede.trainings.forEach((product: { name: string; }) => {
                if(product.name === name){
                    isIn = true;
                }
            })
            if (isIn){
                sedesList.push("Sede "+sede.name.split(" ")[sede.name.split(" ").length-1])
            }
        })
        return sedesList
    }

    useEffect(() => {
        setDetails({
            ...details,
            sedesIn: isInSede(name, sedes)
        })
    }, []);
    
    return (
        <div className="flex flex-col w-custom_3 mb-5 p-4 bg-gray-100">
            <div className="flex flex-row w-max mb-3">
                <div className="w-2/5 flex items-center">
                    <img src={details.image} alt={details.name} />
                </div>
                <div className="w-3/5 flex flex-col p-4 justify-between">
                    <h1 className="w-full mb-10 flex justify-center text-6xl font-sans font-black">{details.name}</h1>
                    <div className="flex flex-col items-center gap-5">
                        <h2 className=" text-2xl font-extrabold text-gray-800">Sedes</h2>
                        <div className="flex gap-1 justify-between flex-wrap">
                            {details.sedesIn.map((sede) => {
                                return (
                                    <div className="flex px-2 justify-between items-center w-custom_4 bg-white  " key={sede}>
                                        <MapPinIcon className="h-10"/>
                                        <p>{sede}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
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
