import React from "react";

// background: linear-gradient(180deg, #00FFE0 0%, rgba(28, 136, 237, 0.6) 99.99%, rgba(28, 237, 212, 0) 100%);produco
// linear-gradient(180deg, #D7A301 0%, #E3B735 56.25%, #EA580C 99.99%); maquinas
// background: linear-gradient(180deg, #1AFF3E 0%, #09FF3F 56.25%, #60EA0C 99.99%); clases
//  background: linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%); Ejercicios

interface Props {
    name: string,
    background: React.CSSProperties
}

const FormBanner = ({background, name}:Props) => { 

    return (
        <div className=" w-1/3">
            <div className="flex justify-center items-center font-black rounded-r-custom_1 text-white font-sans text-2xl h-full " style={background}>
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default FormBanner