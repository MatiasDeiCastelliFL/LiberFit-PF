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
import { getMainData, getReviews, getSuscriptions, getUserInfo } from "../../../../App/Action/Action";
import Cookies from "universal-cookie";

function Cliente() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const cookies = new Cookies();
    const params = useParams()
    const user = location.pathname.split('/').slice(2,3)
    console.log(location.pathname === `/dashboard/${user}/ejercicios/${params.ejercicio}` ? true : false);


    useEffect(() => {
        dispatch(getSuscriptions());
        cookies.get("id") && dispatch(getUserInfo({id:cookies.get("id"), token:cookies.get("token")}));
        dispatch(getMainData());
        dispatch(getPaymentInfo(cookies.get("id"), cookies.get("token")));
        dispatch(getReviews({id:undefined}));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getReviews({id:undefined}));
    }, [])

    return (
        <div className="select-none">
            {location.pathname === `/dashboard/${user}/ejercicios` ? (
                <Timer/>
            ) : location.pathname.includes("rutinas") ? (
                <Rutinas />
            ) : location.pathname.includes("pagos") ? (
                <Payments />
            ): location.pathname === `/dashboard/${user}/ejercicios/${params.ejercicio}` ? (
                <Ejercicios/>
            ) : (<DashHomeClient/>)}
        </div>
    );
}

export default Cliente;
