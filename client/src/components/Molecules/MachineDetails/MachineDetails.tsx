import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Json from "../../../assets/gym.json";
import muscleIcon from "../../../assets/IMG/muscle-icon.png";

const MachineDetails = () => {
    const sedes = Json[0].sedes;
    const { name } = useParams();

    
    const [details, setDetails] = useState({
        name: name,
        image: "https://www.rocfit.com/wp-content/uploads/2019/07/maquina-musculacion-hotel-a996.png",
        muscle: "Tren Superior",
        description: "Lorem ipsum dolor sit amet,  eget aliquam nisl nisl eu nunc. Nulla facilisi  eget aliquam nisl nisl eu nunc. Nulla facilisi. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n nisl vitae ultricies lacinia, nisl nisl aliquet n",
        sedesIn: [""],
    }); 

    function isInSede(name: any, sedes: any[]){ 
        let isIn = false;
        let sedesList: string[] = [];
        sedes.forEach((sede) => {
            sede.machines.forEach((machine: { name: string; }) => {
                if(machine.name === name){
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
        <div className="w-custom_3 p-4 mb-5  bg-gray-100">
            <div className="mb-5 gap-5 items-center flex flex-row w-max ">
                <div className="w-2/5">
                    <img src={details.image} alt={details.name} />
                </div>
                <div className=" bg-gray-100 p-4 w-3/5">
                    <div className=" flex border border-redClare rounded-full items-center w-fit p-2">
                        <img src={muscleIcon} alt="ico" className="h-5 mr-2"/>
                        <p className=" text-l font-sans font-medium">{details.muscle}</p>
                    </div>
                    <h1 className="w-full mb-10 flex justify-center text-5xl font-sans font-black">{details.name}</h1>
                    <div className="flex flex-col items-center gap-5">
                        <h2 className=" text-2xl font-extrabold text-gray-600">Sedes</h2>
                        <div className="flex gap-1 justify-between flex-wrap">
                            {details.sedesIn.map((sede) => {
                                return (
                                    <div className="flex px-2 justify-between items-center w-custom_4 border p-1 " key={sede}>
                                        <MapPinIcon className="h-10"/>
                                        <p>{sede}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-max gap-5">
                <div className="w-2/4">
                    <h1 className="text-3xl font-sans font-black text-gray-600 mb-5">Descripción</h1>
                    <p className="text-gray-600 text-justify">{details.description}</p>
                </div>
                <div className="flex flex-col w-2/4 justify-start">
                    <h1 className="text-3xl font-sans font-black text-gray-600 mb-5">Ejercicios</h1>
                    <div className="flex flex-wrap gap-5">
                            <p className=" border rounded-full p-2 w-fit">musculo 1</p>
                            <p className=" border rounded-full p-2 w-fit">musculo 2</p>
                            <p className=" border rounded-full p-2 w-fit">musculo 3</p>
                            <p className=" border rounded-full p-2 w-fit">musculo 4</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MachineDetails;
