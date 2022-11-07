import React from "react";
import {Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAuth0 } from "@auth0/auth0-react";




interface Props {
  width: string
}

function Perfil({width}:Props) {
  const cookies = new Cookies();
  const { user } = useAuth0();
  return (
    <div className="h-full flex items-center ml-4">
        <img
          className={`inline-block h-${width} w-${width} rounded-full ring-2 ring-white border border-redGray `}
         
          src={ cookies.get('image') || user?.picture ? cookies.get('image') || user?.picture :  "https://lh3.googleusercontent.com/-5wrzx0S6Dlo/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd5-UYFTMAPPwq2-0596kcIYASp6Q/photo.jpg"}
        />
    </div>
  );
}

export default Perfil;
