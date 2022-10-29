import React from "react";

// background: linear-gradient(180deg, #00FFE0 0%, rgba(28, 136, 237, 0.6) 99.99%, rgba(28, 237, 212, 0) 100%);produco
// linear-gradient(180deg, #D7A301 0%, #E3B735 56.25%, #EA580C 99.99%); maquinas
// background: linear-gradient(180deg, #1AFF3E 0%, #09FF3F 56.25%, #60EA0C 99.99%); clases
//  background: linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%); Ejercicios

interface Props {
    background: React.CSSProperties
}

const AddButton = ({background}:Props) => {

    return (
        <div className="flex justify-center items-center font-black rounded-full py-1 px-3 text-white font-sans text-xl w-fit ml-15" style={background}>
            <input type="button" value='Añadir' />
        </div>
    )
}

export default AddButton