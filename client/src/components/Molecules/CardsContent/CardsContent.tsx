import React from "react";
import style from "./CardsContent.module.css";
import { Link, Route, Routes } from "react-router-dom";

import CategoryCard from "../../Atoms/CategoryCard/CategoryCard";
import Card from "../../Atoms/Card/Card";

import maquinas from "../../../assets/IMG/fondo-maquinas.png";
import clases from "../../../assets/IMG/fondo-clases.jpg"
import ejercicios from "../../../assets/IMG/fondo-ejercicios.png";
import productos from "../../../assets/IMG/fondo-productos.png";

const CardsContent = () => {
  const data = [
    {
      category: "Exercises",
      image: ejercicios,
    },
    {
      category: "Machines",
      image: maquinas,
    },
    {
      category: "Trainings",
      image: clases,
    },
    {
      category: "Products",
      image: productos,
    },
  ];

  return (
    <div>
      <div>
        <div className={`${style.container} w-full`}>
          {data.map((item) => {
            return (
              <Link to={`/home/${item.category}`} key={item.category}>
                {" "}
                <CategoryCard
                  category={item.category}
                  image={{ background: `url('${item.image}')`}}
                />{" "}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsContent
