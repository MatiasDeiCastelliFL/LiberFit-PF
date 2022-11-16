import React,{useState} from "react";
import Json from "../../../assets/gym.json";
import { BoltIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import gold from "../../../assets/IMG/gold.svg";
import silver from "../../../assets/IMG/silver.svg";
import bronze from "../../../assets/IMG/bronze.svg";
import { useAppDispatch, useAppSelector } from './../../../App/Hooks/Hooks';
import { openModal, getInitilizePayment } from "../../../App/Action/Action";


const Plan = () => {
  // const subscription = Json[0].subscriptions;
  const dispatch = useAppDispatch()
  const { modal } = useAppSelector((state) => state);
  const { data } = useAppSelector((state) => state);
  const { subscriptions } = data;


  const modalOpen = (e:any) => {
    e.preventDefault();
    console.log(e.target.value)
    const amount = e.target.value.split(",")[0];
    const description = e.target.value.split(",")[1];
    const id = e.target.value.split(",")[2];
    console.log(amount, description, id)
    dispatch(getInitilizePayment({amount, description, id}))
    dispatch(openModal(true))
  }

  console.log(modal.open)

  return (
    <div className="flex flex-col justify-center items-center flex-wrap">
      <h1 className="tracking-wider font-black font-sans text-51 mb-5 text-gray_custom">
        Membresias Libertfit
      </h1>
      <div className="flex mb-20">
        <BoltIcon className="w-6 h-6" />
        <p className="text-xl">
          Accede a nuestras membresias y disfruta del mejor Gym
        </p>
      </div>
      <div className="flex gap-24">
        {subscriptions.map((item: { name: string | any; price: string | number | any ; description: string | number | any ; id: any },i: React.Key | null | undefined) => {
          return (
            item.name === 'No Suscripto' ? null:
            <div
              key={i}
              className="bg-semiRed text-white flex flex-col justify-around items-center p-4 border-2 border-gray-200 rounded-lg w-96 xl:w-72 lg:w-60 lg:h-96 2xl:w-96 2xl:h-custom_3"
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
                <p className="text-2xl font-black ">$ {item.price}</p>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <p className="text-xl font-bold">{item.description}</p>
              </div>
              <div>
                <button 
                className={`${data.user.token ? null : "hidden"} bg-white text-redClare p-5 rounded-lg`} value={[item.price, item.description, item.id]} onClick={modalOpen}>
                  Subscribirse
                </button >
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
