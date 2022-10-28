import React from "react";
import {Link } from "react-router-dom";

interface Props {
  width: string
}

function Perfil({width}:Props) {
  return (
    <div className="h-full flex items-center ml-4">
      <Link to="/login">
        <img
          className={`inline-block h-${width} w-${width} rounded-full ring-2 ring-white border border-redGray cursor-pointer`}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </Link>
    </div>
  );
}

export default Perfil;
