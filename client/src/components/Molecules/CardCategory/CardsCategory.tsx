import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Card from "../../Atoms/Card/Card";
import Json from "../../../assets/gym.json";
import style from "./CardsCategory.module.css";

function CardsCategory() {
  let { category } = useParams();
  const sedes = Json[0].sedes;
  const Exercises = Json[0].exercises;
  console.log(category);


  return (
      <div className={`${style.container} container h-custom_4 w-card overflow-hidden flex mx-auto overflow-y-auto`}>
        <div className="flex-column justify-center text-center ">
          <h1 className="text-redClare text-3xl font-black font-sans">{category?.toUpperCase()}</h1>
          {(category !== 'Exercises')?sedes.map((d) => (
            <div key={Math.random()} className="flex-column mx-auto gap-5">
                <h1 className="bg-redClare  text-start text-white font-extrabold text-2xl p-2 m-2">{d.name}</h1>
                <div className={`${style.cardsDiv} flex w-swiper gap-5 justify-center`}>
                  {(category?.toLowerCase() === "machines") ? d.machines.map((m) => (
                    <Link to={`/home/${category}/${m.name}`} key={Math.random()}>
                      <Card name={m.name} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${m.image}')`}} key={m.name} />
                    </Link>
                  )) : (category?.toLowerCase() === "trainings") ? d.trainings.map((c) => (
                    <Link to={`/home/${category}/${c.name}`} key={Math.random()}>
                      <Card name={c.name} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${c.image}')`}} key={c.name} />
                    </Link>
                  )) : (category?.toLowerCase() === "products") ? d.products.map((p) => (
                    <Link to={`/home/${category}/${p.name}`} key={Math.random()}>  
                      <Card name={p.name} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${p.image}')`}} key={p.name} />
                    </Link>
                  )) : null}
                </div>
            </div>)): 
              <div className={`${style.cardsDiv} flex gap-5 justify-center mt-5 `}>
                {Exercises.map((e) => (
                  <Link to={`/home/Exercises/${e.name}`} >
                    <Card name={e.name} muscle={e.muscle} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${e.image}')`}} key={e.name} />
                  </Link>
                ))}
              </div>
            }
        </div>       
      </div>
  );
}

export default CardsCategory;
