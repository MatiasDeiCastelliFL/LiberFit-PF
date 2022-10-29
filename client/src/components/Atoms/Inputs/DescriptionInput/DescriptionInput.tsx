import React from "react";

const DescriptionInput = () => {

    return (
        <div className="flex justify-center items-center font-black rounded-xl py-2 px-4 text-white font-sans text-xl w-full ml-15">
            <textarea placeholder='Descripción' className="border border-cyan-600 px-2 rounded-xl font-light w-full text-gray-500">
            </textarea>
        </div>
    )
}

export default DescriptionInput