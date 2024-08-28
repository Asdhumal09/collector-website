import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
} from "recharts";
import TopBar from "../TopBar/TopBar";
import { useNavigate } from "react-router-dom";

const PieChartComponent = () => {
  const data = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 300 },
    { name: "Category D", value: 200 },
  ];

  const COLOR_PALETTES = [
    ["#ccd4f7", "#a2c8f0", "#7db8e5", "#4a98e0", "#1e6ab5"],
  ];

  const getColorPalette = (index) =>
    COLOR_PALETTES[index % COLOR_PALETTES.length];

  const renderCustomLabel = ({
    name,
    value,
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.35;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? "start" : "end"}
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        }}
      >
        {`${name} (${value})`}
      </text>
    );
  };
  const navigate = useNavigate();
  const hadleClick = () => {
    navigate("/tahasiltwo");
  };
  return (
    <Box>
      <Container sx={{ marginTop: { xs: "4rem", sm: "6rem" } }}>
        <TopBar />
        <Grid container spacing={2}>
          {Array.from({ length: 10 }, (_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={hadleClick}
                sx={{
                  width: { xs: "90%", sm: "100%" },
                  marginLeft: { xs: "10%", sm: "0" },
                }}
                style={{
                  backgroundColor: "#f4f8fc",
                  borderRadius: "8px",
                  height: "100%",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ marginBottom: "10px" }}
                  >
                    Pie Chart {index + 1}
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart style={{ cursor: "pointer" }}>
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="40%"
                        outerRadius="60%"
                        paddingAngle={5}
                        cornerRadius={0}
                        startAngle={-90}
                        endAngle={270}
                        cx="50%"
                        cy="50%"
                        label={renderCustomLabel}
                        labelLine={false}
                      >
                        {data.map((entry, i) => (
                          <Cell
                            key={`cell-${i}`}
                            fill={
                              getColorPalette(index)[
                              i % getColorPalette(index).length
                              ]
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}`, "Value"]}
                        itemStyle={{ color: "#000", fontWeight: "500" }}
                        contentStyle={{
                          borderRadius: "8px",
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                      <Legend
                        layout="horizontal"
                        align="center"
                        verticalAlign="bottom"
                        iconType="circle"
                        wrapperStyle={{
                          paddingTop: "10px",
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "250px",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#004f6c"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default PieChartComponent;
