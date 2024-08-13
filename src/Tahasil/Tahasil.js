import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Container,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import TopBar from "../TopBar/TopBar";
import { useNavigate } from "react-router-dom";

const Tahasil = () => {
  const buttonWidth = 200; // Set a consistent width for all buttons

  // Date And Time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const navigate = useNavigate()

  const handleNavigate = ()=>{
    navigate('/tahasiltwo')
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: "20px", sm: "50px" },
        marginLeft: "25px",
      }}
    >
      <CssBaseline />
      {/* Main Content */}
      <Box
        sx={{
          background: "#fff",
          boxShadow: "0px 0px 12px #d7d7d763",
          padding: { xs: 0, sm: 4 },

          width: "94%",
        }}
      >
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h2"
            textAlign={"center"}
            className="ff_yatra"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              paddingRight: { xs: 0, sm: 10 },
            }}
          >
            तहसील कार्यालये, जालना
          </Typography>

          <Box
            pt={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingRight: { xs: "0", sm: "10" },
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              {/* Row 1: 4 Buttons */}
              <Grid container item spacing={4} justifyContent="center">
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      transition: "background 0.3s, transform 0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    जालना (ग्रामीण)
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      transition: "background 0.3s, transform 0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    जालना (शहर)
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      transition: "background 0.3s, transform 0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    बदनापुर
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      transition: "background 0.3s, transform 0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    भोकरदन
                  </Button>
                </Grid>
              </Grid>
              {/* Row 2: 3 Buttons */}
              <Grid container item spacing={4} justifyContent="center">
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      transition: "background 0.3s, transform 0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    जाफ्राबाद
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      transition: "background 0.3s, transform 0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    परतुर
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      transition: "background 0.3s, transform 0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    मंठा
                  </Button>
                </Grid>
              </Grid>
              {/* Row 3: 2 Buttons */}
              <Grid container item spacing={4} justifyContent="center">
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      transition: "background 0.3s, transform 0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    अंबड
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                      transition: "background 0.3s, transform 0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    घनसावंगी
                  </Button>
                </Grid>
              </Grid>
              {/* Row 4: 1 Button */}
              <Grid container item justifyContent="center">
                <Grid item>
                  <Button onClick={handleNavigate}
                    className="ff_yatra"
                    variant="contained"
                    sx={{
                      height: 60,
                      fontSize: 20,
                      width: buttonWidth,
                      background:
                        "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                      transition: "background 0.3s, transform 0.3s, color 0.3s",
                      color: "#ffffff",
                      "&:hover": {
                        background:
                          "linear-gradient(43deg, #FFCC70 0%, #C850C0 46%, #4158D0 100%)",
                        color: "#ffffff",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    जिल्हा अहवाल
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <TopBar />
    </Box>
  );
};

export default Tahasil;
