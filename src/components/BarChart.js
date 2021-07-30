import React from "react";
import ReactDOM from "react-dom";
import { Doughnut } from "react-chartjs-2";
import "./BarChart.css";

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/

const data = {
  labels: ["Delhi", "Mumbai", "Bengalore"],
  datasets: [
    {
      data: [30, 30, 15],
      backgroundColor: ["#262A53", "#FFE3E3", "#FFA0A0", "#628395"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],

  plugins: {
    labels: {
      render: "percentage",
      fontColor: ["green", "white", "red"],
      precision: 2,
    },
  },
  text: "23%",
};

class BarChart extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={data}
          height={400}
          options={{
            maintainAspectRatio: false,
            elements: {
              center: {
                legend: { display: true, position: "right" },
                text: "Red is 2/3 the total numbers",
                color: "#FF6384", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 40, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 40, // Default is 25 (in px), used for when text wraps
              },
            },
            plugins: {
              title: {
                display: true,
                text: "Stats Major Cities",
                align: "center",
                font: {
                  size: 20,
                },
              },
            },
            layout: {
              margin: {
                left: 50,
              },
            },
          }}
        />
      </div>
    );
  }
}
export default BarChart;
