import React from "react";
import Cookies from "universal-cookie";

interface Props {
    message: string;
}

const WelcomeCard = ({message}:Props) => {
    const cookies = new Cookies();
    return(
        <div className='flex flex-col gap-2 w-payment_table font-sans '>
            <h1 className='font-black text-2xl'>
                {`Hola, ${cookies.get("name")}!`}
            </h1>
            <h2 className=' text-gray-400 font-bold text-xl'>
                {message}
            </h2>
        </div>
    )
}

export default WelcomeCard
