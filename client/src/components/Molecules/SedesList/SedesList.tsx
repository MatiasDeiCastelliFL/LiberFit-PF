import React from "react";
import SedeName from "../../Atoms/SedeName/SedeName";

interface Props {
    sedes: string[];
}

const SedesList = ({sedes}:Props) => {

    return (
        <div className="flex flex-col items-center gap-5">
            <h2 className=" text-2xl font-extrabold text-gray-800">Sedes</h2>
            <div className="flex gap-1 justify-between flex-wrap">
                {sedes.map((sede) => {
                    return (
                        <SedeName name={sede} key={sede}/>
                    )
                })}
            </div>
        </div>
    )
}

export default SedesList