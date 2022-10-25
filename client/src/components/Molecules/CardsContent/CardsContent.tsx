import React from "react";
import style from "./CardsContent.module.css";
import { Link, Route, Routes, useParams } from "react-router-dom";

import CategoryCard from "../../Atoms/CategoryCard/CategoryCard";
import Card from "../../Atoms/Card/Card";

import maquinas from "../../../assets/IMG/fondo-maquinas.png";
import clases from "../../../assets/IMG/fondo-clases.png";
import productos from "../../../assets/IMG/fondo-productos.png"


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

    const {category} = useParams();


    return (
        <div>
            <div className={style.container}>
                    {
                        data.map((item) => {
                            return <Link to={`/home/${item.category}`}> <CategoryCard data={item} /> </Link>
                        })
                    }
            </div>
        </div>
    )
}

export default CardsContent;