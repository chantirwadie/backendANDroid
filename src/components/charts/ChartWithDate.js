import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "../../utils/import"
function ChartWithDate() {
  const [chartData, setChartData] = useState(null);


  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("https://fierce-ridge-76224.herokuapp.com/occupations/count/c")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          empSal.push(parseInt(dataObj.count));
          empAge.push(parseInt(dataObj._id));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "level of thiccness",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      {chartData && (
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      )}

    </div>
  )
}

export default ChartWithDate
