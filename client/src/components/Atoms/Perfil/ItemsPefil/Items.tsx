import React from "react";
import style from './items.module.css'

function Items() {
  return (
    <div className="flex h-full items-center ml-4">
      <div className="flex flex-col">
        <p className={`${style.text} text-gray`}>Guest</p>
        <p className={`${style.text2} text-semiRed`}>Register</p>
      </div>
    </div>
  );
}

export default Items;
