import React from "react";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";

const MembershipInfo = () => {


    const dispatch = useAppDispatch();

    const { user } = useAppSelector((state) => state.data);
    const { subscriptions } = useAppSelector((state) => state.data);
    const { paymentState } = useAppSelector((state) => state.payment);

    const lastPayment:any = paymentState[paymentState.length - 1];
    const membership = subscriptions.filter((sub:any) => sub.id === user.SubscriptionId)[0];
    console.log("lastPayment", lastPayment);
    const today = new Date();

    const daysLeft = Math.floor((new Date(lastPayment.fechaFinalizacion).getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const datLeftPercent = Math.floor((daysLeft * 100) / (membership.duration*30));
    const cssPercent:React.CSSProperties = {
        width: `${datLeftPercent}%`
    }

    return (
        <div className="w-custom_6 p-5 gap-6 rounded-xl text-white mt-10 justify-between items-start flex flex-col bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-rose-100 via-yellow-400 to-rose-600">
            <div className="flex justify-between w-full items-center">
                <h1 className=" text-lg font-semibold">Plan Actual: {membership.name}</h1>
                <p>$ {lastPayment.amount}</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <h2 className="text-sm font-medium">Días restantes: {daysLeft}</h2>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className={`bg-blue-600 h-2.5 rounded-full`} style={cssPercent}> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembershipInfo