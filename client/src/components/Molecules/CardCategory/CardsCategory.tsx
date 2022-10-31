import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../Atoms/Card/Card";
import Json from "../../../assets/gym.json";
import style from "./CardsCategory.module.css";

function CardsCategory() {

  async function getSedesInfo() {
    const response = await axios.get("http://localhost:3004/info");
    return response.data[0].locations
  }

  async function getExersicesInfo() {
    const response = await axios.get("http://localhost:3004/info");
    return response.data[0].exercises
  }

  let { category } = useParams();
  
  const [sedes, setSedes] = useState([]);

  const [Exercises, setExercises] = useState([]);

  console.log(category);
  

  useEffect(() => {
    getSedesInfo().then((data) => {
      setSedes(data);
    });
    getExersicesInfo().then((data) => {
      setExercises(data);
    });
  }, []);

  useEffect(() => {
    console.log(sedes);
  }, [sedes]);

  return (
      <div className={`${style.container} container h-custom_4 w-swiper overflow-hidden flex overflow-y-auto `}>
        <div className="flex-column justify-center text-center ">
          <h1 className="text-redClare text-3xl font-black font-sans">{category?.toUpperCase()}</h1>
          {sedes.length?
            (category !== 'Exercises')?sedes.map((d) => (
              <div key={Math.random()} className="flex-column mx-auto gap-5">
                  <h1 className="bg-redClare  text-start text-white font-extrabold w-full text-2xl p-2 my-2 ">{d.name}</h1>
                  <div className={`${style.cardsDiv} flex w-swiper gap-5 justify-start`}>
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
              <div className={`${style.cardsDiv} flex gap-5 justify-start my-5`}>
                {Exercises.map((e) => (
                  <Link to={`/home/Exercises/${e.name}`} >
                    <Card name={e.name} muscle={e.muscle} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${e.image}')`}} key={e.name} />
                  </Link>
                ))}
              </div>:
              null
            }
        </div>       
      </div>
  );
}

export default CardsCategory;
