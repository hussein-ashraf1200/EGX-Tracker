// src/components/StockChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// تسجيل العناصر المطلوبة من Chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const StockChart = ({ labels, prices }) => {
  const data = {
    labels, // مثل ["Mon", "Tue", "Wed", ...]
    datasets: [
      {
        label: "Stock Price",
        data: prices, // مثل [150, 152, 153, ...]
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  return <Line data={data} options={options} />;
};

export default StockChart;
