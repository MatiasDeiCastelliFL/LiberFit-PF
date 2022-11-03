import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import {Chart} from "chart.js/auto";

const DoughnutChart = () => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(0,0,255)",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    };

    return (
        <div
            className="bg-white rounded-md dark:bg-darker"
        >
            <div className="shadow-lg rounded-lg overflow-hidden">
                <Pie data={data} />
            </div>
        </div>
    );
};

export default DoughnutChart;
