import React, {useEffect, useRef} from "react"
import emailjs from "emailjs-com"
import toast,{ Toaster } from 'react-hot-toast';

const PaymentComplet = () => {

    useEffect(() => {
        toast.success("Gracias por su confiar en LiberFit, su pago ha sido completado con exito",
        {
            duration: 3000,
            position: "top-center",
        })
        setTimeout(() => {
            window.close()
        }, 5000);
    }, [])

    return (
        <div>
            <Toaster />
        </div>
    );
}

export default PaymentComplet;