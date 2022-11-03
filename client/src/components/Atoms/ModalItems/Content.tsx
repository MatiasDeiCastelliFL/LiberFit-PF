import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Content() {
    function renderPaypalButton() {
        paypal
            .Buttons({
                createOrder: function (data: any, actions: any) {
                    // Set up the transaction
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "0.10",
                                },
                            },
                        ],
                    });
                },
            })
            .render("#paypal-button-container");
    }

    useEffect(() => {
        renderPaypalButton()
    },[])
    return (
        <div className="w-max max-h-max">
            <div id="paypal-button-container"></div>
        </div>
    );
}

export default Content;
