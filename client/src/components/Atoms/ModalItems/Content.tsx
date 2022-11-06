import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BsPaypal } from "react-icons/bs";

function Content() {
    return (
        <div className="w-max max-h-max">
            <div id="paypal-button-container">
                <button className="p-4 border-2 border-slate-100 w-96 bg-blue-600 text-white rounded-lg flex flex-row justify-center text-2xl hover:bg-sky-800">
                    PayPal <BsPaypal />{" "}
                </button>
            </div>
        </div>
    );
}

export default Content;
