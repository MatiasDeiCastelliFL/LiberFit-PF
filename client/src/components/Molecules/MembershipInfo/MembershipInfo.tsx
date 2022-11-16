import React, { useEffect } from "react";
import { getPaymentInfo } from "../../../App/Action/FilterActions";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import Cookies from "universal-cookie";
import { getSuscriptions } from "../../../App/Action/Action";


const MembershipInfo = () => {


    const dispatch = useAppDispatch();
    const cookies = new Cookies();
    const { user } = useAppSelector((state) => state.data);
    const { subscriptions } = useAppSelector((state) => state.data);
    const { paymentState } = useAppSelector((state) => state.payment);

    const [lastPayment, setLastPyment] =  React.useState<any>(paymentState[paymentState.length - 1]);
    const [daysLeft, setDaysLeft] = React.useState<any>();
    const [cssPercentage, setCssPercentage] = React.useState<any>();
    const [membership, setMembership] = React.useState(subscriptions[0]);
    const [rerender, setRerender] = React.useState(false);

    React.useEffect(() => {
        dispatch(getPaymentInfo(cookies.get("id"), cookies.get("token")));
        if (lastPayment) {
            setMembership(subscriptions.filter((sub:any) => sub.id === user.SubscriptionId)[0]);
            const today = new Date();
            console.log(today);
            setDaysLeft(Math.floor((new Date(lastPayment.fechaFinalizacion).getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
            const datLeftPercent = Math.floor((daysLeft * 100) / (membership.duration*30));
            setCssPercentage({
                width: `${datLeftPercent}%`
            })
        }else{
            console.log("no hay pagos");
            setLastPyment(paymentState[paymentState.length - 1]);
            setRerender(!rerender)
        }

    }, [])
    

    useEffect(() => {
        console.log("useEffect");
        if (lastPayment) {
            setMembership(subscriptions.filter((sub:any) => sub.id === user.SubscriptionId)[0]);
            const today = new Date();
            console.log(today);
            setDaysLeft(Math.floor((new Date(lastPayment.fechaFinalizacion).getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
            const datLeftPercent = Math.floor((daysLeft * 100) / (membership.duration*30));
            setCssPercentage({
                width: `${datLeftPercent}%`
            })
        }
    }, [lastPayment])

    return (
        <div className="w-custom_6">
            {
                membership && (
                        (lastPayment && daysLeft && cssPercentage) 
                        ? 
                            <div className="p-5 gap-6 rounded-xl text-white justify-between items-start flex flex-col bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-rose-100 via-yellow-400 to-rose-600">
                                <div className="flex justify-between w-full items-center">
                                    <h1 className=" text-lg font-semibold">Plan Actual: {membership.name}</h1>
                                    <p>$ {lastPayment.amount}</p>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <h2 className="text-sm font-medium">Días restantes: {daysLeft}</h2>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className={`bg-blue-600 h-2.5 rounded-full`} style={cssPercentage}> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        :
                            <div>
                                <div className="flex justify-between w-full items-center ">
                                    <h1 className=" text-lg font-semibold">Plan Actual: {membership.name}</h1>
                                </div>
                            </div>
                )
            }
        </div>
    )
}

export default MembershipInfo