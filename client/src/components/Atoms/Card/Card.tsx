import React from "react";
import style from "./Card.module.css";
import { useParams } from "react-router-dom";


interface Props {
    name: any
    image: React.CSSProperties
    muscle?: string
}
const Card = ({name , image, muscle}:Props) => {
    return (
        <div className={`${style.container} p-0 justify-center shadow-lg shadow-redClare`}>
            <div className={`${style.image} border text-white mb-2 shadow`} style={image}></div>
            <h1 className="text-center text-black font-bold text-xl">{name}</h1>
            <hr />
            {muscle?
                        <h1 className="text-center text-black font-medium text-xl">{muscle}</h1>
            : null}
        </div>

    );
}

export default Card;