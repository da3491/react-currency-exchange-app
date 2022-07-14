// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);

// const ctx = $("#graph");
// const myChart = new Chart(ctx, { data });

const DataChart = () => {
  return (
    <div className="container bg-light rounded my-3">
      <canvas id="chart" width="400"></canvas>
    </div>
  );
};

export default DataChart;
