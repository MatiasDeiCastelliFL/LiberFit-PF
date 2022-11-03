import React from "react";
import Style from "./Styles.module.css";
import {filterProductsByPrice} from "../../../App/Action/FilterActions";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";

const PriceFilter = () => {

    const dispatch = useAppDispatch();
    const {data} = useAppSelector((state) => state);

    const [input, setInput] = React.useState({
        min: 0,
        max: 100000
    })

    const handleInputChange = (e:any) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(filterProductsByPrice(input.min, input.max))
        setInput({
                min: input.min,
                max: input.max
        })
    }

    return (
        <form>
            <div className="flex items-center mb-2">
                <input
                    id="min"
                    name="min"
                    defaultValue=""
                    type="number"
                    onChange={handleInputChange}
                    className={`${Style.input} h-4 w-40 border outline-none p-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                />
                <label
                    htmlFor=""
                    className="ml-3 text-sm text-gray-600"
                >
                    Min
                </label>
            </div>
            <div className="flex items-center mb-2">
                <input
                    id="max"
                    name="max"
                    defaultValue=""
                    type="number"
                    onChange={handleInputChange}
                    className={`${Style.input} h-4 w-40 border outline-none p-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                />
                <label
                    htmlFor=""
                    className="ml-3 text-sm text-gray-600"
                >
                    Max
                </label>
            </div>
            <div className="w-max">
                <button
                    onClick={handleSubmit} 
                className=" w-40 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Filtrar
                </button>
            </div>
    </form>
    );
};

export default PriceFilter;