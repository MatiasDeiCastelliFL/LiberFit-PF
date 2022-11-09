import React from "react";
import Ejercicios from "./Content/Ejercicios";
import { useLocation } from "react-router-dom";
import Rutinas from "./Content/Rutinas";
import TimerExercise from "../../../Molecules/EjerciciosTimer/TimerExercise";
import Payments from "../../../Molecules/Payments/Payments";

function Cliente() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div>
            {location.pathname.includes('ejercicios') ? (
                <Ejercicios />
            ) : location.pathname.includes("rutinas") ? (
                <Rutinas />
            ) : location.pathname.includes("pagos") ? (
                <Payments />
            ): null}
        </div>
    );
}

export default Cliente;
