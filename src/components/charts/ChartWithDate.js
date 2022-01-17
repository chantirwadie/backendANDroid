import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import axios from "axios";
import "../../utils/import"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
function ChartWithDate() {
  const [chartData, setChartData] = useState(null);


  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("https://fierce-ridge-76224.herokuapp.com/occupations/count/c")
      .then(res => {
        for (const dataObj of res.data) {
          empSal.push(parseInt(dataObj.count));
          empAge.push(dataObj._id);
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: 'Date',
              data:  empSal,
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      {chartData && (
        <div><Bar options={options} data={chartData} /></div>
      )}

    </div>
  )
}

export default ChartWithDate
