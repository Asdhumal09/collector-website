import React from "react";
import { Chart } from "react-google-charts";

// Define the colors for the pie slices
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FFC75F",
//   "#F9F988",
];

// Data and options for the chart
const data = [
  ["Taluka", "Hours per Day", { role: "tooltip" }],
  ["जालना (ग्रामीण)", 26, "एकून लाभार्थी: 100\nएकून टक्केवारी: 50%"],
  ["जालना (शहर)", 24, "एकून लाभार्थी: 100\nएकून टक्केवारी: 50%"],
  ["बदनापुर", 15, "एकून लाभार्थी: 100\nएकून टक्केवारी: 50%"],
  ["भोकरदन", 16, "एकून लाभार्थी: 100\nएकून टक्केवारी: 50%"],
  ["जाफ्राबाद", 18, "एकून लाभार्थी: 100\nएकून टक्केवारी: 50%"],
  ["परतुर", 17, "एकून लाभार्थी: 100\nएकून टक्केवारी: 50%"],
  ["मंठा", 15, "एकून लाभार्थी: 100\nएकून टक्केवारी: 50%"],
  ["अंबड", 16, "एकून लाभार्थी: 100\nएकून टक्केवारी: 50%"],
  ["घनसावंगी", 19, "एकून लाभार्थी: 100\nएकून टक्केवारी: 50%"], 
];

const options = {
  // title: "संजय गांधी निराधार अनुदान योजना",
  is3D: true,
  tooltip: { isHtml: true },
  pieSliceText: 'label',
  legend: { position: 'right' },
  pieSliceTextStyle: {
    fontSize: 13,
  },
  pieSliceBorderColor: 'none',
  chartArea: { left: 10, top: 50, width: '90%', height: '90%' },
  backgroundColor: 'none',
  slices: COLORS.map((color, index) => ({ color })),
};

export function XDChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"330px"} 
    />
  );
}
