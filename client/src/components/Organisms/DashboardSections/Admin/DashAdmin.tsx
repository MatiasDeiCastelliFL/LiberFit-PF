import React, { useEffect } from "react";
import DoughnutChart from "../../../Atoms/DoughnutChart/DoughnutChart";
import LineChart from "../../../Atoms/DoughnutChart/LineChart";
import DashEmpleados from "./DashEmpleados";
import DashClientes from "./DashClientes";
import { useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../../App/Hooks/Hooks";
import { getClients } from "../../../../App/Action/Action";

function DashAdmin() {
    const location = useLocation();
    const { admin } = useParams<{ admin: string }>();
    const link = admin;
    const { data }: any = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getClients());
    }, []);

    const totalClients = data.clients.length;
    const clientsActive = data.clients.filter(
        (e: any) => e.active === true
    ).length;

    const datosUsuariosActivos = {
        labels: ["Inactivos", "Activos"],
        datasets: [
            {
                label: "Grafico usuarios",
                backgroundColor: ["#fca5a5", "#f87071", "#FECACA", "#CE0000"],
                data: [0, clientsActive, totalClients - clientsActive],
            },
        ],
    };
    const noSub = data.clients.filter(
        (e: any) => e.SubscriptionId === 1
    ).length;
    const oros = data.clients.filter((e: any) => e.SubscriptionId === 2).length;
    const bronces = data.clients.filter(
        (e: any) => e.SubscriptionId === 3
    ).length;
    const platas = data.clients.filter(
        (e: any) => e.SubscriptionId === 4
    ).length;

    const datosSuscripciones = {
        labels: ["noSub", "subs oro", "subs plata", "subs bronce"],
        datasets: [
            {
                label: "suscripciones",
                backgroundColor: ["#fca5a5", "#f87071", "#FECACA", "#CE0000"],
                data: [noSub, oros, platas, bronces],
            },
        ],
    };
   
    const usJun = data.clients.filter((e: any) => e.createdAt.includes("2022-06")).length;
    const usJul = data.clients.filter((e: any) => e.createdAt.includes("2022-07")).length;
    const usAgo = data.clients.filter((e: any) => e.createdAt.includes("2022-08")).length;
    const usSet = data.clients.filter((e: any) => e.createdAt.includes("2022-09")).length;
    const usOct = data.clients.filter((e: any) => e.createdAt.includes("2022-10")).length;
    const usNov = data.clients.filter((e: any) => e.createdAt.includes("2022-11")).length;


   

    const dataSedes = {
        labels: [
            "Junio",
            "Julio",
	    "Agosto",
	    "Setiembre",
	    "Octubre",
	    "Noviembre",
        ],
        datasets: [
            {
                label: "Usuarios",
                backgroundColor: ["#fca5a5", "#f87071"],
                borderColor: "#f87071",
                fill: false,
                data: [usJun,usJul,usAgo,usSet,usOct,usNov],
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

export default DashAdmin;
