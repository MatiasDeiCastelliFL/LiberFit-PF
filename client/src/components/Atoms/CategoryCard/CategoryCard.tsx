import React from "react";
import style from "./CategoryCard.module.css";


interface Props {
    data:{
        category: string;
        image: string;
    }
}

const CategoryCard = ({data}:Props) => {

    return (
        <div className={style.card}>
            <div className="flex justify-center h-full items-center font-extrabold text- w-full">
                <h1 className={style.category}>{data.category}</h1>
            </div>
            <img src={data.image} alt={data.category} className={style.image}/>
        </div>
    );
};

export default CategoryCard;