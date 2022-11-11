import React from "react";
import CardExercises from "../../../../Atoms/Card/CardExercises";
import ArmIcon from "../../../../Atoms/Icons/ArmIcon";
import LegIcon from "./../../../../Atoms/Icons/LegIcon";
import AbdIcon from "./../../../../Atoms/Icons/AbdIcon";
import ChestIcon from "./../../../../Atoms/Icons/ChestIcon";
import BackIcon from "./../../../../Atoms/Icons/BackBIcon";
import TorsoIcon from "./../../../../Atoms/Icons/TorsoIcon";
import NeckIcon from "./../../../../Atoms/Icons/NeckIcon";
import FullBIcon from "./../../../../Atoms/Icons/FullBIcon";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardCreation from '../../../../Atoms/Card/CardCreation';

export default function Ejercicios({ link }: any) {
    let location = useLocation();
    const user = location.pathname.split('/').slice(2,3)
    console.log('file: Ejercicios.tsx ~ line 17 ~ Ejercicios ~ user', user)
    const params = useParams();
   
    const CardItems = [
        {
            minutos: "5 min",
            ejercicio: "Ejercicios de brazo",
            descripcion: "",
            icon: <ArmIcon props={{ width: "20%", height: "100%" }} />,
        },
        {
            minutos: "5 min",
            ejercicio: "Ejercicios de Pierna",
            descripcion: "",
            icon: <LegIcon props={{ width: "20%", height: "100%" }} />,
        },
        {
            minutos: "5 min",
            ejercicio: "Ejercicios de Torso",
            descripcion: "",
            icon: <TorsoIcon props={{ width: "100%", height: "100%" }} />,
        },
        {
            minutos: "5 min",
            ejercicio: "Ejercicios de Pecho",
            descripcion: "",
            icon: <ChestIcon props={{ width: "100%", height: "100%" }} />,
        },
        {
            minutos: "5 min",
            ejercicio: "Ejercicios de Espalda",
            descripcion: "",
            icon: <BackIcon props={{ width: "100%", height: "100%" }} />,
        },
        {
            minutos: "5 min",
            ejercicio: "Ejercicios de Abdomen",
            descripcion: "",
            icon: <AbdIcon props={{ width: "100%", height: "100%" }} />,
        },
        {
            minutos: "5 min",
            ejercicio: "Ejercicios de Cuello",
            descripcion: "",
            icon: <NeckIcon props={{ width: "100%", height: "100%" }} />,
        },
        {
            minutos: "5 min",
            ejercicio: "Ejercicios full body",
            descripcion: "",
            icon: <FullBIcon props={{ width: "100%", height: "100%" }} />,
        },
    ];
    const parametro = CardItems.map(d => d.ejercicio.split(" ").slice(-1))
    
    return (
        <div className="w-full p-10">
            <div className="flex flex-wrap w-max">
                <div className="flex flex-row gap-10 flex-wrap ">
                    {CardItems.map((d) => (
                        <Link
                            to={`/dashboard/${user}/ejercicios/${d.ejercicio
                                .split(" ")
                                .slice(-1)}`}

                            className="m-5 xl:w-96 lg:w-max"
                        >
                            <CardExercises
                                minutos={d.minutos}
                                ejercicio={d.ejercicio}
                                descripcion={d.descripcion}
                                icon={d.icon}
                                key={d.ejercicio}
                            />
                        </Link>
                    ))}
                    {user[0] === 'admin' && <CardCreation item={ 'Ejercicio' } />}
                </div>
            </div>
        </div>
    );
}
