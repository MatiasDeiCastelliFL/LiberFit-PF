import React, {useEffect} from "react";
import  { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks"

import Ejercicios from "./Content/Ejercicios";
import { useLocation } from "react-router-dom";
import Rutinas from "./Content/Rutinas";
import { getPaymentInfo } from "../../../../App/Action/FilterActions";
import TimerExercise from "../../../Molecules/EjerciciosTimer/TimerExercise";
import Payments from "./Content/Payments";
import DashHomeClient from "./Content/DashHomeClient";

function Cliente() {
    const location = useLocation();
    console.log(location.pathname);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.data);
    

    return (
        <div>
            {
            location.pathname.includes('ejercicios') ? (
                <Ejercicios />
            ) : location.pathname.includes("rutinas") ? (
                <Rutinas />
            ) : location.pathname.includes("pagos") ? (
                <Payments  />
            ): (<DashHomeClient/>)
            }
        </div>
    );
}

export default Cliente;
