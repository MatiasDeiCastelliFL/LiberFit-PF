import React from "react";
import DoughnutChart from "../../../Atoms/DoughnutChart/DoughnutChart";
import LineChart from "../../../Atoms/DoughnutChart/LineChart";
import DashEmpleados from "./DashEmpleados";
import { useAppSelector, useAppDispatch } from "../../../../App/Hooks/Hooks";

export default function DashGeneral({ link }: any) {
    const { data } = useAppSelector((state) => state);
    console.log("file: DashAdmin.tsx ~ line 10 ~ DashGeneral ~ data", data);
    const dispatch = useAppDispatch();

    const datosUsuarios = {
        labels: ["Activos", "Inactivos"],
        datasets: [
            {
                label: "Grafico usuarios",
                backgroundColor: ["#fca5a5", "#f87071", "#FECACA", "#CE0000"],
                data: [0, 30, 45],
            },
        ],
    };
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
                tension: 0.1,
                data: [0, 10, 5, 2, 20, 30, 45, 100],
            },
        ],
    };
    return (
        <div className="grid grid-cols-2 gap-28">
            {link === "home" ? (
                    <>
                        <DoughnutChart data={datosUsuarios} />
                        <LineChart data={datosUsuarios} />
                    </>
            ) : (
                <div className="flex-1">
                    <DashEmpleados />
                </div>
            )}
        </div>
    );
}
