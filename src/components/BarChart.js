import React from "react";
import ReactDOM from "react-dom";
import { Doughnut } from "react-chartjs-2";
import "./BarChart.css";

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/

const data = {
  labels: ["Delhi", "Mumbai", "Bengalore", "Chennai"],
  datasets: [
    {
      data: [10, 30, 25, 35],
      backgroundColor: ["#F4EEFF", "#DCD6F7", "#A6B1E1", "#424874"],
      borderColor: "#ffffff",
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
                legend: {
                  //display: false,
                  position: "right",
                  labels: { color: "#f00" },
                },
                text: "Red is 2/3 the total numbers",
                color: "#000000", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 40, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 40, // Default is 25 (in px), used for when text wraps
              },
            },

            plugins: {
              title: {
                display: true,
                text: "Stats of Title Report Generation",
                align: "center",
                color: "#ffffff",
                font: {
                  size: 20,
                },
              },
              legend: {
                display: true,

                labels: {
                  color: "#fff",
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
