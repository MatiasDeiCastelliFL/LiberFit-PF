import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import Card from "../../Atoms/Card/Card";
import style from "./CardsCategory.module.css";
import { getDataThunk } from "./../../../App/Action/Action";

function CardsCategory() {
    const dispatch = useAppDispatch();

    const { filter } = useAppSelector((state) => state);

    let { category } = useParams();

    return (
        <div
            className={`${style.container} container h-custom_4 w-swiper overflow-hidden flex overflow-y-auto `}
        >
            <div className="flex-column justify-center text-center ">
                <h1 className="text-redClare text-3xl font-black font-sans">
                    {category?.toUpperCase()}
                </h1>
                {filter.dataLocation.length ? (
                    category !== "Exercises" ? (
                        filter.dataLocation.map((d) => (
                            <div
                                key={Math.random()}
                                className="flex-column mx-auto gap-5"
                            >
                                <h1 className="bg-redClare  text-start text-white font-extrabold w-full text-2xl p-2 my-2 ">
                                    {d.name}
                                </h1>
                                <div
                                    className={`${style.cardsDiv} flex w-swiper gap-5 justify-start`}
                                >
                                    {category?.toLowerCase() === "machines"
                                        ? filter.machines.map((m) => (
                                              <Link
                                                  to={`/home/${category}/${m.name}`}
                                                  key={Math.random()}
                                              >
                                                  <Card
                                                      name={m.name}
                                                      image={{
                                                          backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${m.image}')`,
                                                      }}
                                                      key={m.name}
                                                  />
                                              </Link>
                                          ))
                                        : category?.toLowerCase() ===
                                          "trainings"
                                        ? filter.trainigns.map((t) => (
                                              <Link
                                                  to={`/home/${category}/${t.name}`}
                                                  key={Math.random()}
                                              >
                                                  <Card
                                                      name={t.name}
                                                      image={{
                                                          backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${t.image}')`,
                                                      }}
                                                      key={t.name}
                                                  />
                                              </Link>
                                          ))
                                        : category?.toLowerCase() === "products"
                                        ? filter.products.map((p) => (
                                              <Link
                                                  to={`/home/${category}/${p.name}`}
                                                  key={Math.random()}
                                              >
                                                  <Card
                                                      name={p.name}
                                                      image={{
                                                          backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${p.image}')`,
                                                      }}
                                                      key={p.name}
                                                  />
                                              </Link>
                                          ))
                                        : null}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div
                            className={`${style.cardsDiv} flex w-swiper gap-5 justify-start mt-5`}
                        >
                            {filter.exercises.map((e) => (
                                <Link to={`/home/Exercises/${e.name}`}>
                                    <Card
                                        name={e.name}
                                        muscle={e.muscle}
                                        image={{
                                            backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${e.image}')`,
                                        }}
                                        key={e.name}
                                    />
                                </Link>
                            ))}
                        </div>
                    )
                ) : null}
            </div>
        </div>
    );
}

export default CardsCategory;
