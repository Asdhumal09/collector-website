import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Sector,
} from "recharts";

// Static Data Preparation with 9 values
const data = [
  { name: "जालना", value: 2880 },
  { name: "बदनापुर", value: 9136 },
  { name: "भोकरदन", value: 4955 },
  { name: "जाफ्राबाद", value: 12103 },
  { name: "परतुर", value: 7575 },
  { name: "मंठा", value: 8619 },
  { name: "अंबड", value: 1975 },
  { name: "घनसावंगी", value: 8719 },
];

// New color scheme
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FFC75F",
  "#F9F871",
];

// Custom active shape rendering function for displaying values in the center
const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
    percent,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="#000"
        strokeWidth={2}
        strokeOpacity={0.2}
        style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
      />
      <text
        x={cx}
        y={cy}
        dy={-10}
        textAnchor="middle"
        fill={fill}
        style={{ fontSize: "16px", fontWeight: "bold", fontFamily: "Arial, sans-serif" }} // Change to your desired font
      >
        {payload.name}
      </text>
      <text className="ff_yatra"
        x={cx}
        y={cy}
        dy={20}
        textAnchor="middle"
        fill="#333"
        style={{ fontSize: "14px", fontWeight: "bold"}}
      >
        {`एकुण लाभार्थी : ${value}`}
      </text>
    </g>
  );
};

// Custom Tooltip component to exclude the value and add background color
const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    const { name } = payload[0];
    return (
      <div className="custom-tooltip" style={tooltipStyle}>
        <p className="label" style={{ margin: 0 }}>{name}</p>
      </div>
    );
  }
  return null;
};

// Inline styles for the tooltip
const tooltipStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "10px",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
};

const PieChartHome = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="ff_yatra text-2xl pt-5">संजय गांधी निराधार अनुदान योजना</h1>
      <ResponsiveContainer width={400} height={310} className="ff_yatra"> 
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius="80%"
            innerRadius="60%"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="bottom"/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartHome;
