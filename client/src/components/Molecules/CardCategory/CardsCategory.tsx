import React from "react";
import { useEffect } from "react";
import Card from "../../Atoms/Card/Card";
import Json from "../../../assets/gym.json";
import { useParams } from "react-router-dom";
import style from "./CardsCategory.module.css";

function CardsCategory() {
  let { category } = useParams();
  const sedes = Json[0].sedes;
  const Exersices = Json[0].exercises;
  console.log(category);


  return (
      <div className={`${style.container} container w-cards max-h-96 overflow-hidden flex mx-auto overflow-y-auto`}>
        <div className="flex-column justify-center text-center ">
          <h1 className="text-redClare text-3xl font-black font-sans">{category?.toUpperCase()}</h1>
          {(category !== 'Exercises')?sedes.map((d) => (
            <div key={Math.random()} className="flex-column mx-auto gap-5">
                <h1 className="bg-redClare  text-start text-white font-extrabold text-2xl p-2 m-2">{d.name}</h1>
                <div className={`${style.cardsDiv} flex w-max gap-5`}>
                  {(category?.toLowerCase() === "machines") ? d.machines.map((m) => (
                    <Card name={m.name} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${m.image}')`}} key={m.name} />
                  )) : (category?.toLowerCase() === "trainings") ? d.trainings.map((c) => (
                    <Card name={c.name} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${c.image}')`}} key={c.name} />
                  )) : (category?.toLowerCase() === "products") ? d.products.map((p) => (
                    <Card name={p.name} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${p.image}')`}} key={p.name} />
                  )) : null}
                </div>
            </div>)): 
              <div className={`${style.cardsDiv} flex w-max gap-5`}>
                {Exersices.map((e) => (
                  <Card name={e.name} muscle={e.muscle} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${e.image}')`}} key={e.name} />
                ))}
              </div>
            }
        </div>       
      </div>
  );
}

export default CardsCategory;
