import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import {filterProductsByPrice} from "../../../App/Action/Action";
import axios from "axios";
import Card from "../../Atoms/Card/Card";
import Json from "../../../assets/gym.json";
import style from "./CardsCategory.module.css";
import { Root, root } from "postcss";
import { RootState } from "../../../App/Store";

function CardsCategory() {

  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state);


  let { category } = useParams();
  
  // const [sedes, setSedes] = useState(data.locations);

  // const [Exercises, setExercises] = useState(data.exercises);

  // const [products, setProducts] = useState(data.products);

  

  useEffect(() => {

  }, []);

  useEffect(() => {
  }, [data.locations, data.products, data]);

  return (
      <div className={`${style.container} container h-custom_4 w-swiper overflow-hidden flex overflow-y-auto `}>
        <div className="flex-column justify-center text-center ">
          <h1 className="text-redClare text-3xl font-black font-sans">{category?.toUpperCase()}</h1>
          {data.locations.length?
            (category !== 'Exercises')?data.locations.map((d) => (
              <div key={Math.random()} className="flex-column mx-auto gap-5">
                  <h1 className="bg-redClare  text-start text-white font-extrabold w-full text-2xl p-2 my-2 ">{d.name}</h1>
                  <div className={`${style.cardsDiv} flex w-swiper gap-5 justify-start`}>
                    {(category?.toLowerCase() === "machines") ? d.machines.map((m) => (
                      data.machines.includes(m) ? (
                      <Link to={`/home/${category}/${m.name}`} key={Math.random()}>
                        <Card name={m.name} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${m.image}')`}} key={m.name} />
                      </Link>
                      ):null
                      
                    )) : (category?.toLowerCase() === "trainings") ? d.trainings.map((c) => (
                      data.trainigns.includes(c) ? (
                        <Link to={`/home/${category}/${c.name}`} key={Math.random()}>
                        <Card name={c.name} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${c.image}')`}} key={c.name} />
                      </Link>
                      ): null
                     
                    )) : (category?.toLowerCase() === "products") ? d.products.map((p) => (
                      data.filteredProducts.includes(p) ? (
                          <Link to={`/home/${category}/${p.name}`} key={Math.random()}>  
                            <Card name={p.name} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${p.image}')`}} key={p.name} />
                          </Link>
                      ) : null
                    )) : null}
                  </div>
              </div>)): 
              <div className={`${style.cardsDiv} flex gap-5 justify-start my-5`}>
                {data.exercises.map((e) => (
                  data.filteredExercises.includes(e) ? (
                    <Link to={`/home/Exercises/${e.name}`} >
                      <Card name={e.name} muscle={e.muscle} image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${e.image}')`}} key={e.name} />
                    </Link>
                  ) : null
                ))}
              </div>:
              null
            }
        </div>       
      </div>
  );
}

export default CardsCategory;
