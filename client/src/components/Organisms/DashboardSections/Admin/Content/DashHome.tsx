import React, { useEffect } from "react";
import LineChart from "../../../../Atoms/DoughnutChart/LineChart";
import DoughnutChart from "../../../../Atoms/DoughnutChart/DoughnutChart";
import { useAppSelector, useAppDispatch } from "../../../../../App/Hooks/Hooks";
import { getClients } from "../../../../../App/Action/Action";

function DashHome() {
    useEffect(() => {
        dispatch(getClients());
    }, []);
    const { data }: any = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    const totalClients = data.clients.length;
    const clientsActive = data.clients.filter(
        (e: any) => e.active === true
    ).length;

    const datosUsuariosActivos = {
        labels: [ "Activos",'Inactivos'],
        datasets: [
            {
                label: "Grafico usuarios",
                backgroundColor: ["#fca5a5", "#f87071", "#FECACA", "#CE0000"],
                data: [clientsActive, totalClients - clientsActive],
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

    const usJun = data.clients.filter((e: any) =>
        e.createdAt.includes("2022-06")
    ).length;
    const usJul = data.clients.filter((e: any) =>
        e.createdAt.includes("2022-07")
    ).length;
    const usAgo = data.clients.filter((e: any) =>
        e.createdAt.includes("2022-08")
    ).length;
    const usSet = data.clients.filter((e: any) =>
        e.createdAt.includes("2022-09")
    ).length;
    const usOct = data.clients.filter((e: any) =>
        e.createdAt.includes("2022-10")
    ).length;
    const usNov = data.clients.filter((e: any) =>
        e.createdAt.includes("2022-11")
    ).length;

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
                data: [usJun, usJul, usAgo, usSet, usOct, usNov],
            },
        ],
    };
    return (
        <div className="w-full p-10">
            <div className="px-6 pt-6">
                <div className="grid gap-6 md:grid-cols-2  place-content-center">
                    {/* Active chart */}
                    <div className="w-2/4 md:col-span-2 lg:col-span-1">
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className="h-full py-8 px-6 rounded-xl border border-gray-200 bg-white align-middle">
                                <h5 className="text-xl text-gray-600 text-center">
                                    Usuarios Conectados
                                </h5>
                                <DoughnutChart data={datosUsuariosActivos} />
                            </div>
                        </div>
                    </div>
                    {/* Subs chart */}
                    <div className="w-2/4 md:col-span-2 lg:col-span-1">
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                                <h5 className="text-xl text-gray-600 text-center">
                                    Suscripciones
                                </h5>
                                <DoughnutChart data={datosSuscripciones} />
                            </div>
                        </div>
                    </div>
                    {/* new logins chart */}
                    <div className="w-9/12 md:col-span-2 lg:col-span-1">
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                                <h5 className="text-xl text-gray-600 text-center">
                                    Historial de Nuevos Usuarios
                                </h5>
                                <LineChart data={dataSedes} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashHome;
