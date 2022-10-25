import React from "react";
import Styles from "./Styles/landing.module.css";
import Landing from "./../../../page/Landing/Landing";
import Elipse from "../../../assets/IMG/Elipse.png";
import Person from "../../../assets/IMG/Person.png";
import { Link } from "react-router-dom";

function LandingTemplate() {
  return (
    <div className="bg-landing w-max h-max object-cover bg-cover z-0 select-none">
      <div className="z-50">
        <div className="flex justify-center">
          <div className="mt-72 absolute z-0">
            <img src={Elipse} alt="Elipse" />
          </div>
          <div className="z-10 mt-28 absolute">
            <img src={Person} alt="" />
          </div>
          <div className="container z-20">
            <span className="w-custom_1 h-custom_1 bg-redGray  translate-y-custom absolute left-custom"></span>
          </div>

          <div className="container z-30">
            <Link to="/home">
              <span className="w-custom_2 h-custom_2 bg-redClare translate-y-custom_2 absolute left-custom_2">
                <div className={Styles.title}>
                  <h2 className="font-poppins font-extrabold">CLICK</h2>
                </div>
              </span>
            </Link>
          </div>

          <div className="font-poppins font-extrabold text-90 z-50">
            <p className="absolute left-custom_3 translate-y-custom_3">TU</p>
            <p className="absolute left-custom_4 translate-y-custom_4">MUNDO</p>
            <p className="absolute left-custom_5 translate-y-custom_5">
              FIT<span className="text-redClare">NES</span>
            </p>
            <p className="absolute left-custom_6 translate-y-custom_6 text-51">
              A UN SOLO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingTemplate;
