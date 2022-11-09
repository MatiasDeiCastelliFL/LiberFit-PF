import React, {useEffect} from "react";

const PaymentComplet = () => {


    const conf = confirm("Payment Complet")
    conf ? window.close() : window.history.back()
    
    return (
        <div>
        <h1>PaymentComplet</h1>
        </div>
    );
    };

export default PaymentComplet;