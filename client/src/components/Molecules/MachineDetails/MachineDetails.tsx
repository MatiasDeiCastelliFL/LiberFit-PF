import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Json from "../../../assets/gym.json";

const MachineDetails = () => {
    const sedes = Json[0].sedes;
    const { name } = useParams();

    
    const [details, setDetails] = useState({
        name: name,
        image: "https://www.rocfit.com/wp-content/uploads/2019/07/maquina-musculacion-hotel-a996.png",
        muscle: "Tren Superior",
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
        <div>
            <div className="flex flex-row w-custom_3 ">
                <div className="w-2/5">
                    <img src={details.image} alt={details.name} />
                </div>
                <div className="w-3/5">
                    <div className=" flex border border-redClare rounded-full w-fit p-2">
                        <MapPinIcon className="h-5"/>
                        <p className=" text-l font-sans font-medium">{details.muscle}</p>
                    </div>
                    <h1 className="w-full mb-10 flex justify-center text-5xl font-sans font-black">{details.name}</h1>
                    <div className="flex flex-col items-center gap-5">
                        <h2 className=" text-2xl font-extrabold text-gray-600">Sedes</h2>
                        <div className="flex gap-1 justify-between flex-wrap">
                            {details.sedesIn.map((sede) => {
                                return (
                                    <div className="flex px-2 justify-between items-center w-custom_4 border border-redClare p-1 " key={sede}>
                                        <MapPinIcon className="h-10"/>
                                        <p>{sede}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MachineDetails;
