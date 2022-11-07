import React from "react";
import 'chart.js/auto';
import type {ChartData, ChartOptions} from 'chart.js'
import { Doughnut  } from 'react-chartjs-2'; // evita error en el renderisado de chart

// example data
/* const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: ["#FEF2F2",
      '#FEE2E2','#FECACA','#FCA5A5','#F87171','#FF5151','#F11313'],
      data: [0, 150, 50, 120, 120],
    },
  ],
}; */

interface DoughnutChartProps {
  data: ChartData<'doughnut'>;
};

const DoughnutChart = ({data}:DoughnutChartProps) => {
  return (
      <Doughnut data={data} />
  );
};
export default DoughnutChart;
