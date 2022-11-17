import React from "react";
import Styles from "./Styles/landing.module.css";
import Landing from "./../../../page/Landing/Landing";
import Elipse from "../../../assets/IMG/Elipse.png";
import Person from "../../../assets/IMG/Person.png";
import { Link } from "react-router-dom";

function LandingTemplate() {
  return (
    <div className={`${Styles.landing} w-max h-max xl:h-screen object-cover bg-cover select-none overflow-hidden`}>
      <div className="z-50 2xl:ml-0 lg:ml-10">
        <div className="flex justify-center">
          <div className="2xl:mt-72 xl:mt-54 lg:mt-60 flex justify-center  xl:w-custom_3 absolute z-0 ">
            <img src={Elipse} alt="Elipse" />
          </div>
          <div className="z-10 2xl:mt-28 xl:mt-14 2xl:w-max flex justify-center xl:w-custom_3 absolute lg:mt-12">
            <img src={Person} alt="person" />
          </div>
          <div className="z-30 xl:translate-y-xl xl:translate-x-xxl 2xl:translate-y-0 2xl:translate-x-0 xl2:translate-x-xxl2   w-full">
          <div className="container z-20">
            <span className="w-custom_1 h-custom_1 bg-redGray  2xl:translate-y-custom absolute 2xl:left-custom lg:translate-y-lg_mobile_6 lg:left-mobile_6 xl:left-mobile_12 xl:translate-y-mobile_6"></span>
          </div>

          
          <div className="container ">
            <Link to="/home">
              <span className=" w-custom_2 h-custom_2 bg-redClare 2xl:translate-y-custom_2 absolute 2xl:left-custom_2 lg:translate-y-mobile_5 lg:left-mobile_5 xl:left-mobile_11 xl:translate-y-mobile_8">
                <div className={Styles.title}>
                  <h2 className="font-poppins font-extrabold text-white">
                    CLICK
                  </h2>
                </div>
              </span>
            </Link>
          </div>

          <div className="font-poppins font-extrabold text-90 z-50 text-white">
            <p className="absolute 2xl:left-custom_3 2xl:translate-y-custom_3 lg:translate-y-lg_mobile_1 lg:left-mobile_1 xl:left-xl_l xl:text-80 xl:translate-y-mobile_1">TU</p>
            <p className="absolute 2xl:left-custom_4 2xl:translate-y-custom_4 lg:translate-y-mobile_2 lg:left-mobile_2 xl:left-xl xl:text-80 xl:translate-y-mobile_7">MUNDO</p>
            <p className="absolute 2xl:left-custom_5 2xl:translate-y-custom_5 lg:translate-y-lg_mobile_3 lg:left-mobile_3 xl:left-mobile_9 xl:translate-y-mobile_3">
              FIT<span className="text-redClare">NES</span>
            </p>
            <p className="absolute 2xl:left-custom_6 2xl:translate-y-custom_6 text-51 lg:translate-y-lg_mobile_4 lg:left-mobile_4 xl:left-mobile_10 xl:translate-y-mobile_4">
              A UN SOLO
            </p>
          </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default LandingTemplate;
