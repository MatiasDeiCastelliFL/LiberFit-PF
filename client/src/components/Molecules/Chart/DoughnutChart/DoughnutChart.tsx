import React from "react";
import 'chart.js/auto';
import { Doughnut  } from 'react-chartjs-2'; // evita error en el renderisado de chart
import { Pie } from "react-chartjs-2";
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: ["#FEF2F2",
      '#FEE2E2','#FECACA','#FCA5A5','#F87171','#FF5151','#F11313'],
      data: [0, 150, 50, 120, 120],
    },
  ],
};
const DoughnutChart = () => {
  return (
    <div >
      <Doughnut data={data} />
    </div>
  );
};
export default DoughnutChart;
