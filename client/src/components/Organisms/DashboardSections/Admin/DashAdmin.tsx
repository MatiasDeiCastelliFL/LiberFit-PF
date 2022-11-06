import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../../App/Hooks/Hooks';

import DashHome from "./Content/DashHome";
import DashEmpleados from "./Content/DashEmpleados";
import DashClientes from "./Content/DashClientes";
import Ejercicios from "../Cliente/Content/Ejercicios";
import DashProducts from "./Content/DashProducts";

import { getFilterData } from '../../../../App/Action/FilterActions';
import { getMainData } from '../../../../App/Action/Action';
import TrainingsForm from '../../../Molecules/CreateInputsContainer/trainingsForm/trainingsForm';
function DashAdmin() {

    const [addItem, setAddItem] = useState(false);
    const handleAddItem = ()=> setAddItem(!addItem)

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getFilterData());
        dispatch(getMainData());
    }, [dispatch]);
    const location = useLocation();

    const background={background:"linear-gradient(180deg, #F94B40 0%, #B53B3B 56.25%, #FF0000 99.99%)"}

    return (
        <div>
            {location.pathname === "/dashboard/admin/home" ? (
                <DashHome />
            ) : location.pathname === "/dashboard/admin/employees" ? (
                <DashEmpleados link={'employees'} />
            ) : location.pathname === "/dashboard/admin/Products" ? (
                <DashProducts  />
            ) : location.pathname === "/dashboard/admin/ejercicios" ? (addItem?<TrainingsForm background={background}/>:
                            <>
                                <button onClick={handleAddItem}>Agregar Ejercicio</button>
                                <Ejercicios />
                            </>
            ) : location.pathname === "/dashboard/admin/clients" ? (
                                <DashClientes link={'clients'} />
            ) : null}
        </div>
    );
}

export default DashAdmin;
