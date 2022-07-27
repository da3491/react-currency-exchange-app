import "chart.js/auto";
import { Line } from "react-chartjs-2";

const DataChart = ({ historicalData }) => {
  let { chartData, chartLabel, chartLabels } = historicalData;
  return (
    <div>
      <Line
        data={{
          labels: chartLabels,
          datasets: [
            {
              label: chartLabel,
              data: chartData,
              fill: false,
              tension: 0,
            },
          ],
        }}
      />
    </div>
  );
};

export default DataChart;
