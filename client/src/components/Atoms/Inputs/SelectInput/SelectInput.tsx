import React from "react";

interface Props {
    options: string[]
}

const SelectInput = ({options}:Props) => {

    return (
        <div className="flex justify-center items-center  rounded-full py-1 px-4 font-light font-sans text-xl w-full ml-15">
            <select name="" id="" className="border border-cyan-600 rounded-full font-light w-full px-2 text-gray-500">
                {
                    options.map((option, index) => {
                        return <option value={option} key={index} className='text-gray-500'>{option}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectInput