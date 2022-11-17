import React from "react";
import ArmIcon from "../../Atoms/Icons/ArmIcon";

interface Props{
    minutos: string
    ejercicio: string
    descripcion: string
    icon: any
}

function CardExercises({minutos, ejercicio, descripcion, icon}:Props) {
    return (
        <div className="">
            <div className="relative block rounded border border-gray-100 p-8 shadow-sm hover:shadow-redGray hover:shadow-md">
                <span className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
                    {minutos}
                </span>
                <div className="mt-4 text-gray-500 sm:pr-8">
                    <div className="fles justify-start h-32">
                        {icon}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                        {ejercicio}
                    </h3>
                    <p className="mt-2 hidden text-sm sm:block">
                        {descripcion}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardExercises;
