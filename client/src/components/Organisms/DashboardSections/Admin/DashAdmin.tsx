import React, { useEffect } from "react";
import DoughnutChart from "../../../Atoms/DoughnutChart/DoughnutChart";
import LineChart from "../../../Atoms/DoughnutChart/LineChart";
import DashEmpleados from "./DashEmpleados";
import DashClientes from "./DashClientes";
import { useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../../App/Hooks/Hooks";
import { getClients } from '../../../../App/Action/Action';

function DashAdmin() {
    const location = useLocation()
    const { admin } = useParams<{ admin: string }>();
    const link = admin
    const { data}:any = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getClients());
    }, []);
    
    const totalClients = data.clients.length
    const clientsActive = data.clients.filter((e: any) => e.active === true).length
    
    const datosUsuariosActivos = {
        labels: ["Inactivos", "Activos"],
        datasets: [
            {
                label: "Grafico usuarios",
                backgroundColor: ["#fca5a5", "#f87071", "#FECACA", "#CE0000"],
                data: [0, clientsActive, totalClients-clientsActive],
            },
        ],
    };
    const noSub = data.clients.filter((e: any) => e.SubscriptionId === 1).length
    const oros = data.clients.filter((e: any) => e.SubscriptionId === 2).length
    const bronces = data.clients.filter((e: any) => e.SubscriptionId === 3).length
    const platas = data.clients.filter((e: any) => e.SubscriptionId === 4).length
    
    const datosSuscripciones = {
        labels: ['noSub', 'subs oro',"subs plata",'subs bronce',],
        datasets: [
            {
                label: "suscripciones",
                backgroundColor: ["#fca5a5", "#f87071", "#FECACA", "#CE0000"],
                data: [noSub, oros, platas,bronces],
            },
        ],
    }
    const usEne = data.clients
    const usFeb = data.clients
    const usMar = data.clients
    const usAbr = data.clients
    const usMay = data.clients
    const usJun = data.clients
    const usJul = data.clients
    const usAgo = data.clients

    const dataSedes = {
        labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
        ],
        datasets: [
            {
                label: "Usuarios",
                backgroundColor: ["#fca5a5", "#f87071"],
                borderColor: "#f87071",
                fill: false,
                data: [0, 10, 5, 2, 20, 30, 45, 100],
            },
        ],
    };
    return (
        <div className="grid grid-cols-2 gap-28">
            {link === "home" ? (
                    <>
                        <DoughnutChart data={datosUsuariosActivos} />
                        <DoughnutChart data={datosSuscripciones} />
                        <LineChart data={dataSedes} />
                    </>
            ) : link === "clients" ? (
                <div className="flex-1">
                        <DashClientes link={link} />
                </div>
            ) : link === "employees" ? (
                <div className="flex-1">
                    <DashEmpleados link={link} />
                </div>
            ) : null}
        </div>
    );
}

export default DashAdmin
