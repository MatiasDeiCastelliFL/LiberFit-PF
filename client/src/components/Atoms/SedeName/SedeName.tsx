import React from "react";

import { MapPinIcon } from "@heroicons/react/24/outline";

interface Props {
    name: string;
}

const SedeName = ( { name }:Props ) => {
    
    return (
            <div className="flex px-2 justify-between items-center w-custom_4 bg-white  " key={name}>
                        <MapPinIcon className="h-10"/>
                        <p>{name}</p>
            </div>
    )
}

export default SedeName;