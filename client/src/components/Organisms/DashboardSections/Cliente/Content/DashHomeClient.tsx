import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../App/Hooks/Hooks";

import oro from "../../../../../Assets/IMG/gold.svg";
import plata from "../../../../../Assets/IMG/silver.svg";
import bronze from "../../../../../Assets/IMG/bronze.svg";


const DashHomeClient = () => {

    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.data);
    const { subscriptions } = useAppSelector((state) => state.data);

    const [subscription , setSubscription] = useState(
        subscriptions.filter((sub:any) => sub.id === user.SubscriptionId)[0]
    )
    
    const today = new Date();

    return(
        <div className="flex flex-col shadow-2xl gap-3 rounded-xl w-custom_6 p-5  bg-redClare text-white mt-10 ">
            <div className="flex gap-5 items-center">
                <h1 className=" text-2xl font-extrabold">Tu subscripción</h1>
                <img src={
                    subscription.name === "Oro" ? oro :
                    subscription.name === "Plata" ? plata :
                    subscription.name === "Bronce" ? bronze : null
                } alt="icon" className="h-10" />
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="h-full fles fles-col justify-center items-center gap-2">
                    <h2>{subscription.name}</h2>
                </div>
                <h3>$ {subscription.price}</h3>
                <h3>{subscription.description}</h3>
                <h3>{subscription.duration} meses</h3>
            </div>
        </div>
    )
}

export default DashHomeClient