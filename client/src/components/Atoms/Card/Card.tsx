import React from "react";
import style from "./Card.module.css";
import { useParams } from "react-router-dom";


interface Props {
    name: any
    image: React.CSSProperties
}
const Card = ({name , image}:Props) => {
    return (
        <div className={`${style.container} text-white mt-2 mb-2 shadow-lg shadow-redClare`} style={image}>
            <div className={style.hoverName}>
                <h1 className={style.name}>
                    {name}
                </h1>
            </div>
        </div>
    );
}

export default Card;