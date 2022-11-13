import React from "react";
import Ejercicios from "./Content/Ejercicios";
import { useLocation, useParams } from "react-router-dom";
import Rutinas from "./Content/Rutinas";
import TimerExercise from "../../../Molecules/EjerciciosTimer/TimerExercise";
import Payments from "../../../Molecules/Payments/Payments";
import Timer from "../../Timer/Timer";

function Cliente() {
    const location = useLocation();
    const params = useParams()
    const user = location.pathname.split('/').slice(2,3)
    console.log(location.pathname === `/dashboard/${user}/ejercicios/${params.ejercicio}` ? true : false);
    return (
        <div>
            {location.pathname === `/dashboard/${user}/ejercicios` ? (
                <Ejercicios />
            ) : location.pathname.includes("rutinas") ? (
                <Rutinas />
            ) : location.pathname.includes("pagos") ? (
                <Payments />
            ): location.pathname === `/dashboard/${user}/ejercicios/${params.ejercicio}` ? (
                <Timer/>
            ) : null}
        </div>
    );
}

export default Cliente;
