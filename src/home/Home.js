import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, CssBaseline, Typography, Button, Grid, Stack } from "@mui/material";
import "../App.css";
import TopBar from "../TopBar/TopBar"; 
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const Home = () => {
  const navigate = useNavigate();

  const handleTahasil = () => {
    navigate("/tahasil");
  };

  const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];
  
  const size = {
    width: 500,
    height: 250,
  };  
  
  return (
    <Box 
      sx={{ 
        marginTop: { xs: "44px", sm: "76px" },
      }}
    >
      <CssBaseline />
      <TopBar />
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "25px",
        }}
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          className="ff_yatra"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" ,backgroundColor:"rgb(25 26 26 / 6%)", padding:"10px 40px",borderRadius:"5px"},
          }}
        >
          जिल्हाधिकारी कार्यालय, जालना
        </Typography>
        <Box
          pt={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid container spacing={2} mt={{ xs: "0%", sm: "5%" }}>
            <Grid item xs={12} sm={6}>
              {/* PieChart */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <PieChart
                  series={[
                    {
                      arcLabel: (item) => `${item.label} (${item.value})`,
                      arcLabelMinAngle: 45,
                      data,
                    },
                  ]}
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: 'white',
                      fontWeight: 'bold',
                    },
                  }}
                  {...size}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2} // Adjust the spacing as needed
                  alignItems="center"
                >
                  <Button
                    onClick={handleTahasil}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: { xs: 40, sm: 60 },
                      fontSize: { xs: 18, sm: 20 },
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                    }}
                  >
                    महसुल विभाग
                  </Button>

                  <Button
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: { xs: 40, sm: 60 },
                      fontSize: { xs: 18, sm: 20 },
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                    }}
                  >
                    इतर विभाग
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <div className="map">

      </div>
    </Box>
  );
};

export default Home;
