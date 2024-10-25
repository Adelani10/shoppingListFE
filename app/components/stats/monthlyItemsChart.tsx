import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const MonthlyItemsChart = ({ data }: any) => {
  const chartData = {
    labels: data.map((entry: any) => entry.monthYear),
    datasets: [
      {
        label: "Total Items",
        data: data.map((entry: any) => entry.totalItems),
        fill: false,
        backgroundColor: "orange",
        borderColor: "orange",
      },
    ],
  };
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: "Month" } },
      y: { title: { display: true, text: "Total Items" } },
      beginAtZero: true,
    },
  };
  return <Line data={chartData} options={options} />;
};

export default MonthlyItemsChart;
