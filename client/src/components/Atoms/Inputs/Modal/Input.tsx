import React from "react";
import style from "./Style/inputs.module.css";

interface Props {
    type: string;
    placeholder: string;
    values: string | number
    onChange: any;
    names: any
}

function Input({ type, placeholder, values, onChange , names}: Props) {
    return (
        <input
            className={`${style.input} w-full p-2 rounded-md border outline-none border-gray pl-9 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            type={type}
            placeholder={placeholder}
            value={values}
            onChange={onChange}
            name = {names}

        />
    );
}

export default Input;
