import React, { CSSProperties } from "react";
import style from "./CategoryCard.module.css";

interface Props {
    category: string;
    image: React.CSSProperties;
}

const CategoryCard = ({ category: data, image }: Props) => {
    return (
        <div className={`${style.card}`} style={image}>
            <div className={style.bgCard}>
                <div className="z-50 flex justify-center h-full items-center font-extrabold w-full text-white text-3xl">
                    <h1 className={style.category}>{data}</h1>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
