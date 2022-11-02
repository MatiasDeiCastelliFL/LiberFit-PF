import React from "react";

interface Props {
  title : string
  active: boolean
}

function Item2({title, active}:Props) {
  return (
    <div className="w-max">
      <div className="">
        <div className={`${active? 'bg-red-300 text-white' : 'hover:bg-gray-50 text-black'} flex cursor-pointer items-center justify-between   p-4 `} >
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default Item2;
