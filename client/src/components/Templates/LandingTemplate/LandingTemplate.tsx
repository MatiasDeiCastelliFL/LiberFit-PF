import React from "react";
import Styles from "./Styles/landing.module.css";
import Landing from "./../../../page/Landing/Landing";
import Elipse from "../../../assets/IMG/Elipse.png";
import Person from "../../../assets/IMG/Person.png";
import { Link } from "react-router-dom";

function LandingTemplate() {
  return (
    <div className="bg-landing w-max h-screen object-cover bg-cover select-none ">
        <div className="z-50">
            <div className=" flex justify-center">
                <div className="mt-72 absolute z-0">
                    <img src={Elipse} alt="Elipse" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingTemplate;
