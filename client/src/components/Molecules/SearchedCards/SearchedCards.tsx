import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../App/Hooks/Hooks";
import Card from "../../Atoms/Card/Card";

const SearchedCards = () => {

    const { filter } = useAppSelector((state) => state);
    const products = filter.dataByName.products
    const machines = filter.dataByName.machines
    const exercises = filter.dataByName.exercises
    const trainings = filter.dataByName.trainings

    return (
        <div>
            {products && 
                <div className="flex flex-col gap-5 justify-start items-start">
                    <div className="flex flex-col gap-3 justify-between items-start">
                        <h2 className="ml-2 text-lg">Products</h2>
                        <div className="flex flex-wrap gap-9 ml-2 justify-start mt-3">
                            {products.map((product: { name: any; image: any; }) => (
                                <Link
                                    to={`/home/Products/${product.name
                                        .split("%")
                                        .join("")}`}
                                    key={Math.random()}
                                >
                                    <Card
                                        name={product.name}
                                        image={{
                                            backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${product.image}')`,
                                        }}
                                        key={product.name}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 justify-between items-start">
                        <h2 className="ml-2 text-lg">Mahchines</h2>
                        <div className="flex flex-wrap gap-9 ml-2 justify-start mt-3">
                            {machines.map((machine: { name: any; image: any; }) => (
                                <Link
                                    to={`/home/Machines/${machine.name
                                        .split("%")
                                        .join("")}`}
                                    key={Math.random()}
                                >
                                    <Card
                                        name={machine.name}
                                        image={{
                                            backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${machine.image}')`,
                                        }}
                                        key={machine.name}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 justify-between items-start">
                        <h2 className="ml-2 text-lg">Exercises</h2>
                        <div className="flex flex-wrap gap-9 ml-2 justify-start mt-3">
                            {exercises.map((exercise: { name: any; image: any; }) => (
                                <Link
                                    to={`/home/Exercises/${exercise.name
                                        .split("%")
                                        .join("")}`}
                                    key={Math.random()}
                                >
                                    <Card
                                        name={exercise.name}
                                        image={{
                                            backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${exercise.image}')`,
                                        }}
                                        key={exercise.name}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 justify-between items-start">
                        <h2 className="ml-2 text-lg">Trainings</h2>
                        <div className="flex flex-wrap  gap-9 ml-2 justify-start mt-3">
                            {trainings.map((training: { name: any; image: any; }) => (
                                <Link
                                    to={`/home/Trainings/${training.name
                                        .split("%")
                                        .join("")}`}
                                    key={Math.random()}
                                >
                                    <Card
                                        name={training.name}
                                        image={{
                                            backgroundImage: `linear-gradient(rgba(5, 7 , 12 , 0.06), rgba(5, 7 , 12 , 0.04)),url('${training.image}')`,
                                        }}
                                        key={training.name}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchedCards;