import React from "react";
import style from "./Style/inputs.module.css";

interface Props {
  placeholder: string;
  span: string;
  option: any;
}

function Select({ placeholder, span, option }: Props) {
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-12 ">{span}</span>
        </div>
        <input
          type="number"
          name="price"
          id="price"
          className={`${style.input} w-full rounded p-2 border border-gray outline-none pl-9 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
          placeholder={placeholder}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option>{option}</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Select;
