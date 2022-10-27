import React from "react";
import Json from "../../../assets/gym.json";
import { BoltIcon } from "@heroicons/react/24/outline";
import gold from "../../../assets/IMG/gold.svg";
import silver from "../../../assets/IMG/silver.svg";
import bronze from "../../../assets/IMG/bronze.svg";

const Plan = () => {
  const subscription = Json[0].subscriptions;

  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <h1 className="tracking-wider font-black font-sans text-51 mb-5 text-gray_custom">
        Membresias Libertfit
      </h1>
      <div className="flex mb-20">
        <BoltIcon className="w-6 h-6" />
        <p className="text-xl">
          Accede a nuestras membresias y disfruta del mejor Gym
        </p>
      </div>
      <div className="flex">
        {subscription.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-semiRed text-white flex flex-col justify-around items-center m-4 p-4 border-2 border-gray-200 rounded-lg w-96 h-custom_3"
            >
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">{item.name}</h1>
              </div>
              <div>
                {item.name === "Oro" ? (
                  <img src={gold} alt="gold" className="w-24 h-24" />
                ) : item.name === "Plata" ? (
                  <img src={silver} alt="silver" className="w-24 h-24" />
                ) : (
                  <img src={bronze} alt="bronze" className="w-24 h-24" />
                )}
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-black ">{item.price}</p>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <p className="text-xl font-bold">{item.description}</p>
              </div>
              <div>
                <button className="bg-white text-redClare p-5 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
