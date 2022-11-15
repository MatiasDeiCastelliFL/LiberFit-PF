import React, {useEffect} from "react";
import  { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks"

import Ejercicios from "./Content/Ejercicios";
import { useLocation, useParams } from "react-router-dom";
import Rutinas from "./Content/Rutinas";
import { getPaymentInfo } from "../../../../App/Action/FilterActions";
import TimerExercise from "../../../Molecules/EjerciciosTimer/TimerExercise";
import Timer from "../../Timer/Timer";
import Payments from "./Content/Payments";
import DashHomeClient from "./Content/DashHomeClient";

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
            ) : (<DashHomeClient/>)}
        </div>
    );
}

export default Cliente;
