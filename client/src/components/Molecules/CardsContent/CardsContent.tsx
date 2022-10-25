import React from "react";
import style from "./CardsContent.module.css";
import { Link, Route, Routes } from "react-router-dom";

import CategoryCard from "../../Atoms/CategoryCard/CategoryCard";
import Card from "../../Atoms/Card/Card";

import maquinas from "../../../assets/IMG/fondo-maquinas.png";
import clases from "../../../assets/IMG/fondo-clases.png";
import productos from "../../../assets/IMG/fondo-productos.png";


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

    const cardsData = [
        {
            title: 'Maquina 1',
        },
        {
            title: 'Maquina 2',
        },
        {
            title: 'Maquina 3',
        },
        {
            title: 'Maquina 4',
        },
        {
            title: 'Maquina 5',
        },
        {
            title: 'Maquina 6',
        },
        {
            title: 'Maquina 7',
        },
        {
            title: 'Maquina 8',
        },
        {
            title: 'Maquina 9',
        },
        {
            title: 'Maquina 10',
        },
        {
            title: 'Maquina 11',
        },
        {
            title: 'Maquina 12',
        },
        {
            title: 'Maquina 13',
        },
        {
            title: 'Maquina 14',
        },
        {
            title: 'Maquina 15',
        },
        {
            title: 'Maquina 16',
        },
        {
            title: 'Maquina 17',
        },
        {
            title: 'Maquina 18',
        },
        {
            title: 'Maquina 19',
        },
        {
            title: 'Maquina 20',
        },
    ]


    return (
        <Routes>
            <Route path="/*" element = 
                <div className={style.container}>
                    {
                        data.map((item) => {
                            return <Link to={`*/${item.category}`}> <CategoryCard data={item} /> </Link>
                        })
                    }
                </div> />
            <Route path="*/:category" element=
                <div className="grid grid-cols-4 gap-2 w-">
                    {cardsData.map((item) => {
                        return <Card data={item} />
                    })}
                </div> 
            />
        </Routes>
    );
}

export default CardsContent;