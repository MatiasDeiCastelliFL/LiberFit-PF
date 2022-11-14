import React, { useEffect } from "react";
import LineChart from "../../../../Atoms/DoughnutChart/LineChart";
import DoughnutChart from "../../../../Atoms/DoughnutChart/DoughnutChart";
import { useAppSelector, useAppDispatch } from "../../../../../App/Hooks/Hooks";
import { getClients, getEmployees, getTrainings } from "../../../../../App/Action/Action";
import Cookies from "universal-cookie";
function DashHome() {

    const dispatch = useAppDispatch();
    const cookies = new Cookies();

    useEffect(() => {
        dispatch(getClients({token: cookies.get("token")}));
        dispatch(getEmployees({token: cookies.get("token")}));
        dispatch(getTrainings())
    }, []);
    const { data }: any = useAppSelector((state) => state);

    const totalClients = data.clients.length;
    const totalSedes = data.locations.length;
    const totaEemployees = data.employees.length;
    const totaTrainings = data.trainings.length;

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
    // console.log("data-->",data);

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const d = new Date();
    
    const estados = [
        {
            nombre: "Sedes",
            cantidad: totalSedes,
            type: "Ubicaciones",
            type2: "Activas..."
        },
        {
            nombre: "Empleados",
            cantidad: totaEemployees,
            type: "Usuarios",
            type2: "Registrados"
        },
        {
            nombre: "Ganancias",
            cantidad: "$ 15.634",
            type: "Ingresos Totales",
            type2: `Mes: ${monthNames[d.getMonth()]} `
        },
        {
            nombre: "Clientes",
            cantidad: totalClients,
            type: "Usuarios",
            type2: "Registrados"
        },
        {
            nombre: "Entrenamientos",
            cantidad: totaTrainings,
            type: "Clases",
            type2: "Ofrecidas"
        },
    ]
    return (
        <div className="w-full p-10">
            <div className="px-6 pt-6">
                {/* estadisticas */}
                <div className="flex justify-around items-center mb-6" >
                    {
                        estados.map((e) => (
                            <div className={e.nombre === "Ganancias" ? "flex flex-col justify-around items-center w-64 h-64 rounded-3xl bg-gray-200 border border-slate-200 px-4 py-2"
                             : "flex flex-col justify-around items-center w-56 rounded-3xl bg-gray-50 border border-slate-200 px-4 py-2"}  >
                                <div className="flex bg-redClare p-2 w-52 rounded-3xl justify-around items-center">
                                    <h3 className="text-white text-xl"  >{e.nombre}</h3>
                                    <div className="text-white text-4xl">...</div>
                                </div>
                                <div className="mt-2 flex flex-col items-center " >
                                    <h1 className=" text-4xl font-medium font-poppins m-2">{e.cantidad}</h1>
                                    <h1 className=" text-gray-500 text-xl m-2 ">{e.type}</h1>
                                    <h1 className=" text-gray-500 text-xl m-2 ">{e.type2}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex gap-6 md:grid-cols-2  place-content-center">
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
                </div>
            </div>
        </div>
    );
}
export default DashHome;
