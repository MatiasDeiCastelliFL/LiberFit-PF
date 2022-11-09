import React, {useEffect, useState} from "react";

const PaymentCancel = () => {


    // const conf = confirm("Payment Complet")
    // conf ? window.close() : window.history.back()

    // const [confirm, setConfirm] = useState(false)

    
    return (
        <div>
            <h1>PaymentCancel</h1>
            <button onClick={e => window.close()}> Seguro que deseas cancelar el pago?</button>
            <button onClick={e => window.history.back()}> No, quiero volver atras</button>
        </div>
    );
    };

export default PaymentCancel;