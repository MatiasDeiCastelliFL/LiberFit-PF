import React, { CSSProperties } from "react";
import style from "./CategoryCard.module.css";

interface Props {
    category: string;
    image: React.CSSProperties;
}

const CategoryCard = ({ category: data, image }: Props) => {
    return (
        <div className={`${style.card} xl:w-52 lg:w-48 2xl:w-2xl`} style={image}>
            <div className={style.bgCard}>
                <div className="z-50 flex justify-center h-full items-center font-extrabold w-full text-white text-3xl">
                    <h1 className={style.category}>{data}</h1>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
