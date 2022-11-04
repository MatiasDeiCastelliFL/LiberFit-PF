import React from "react";
import DoughnutChart from "../../../Atoms/DoughnutChart/DoughnutChart";

export default function DashGeneral() {
    const dataEmpleados = {
        labels: ["Activos", "Inactivos"],
        datasets: [
            {
                label: "Grafico empledos",
                backgroundColor: ["#fca5a5", "#f87071", "#FECACA", "#CE0000"],
                data: [0, 30, 45],
            },
        ],
    };
    const dataSedes = {
        labels: ["Activos", "Inactivos"],
        datasets: [
            {
                label: "Graficos Sedes",
                backgroundColor: ["#fca5a5", "#f87071"],
                data: [0, 20, 30, 45, 75],
            },
        ],
    };
    return (
        <div className="flex w-80">
              <DoughnutChart data={dataEmpleados} />
              <DoughnutChart data={dataSedes} />
        </div>
    );
}
