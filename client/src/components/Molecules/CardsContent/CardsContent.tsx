import React from "react";
import style from "./CardsContent.module.css";
import { Link, Route, Routes } from "react-router-dom";

import CategoryCard from "../../Atoms/CategoryCard/CategoryCard";
import Card from "../../Atoms/Card/Card";

import maquinas from "../../assets/fondo-maquinas.png";
import clases from "../../assets/fondo-clases.png";
import productos from "../../assets/fondo-productos.png";


const CardsContent = () => {

    const data = [
        {
            category: 'Maquinas',
            image: maquinas,
        },
        {
            category: 'Clases',
            image: clases,
        },
        {
            category: 'Productos',
            image: productos,
        },
    ]


    return (
        <Routes>
            <Route path="/" element = 
                <div className={style.container}>
                    {
                        data.map((item) => {
                            return <Link to={`/${item.category}`}> <CategoryCard data={item} /> </Link>
                        })
                    }
                </div> />
            <Route path="/:category" element={<Card />} />
        </Routes>
    );
}

export default CardsContent;