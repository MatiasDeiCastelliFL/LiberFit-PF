import React from "react";
import Style from "./Styles.module.css";

const PriceFilter = () => {

    return (
        <form>
            <div className="flex items-center mb-2">
                <input
                    id="price"
                    name="price"
                    defaultValue=""
                    type="number"
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
                    id="price"
                    name="price"
                    defaultValue=""
                    type="number"
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
                <button className=" w-40 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Filtrar
                </button>
            </div>
    </form>
    );
};

export default PriceFilter;