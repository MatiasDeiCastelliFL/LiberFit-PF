import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks/Hooks";

import DashHome from "./Content/DashHome";
import DashEmpleados from "./Content/DashEmpleados";
import DashClientes from "./Content/DashClientes";
import Ejercicios from "../Cliente/Content/Ejercicios";
import DashProducts from "./Content/DashProducts";
import DashTrainings from "./Content/DashTrainings";
import DashLocations from "./Content/DashLocations";
import DashSuscriptions from "./Content/DashSuscriptions";
import DashPayments from "./Content/DashPayments";

import { getFilterData } from "../../../../App/Action/FilterActions";
import { getMainData } from "../../../../App/Action/Action";
import TrainingsForm from "../../../Molecules/CreateInputsContainer/trainingsForm/trainingsForm";
import Cookies from "universal-cookie";

function DashAdmin() {
    const cookies = new Cookies();
    // TODO botones de modificacion de cada item
    const [addItem, setAddItem] = useState(false);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getFilterData());
        dispatch(getMainData());
    }, [dispatch]);
    const location = useLocation();

    useEffect(() => {
        setAddItem(false);
    }, [location]);
    Cookies;

    const background = {
        background:
            "linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)",
    };

    return (
            
        <div className="mt-10">
            {cookies.get("RolId") === "1" && (
            <div>
                { location.pathname === "/dashboard/admin" ? (
                    <DashHome />
                ) : location.pathname === "/dashboard/admin/employees" ? (
                    <DashEmpleados link={"employees"} />
                ) : location.pathname === "/dashboard/admin/products" ? (
                    <DashProducts link={"products"} />
                ) : location.pathname === "/dashboard/admin/ejercicios" ? (
                    <Ejercicios link={"ejercicios"} />
                ) : location.pathname === "/dashboard/admin/clients" ? (
                    <DashClientes link={"clients"} />
                ) : location.pathname === "/dashboard/admin/trainings" ? (
                    <DashTrainings link={"trainings"} />
                ) : location.pathname === "/dashboard/admin/locations" ? (
                    <DashLocations link={"locations"} />
                ) : location.pathname === "/dashboard/admin/suscriptions" ? (
                    <DashSuscriptions link={"suscriptions"} />
                ) : location.pathname === "/dashboard/admin/payments" ? (
                    <DashPayments link={"payments"} />
                ) : null }
            </div>)}
        </div>
    );
}

export default DashAdmin;
