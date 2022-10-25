import React from "react";
import style from "./Card.module.css";
import { useParams } from "react-router-dom";


interface Props {
    data:{
        title: string;
    }
}
const Card = ({data}:Props) => {

    const {category} = useParams();
    
    return (
        <div className={style.container}>
            <h1>{data.title}</h1>
        </div>
    );
    }

export default Card;