import React from "react";
import { useEffect } from "react";
import Card from "../../Atoms/Card/Card";
import Json from "../../../assets/gim.json";
import { useParams } from "react-router-dom";
import style from "./CardsCategory.module.css";

function CardsCategory() {
  let { category } = useParams();
  const sedes = Json[0].sedes;
  console.log(category);


  return (
      <div className={`${style.container} container w-cards max-h-96 overflow-hidden flex mx-auto overflow-y-auto`}>
        <div className="flex-column justify-center text-center ">
          <h1 className="text-redClare text-3xl font-black font-sans">{category?.toUpperCase()}</h1>
          {sedes.map((d) => (
            <div key={Math.random()} className="flex-column mx-auto gap-5">
                <h1 className="bg-redClare  text-start text-white p-2 m-2">{d.nomSede}</h1>
                <div className={`${style.cardsDiv} flex w-max gap-5`}>
                  {(category?.toLowerCase() === "maquinas") ? d.maquinas.map((m) => (
                    <Card name={m.nombre} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${m.imagen}')`}} key={m.nombre} />
                  )) : (category?.toLowerCase() === "clases") ? d.clases.map((c) => (
                    <Card name={c.nombre} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${c.imagen}')`}} key={c.nombre} />
                  )) : (category?.toLowerCase() === "productos") ? d.productos.map((p) => (
                    <Card name={p.nombre} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${p.imagen}')`}} key={p.nombre} />
                  )) : null}
                </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default CardsCategory;
