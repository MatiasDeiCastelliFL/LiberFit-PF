import React from "react";
import { useParams } from "react-router-dom";

import ExercisesDetails from "../../Molecules/DetailComponents/ExercisesDetails/ExercisesDetails";
import MachineDetails from "../../Molecules/DetailComponents/MachineDetails/MachineDetails";
import ProductsDetails from "../../Molecules/DetailComponents/ProductsDetails/ProductsDetails";
import TrainingsDetails from "../../Molecules/DetailComponents/TrainingsDetails/TrainingsDetails";


const Details = () => {

    const { category } = useParams();

    return (
        <div>
            {
                (category === "Exercises") ? <ExercisesDetails /> :
                (category === "Machines") ? <MachineDetails /> : 
                (category === "Products") ? <ProductsDetails /> :
                (category === "Trainings") ? <TrainingsDetails /> :
                <h1>404</h1>
            }
        </div>
    );
};

export default Details;
