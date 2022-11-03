import React from "react";
import DoughnutChart from '../../../Molecules/Chart/DoughnutChart/DoughnutChart';

export default function DashGeneral() {

  const labels = ["Activos", "Inactivos"];
const dataEmpleados = {
  labels: labels,
  datasets: [
    {
      label: "Grafico empledos",
      backgroundColor: [
        "#fca5a5",
        "#f87071",
        "#FECACA",
        "#CE0000",
      ],
      data: [0,  30, 45],
    },
  ],
};
const dataSedes = {
  labels: labels,
  datasets: [
    {
      label: "Grafico empledos",
      backgroundColor: [
        "#fca5a5",
        "#f87071",
      ],
      data: [0,  20, 30, 45, 75],
    },
  ],
};
  return <div>
    <DoughnutChart data={dataEmpleados}/>
    <DoughnutChart data={dataSedes}/>
    {/* <DoughnutChart /> */}
  </div>;

}
