import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DataChart = ({ historicalData }) => {
  // compared to this.chartRef = React.createRef()
  const chartRef = useRef(null);

  useEffect(() => {
    buildChart(historicalData);
  }, [historicalData]);

  const buildChart = ({ data, label, labels }) => {
    // compared to const chartRef = this.chartRef.current.getContext('2d');
    const currentRef = chartRef.current.getContext("2d");

    const chart = new Chart(currentRef, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: label,
            data,
            fill: false,
            tension: 0,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
    // Put after initialization of chart, throws error when before
    if (typeof chart !== "undefined") {
      chart.destroy();
    }
  };

  return (
    <div>
      <canvas id="chart" ref={chartRef}></canvas>
    </div>
  );
};

export default DataChart;
