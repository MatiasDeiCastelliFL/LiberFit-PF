import React from "react";
import style from "./Card.module.css";
import { useParams } from "react-router-dom";


interface Props {
    name: any
    image: React.CSSProperties
}
const Card = ({name , image}:Props) => {
    return (
        <div className={`${style.container} text-white`}>
            <h1>{name}</h1>
        </div>
    );
}

export default Card;