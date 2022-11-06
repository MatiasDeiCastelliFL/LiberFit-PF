import React, { useEffect, useState } from "react";
import DashHome from "./Content/DashHome";
import DashEmpleados from "./Content/DashEmpleados";
import DashClientes from "./Content/DashClientes";
import { useParams, useLocation } from "react-router-dom";
import Ejercicios from "../Cliente/Content/Ejercicios";
import DashProducts from "./Content/DashProducts";
import { useAppDispatch, useAppSelector } from '../../../../App/Hooks/Hooks';
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

    
 
    return (
        <div>
            {location.pathname === "/dashboard/admin/home" ? (
                <DashHome />
            ) : location.pathname === "/dashboard/admin/employees" ? (
                <DashEmpleados link={'employees'} />
            ) : location.pathname === "/dashboard/admin/Products" ? (
                <DashProducts  />
            ) : location.pathname === "/dashboard/admin/ejercicios" ? (addItem?<TrainingsForm background={undefined}/>:
                            <>
                                <button onClick={handleAddItem}>Agregar Ejercicio</button>
                                <Ejercicios />
                            </>
            ) : location.pathname === "/dashboard/admin/clients" ? (
                                <DashClientes link={'clients'} handleAddItem={handleAddItem } />
            ) : null}
        </div>
    );
}

export default DashAdmin;
