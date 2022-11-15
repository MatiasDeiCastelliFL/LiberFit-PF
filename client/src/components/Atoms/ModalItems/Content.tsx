import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BsPaypal } from "react-icons/bs";
import { useAppDispatch, useAppSelector} from "../../../App/Hooks/Hooks";
import { postPaymentPaypal } from "../../../App/Action/Action";

function Content() {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state)
    const payload = {
        amount: data.paymentinfo.amount,
        description: data.paymentinfo.description,
        ClientId : data.user.id,
        subscriptionId: data.paymentinfo.subscriptionId,
        token: data.user.token,
    }
    const dispatchAction = () => {
        console.log(payload)
        console.log(data.paymentinfo)
        dispatch(postPaymentPaypal(payload))
    }
    return (
        <div className="w-max max-h-max">
            <div id="paypal-button-container">
                <button className="p-4 border-2 border-slate-100 w-96 bg-blue-600 text-white rounded-lg flex flex-row justify-center text-2xl hover:bg-sky-800" onClick={dispatchAction}>
                    PayPal <BsPaypal />{" "}
                </button>
            </div>
        </div>
    );
}

export default Content;
