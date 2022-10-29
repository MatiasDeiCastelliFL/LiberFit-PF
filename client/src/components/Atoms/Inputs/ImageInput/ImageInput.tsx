import React from "react";
import CreateInput from "../CreateInput/CreateInput";

const ImageInput = () => {

    return (
        <div className="flex flex-col justify-between items-center font-black text-white font-sans text-xl w-full ml-15 gap-4">
            <CreateInput placeholder='Imagen' type="text" />
            <img src="" alt="" className="border h-20 w-40"/>
        </div>
    )
}

export default ImageInput