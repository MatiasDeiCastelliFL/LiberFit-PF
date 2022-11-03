import React from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2'; // evita error en el renderisado de chart
import { Pie } from "react-chartjs-2";

const DoughnutChart = ({data}:any) => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default DoughnutChart;