import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './chart.css';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ evData }) => {
    const electricRangeData = evData.map(vehicle => vehicle['Electric Range']);
    const modelYearData = evData.map(vehicle => vehicle['Model Year']);

    const data = {
        labels: modelYearData,
        datasets: [
            {
                label: 'Electric Range',
                data: electricRangeData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3,
            }
        ],
    };

    return (
        <div className="chart-container">
            <h2>Electric Range by Model Year</h2>
            <Line data={data} />
        </div>
    );
};

export default ChartComponent;
