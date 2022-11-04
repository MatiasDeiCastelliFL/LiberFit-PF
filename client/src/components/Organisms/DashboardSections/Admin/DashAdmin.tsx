import React from "react";
import DoughnutChart from "../../../Atoms/DoughnutChart/DoughnutChart";
import LineChart from "../../../Atoms/DoughnutChart/LineChart";

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
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [
            {
                label: "Usuarios",
                backgroundColor: ["#fca5a5", "#f87071"],
                borderColor: "#f87071",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    };
    return (
        <div className="flex w-5/6
        ">
              <DoughnutChart data={dataEmpleados} />
              <div className="h-96">
                  <LineChart data={dataSedes} />
              </div>
        </div>
    );
}
