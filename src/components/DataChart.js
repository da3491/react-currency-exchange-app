// import Chart from "chart.js/auto";

// const ctx = document.getElementById("#chart");
// const myChart = new Chart(ctx, {});

const DataChart = (props) => {
  console.log(props);
  return (
    <div className="container bg-light rounded my-3 shadow-lg">
      <canvas id="chart" width="325"></canvas>
    </div>
  );
};

export default DataChart;
