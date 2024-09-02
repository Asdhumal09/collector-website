import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Typography,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import "../App.css";
import TopBar from "../TopBar/TopBar";
import CollectorImg from "../images/collector-img.jpg";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Sector,
} from "recharts"; 

const COLORS_TOTAL = ["#00BFFF", "#87CEEB", "#32CD32", "#3CB371", "#1E90FF", "#00AC4A"];
 
export const data1 = [ 
  { 'x': 'बदनापुर', y: 14.73, text: 'बदनापुर: 14.73%' },
  { 'x': 'भोकरदन', y: 9.73, text: 'भोकरदन: 9.73%' },
  { 'x': 'जाफ्राबाद', y: 6.12, text: 'जाफ्राबाद: 6.12%' },
  { 'x': 'परतुर', y: 7.48, text: 'परतुर: 7.48%' }, 
  { 'x': 'अंबड', y: 6.48, text: 'अंबड: 6.48%' }, 
  { 'x': 'घनसावंगी', y: 9.48, text: 'घनसावंगी: 9.48%' },  
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
  } = props;
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 12;
  const ey = my;

  return (
    <g>
      <text x={ex} y={ey} dy={8} textAnchor="middle" fill="#333">
        {props.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const onPieEnter = (data, index) => {
  console.log(`Pie chart hovered: ${data.name}`);
};

const BarChartComponent = ({ title, data, colors }) => {
  return (
    <div className="flex flex-col items-center shadow-xl">
      <h3 className="text-lg font-bold text-center mb-4">{title}</h3>
      <ResponsiveContainer width={300} height={300}>
        <PieChart>
          <Pie
            activeIndex={0}
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
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const handleTahasil = () => {
    navigate("/tahasil");
  };

  return (
    <Box
      sx={{
        marginTop: { xs: "34px", sm: "56px" },
        position: "relative",
        width: "100vw",
        height: "92vh",
        overflow: "hidden",
      }}
    >
      <CssBaseline />
      <TopBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          maxWidth: "100%",
          maxHeight: "100%",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          className="ff_yatra"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "3.2rem" },
            backgroundColor: "rgb(255 255 255 / 70%)",
            padding: "12px 20px",
            borderRadius: "5px",
            marginLeft: "32px",
          }}
        >
          जिल्हाधिकारी कार्यालय जालना
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid container spacing={2} mt={{ xs: "0%", sm: "6%" }} width={"90%"}>
            <Grid item xs={12} sm={4}>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "rgb(255 255 255 / 80%)",
                    width: "292px",
                    height: "340px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "6px",
                  }}
                >
                  <img
                    src={CollectorImg}
                    alt="District Collector"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      maxWidth: "200px",
                      borderRadius: "6px",
                    }}
                  />
                  <Typography
                    mt={1}
                    px={"14px"}
                    variant="h6"
                    fontWeight={700}
                    fontSize={"16px"}
                    className="ff_baloo"
                    backgroundColor="rgb(0 212 255 / 22%)"
                  >
                    District Collector & Magistrate
                  </Typography>
                  <Typography
                    px={"20px"}
                    variant="h6"
                    fontWeight={500}
                    fontSize={"16px"}
                    className="ff_baloo"
                    backgroundColor= "#44b70029"
                  >
                    Dr. Shrikrishnanath Panchal I.A.S.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  backgroundColor: "rgb(255 255 255 / 80%)",
                  width: "350px",
                  height: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "6px",
                }}
              >
                <Stack direction="column" spacing={2} alignItems="center">
                <Typography variant="h2" className="ff_yatra" sx={{ fontSize: { xs: 18, sm: 45 },}}>
                    विभाग
                    </Typography>
                  <Box>
                   
                    <Button
                      onClick={handleTahasil}
                      className="ff_yatra"
                      variant="contained"
                      sx={{
                        height: { xs: 40, sm: 70 },
                        width: { xs: 40, sm: 300 },
                        fontSize: { xs: 18, sm: 28 },
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      }}
                    >
                      महसुल विभाग
                    </Button>
                  </Box>
                  <Box mt={5}>
                    <Button
                      className="ff_yatra"
                      variant="contained"
                      sx={{
                        height: { xs: 40, sm: 70 },
                        width: { xs: 40, sm: 300 },
                        fontSize: { xs: 18, sm: 28 },
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      }}
                    >
                      इतर विभाग
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} display={"flex"} justifyContent={"end"}>
              <Box
                sx={{
                  backgroundColor: "rgb(255 255 255 / 80%)",
                  width: "350px",
                  height: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "6px",
                  padding: "20px",
                }}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart className="ff_baloo">
                    <Pie
                      activeIndex={0}
                      activeShape={renderActiveShape}
                      data={data1}
                      dataKey="y"
                      nameKey="x"
                      outerRadius="80%"
                      innerRadius="60%"
                      onMouseEnter={onPieEnter}
                    >
                      {data1.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS_TOTAL[index % COLORS_TOTAL.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <div className="backgroundImage">
        <div className="overlay" />
      </div>
    </Box>
  );
};

export default Home;
