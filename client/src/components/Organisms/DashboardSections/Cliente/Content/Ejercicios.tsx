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
import { Link } from "react-router-dom";

function Ejercicios() {
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
            ejercicio: "Ejercicios de Cuerpo Completo",
            descripcion: "",
            icon: <FullBIcon props={{ width: "100%", height: "100%" }} />,
        },
    ];
    return (
        <div className="w-full p-10">
            <div className="flex flex-wrap w-max">
                <div className="flex flex-row gap-10 flex-wrap justify-center">
                    {CardItems.map((d) => (
                        <Link to="">
                            <CardExercises
                                minutos={d.minutos}
                                ejercicio={d.ejercicio}
                                descripcion={d.descripcion}
                                icon={d.icon}
                                key={d.ejercicio}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ejercicios;
