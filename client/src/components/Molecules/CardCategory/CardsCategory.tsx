import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../App/Hooks/Hooks";
import Card from "../../Atoms/Card/Card";
import style from "./CardsCategory.module.css";

function CardsCategory() {
    const { filter } = useAppSelector((state) => state);

    let { category } = useParams();

    const [location , setLocation] = React.useState('0');

    return (
        <div>
            <div>
            {filter.dataLocation.length ? (
            category !== "Exercises" ? (
                <div className="flex flex-col gap-5">
                    <select name="locationSelector" id="locationSelector" onChange={(e) => setLocation(e.target.value)}>
                    <option value="0">Todas las cedes</option>
                    {filter.dataLocation.map((d) => (
                    <option value={d.name}>{d.name}</option>
                    ))}
                    </select>
        
                    {
                        location === "0" ? (
                            <div className={`${style.cardsDiv} flex  gap-9 ml-2 justify-start`} >
                            {category?.toLowerCase() === "machines"
                                ? filter.filteredMachines.map((m) => (
                                    <Link   to={`/home/${category}/${m.name.split('%').join('')}`}
                                            key={Math.random()}>
                                        <Card
                                            name={m.name}
                                            image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${m.image}')`,}}
                                            key={m.name}
                                        />
                                    </Link>
                                ))
                            : category?.toLowerCase() === "trainings"
                                ? filter.filteredTrainings.map((t) => (
                                    <Link
                                        to={`/home/${category}/${t.name}`}
                                        key={Math.random()}
                                    >
                                        <Card
                                            name={t.name}
                                            image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${t.image}')`,}}
                                            key={t.name}
                                        />
                                    </Link>
                                ))
                            : category?.toLowerCase() === "products"
                                ? filter.filteredProducts.map((p) => (
                                    <Link   to={`/home/${category}/${p.name}`}
                                            key={Math.random()}>
                                        <Card
                                            name={p.name}
                                            image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${p.image}')`,}}
                                            key={p.name}
                                        />
                                    </Link>
                                ))
                            : null}
                            </div>
                        ) : ( filter.dataLocation.map((locationInfo) => (
                            locationInfo.name === location ? (
                            <div className={`${style.cardsDiv} flex  gap-9 ml-2 justify-start`} >
                            {category?.toLowerCase() === "machines"
                                ? locationInfo.machines.map((m: { name: string; image: any; }) => (
                                    <Link   to={`/home/${category}/${m.name.split('%').join('')}`}
                                            key={Math.random()}>
                                        <Card
                                            name={m.name}
                                            image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${m.image}')`,}}
                                            key={m.name}
                                        />
                                    </Link>
                                ))
                            : category?.toLowerCase() === "trainings"
                                ? locationInfo.trainings.map((t: { name: string; image: any; }) => (
                                    <Link
                                        to={`/home/${category}/${t.name}`}
                                        key={Math.random()}
                                    >
                                        <Card
                                            name={t.name}
                                            image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${t.image}')`,}}
                                            key={t.name}
                                        />
                                    </Link>
                                ))
                            : category?.toLowerCase() === "products"
                                ? locationInfo.products.map((p: { name: string; image: any; }) => (
                                    <Link   to={`/home/${category}/${p.name}`}
                                            key={Math.random()}>
                                        <Card
                                            name={p.name}
                                            image={{backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${p.image}')`,}}
                                            key={p.name}
                                        />
                                    </Link>
                                ))
                            : null}
                            </div>
                            ) : null
                        )))
                    }
                </div>
            ) : (
                <div className={`${style.cardsDiv} flex w-swiper gap-10 justify-start mt-5`}>
                    {filter.filteredExercises.map((e) => (
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
