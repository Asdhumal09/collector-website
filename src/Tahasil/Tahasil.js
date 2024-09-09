import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  Button,
  Grid,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import apiClient from "../apiClient/ApiClient";
import TopBar from "../TopBar/TopBar";
import MapImage from "../images/map-color-name.svg";
import Logo from "../Tahasil/logo.png";
import {
  Close as CloseIcon,
  BarChart as BarChartIcon,
  ViewComfy as ViewComfyIcon,
  Apps as AppsIcon,
} from "@mui/icons-material"; // Correct MUI Icons import
import { VscGraph } from "react-icons/vsc";

const Tahasil = () => {
  const [talukas, setTalukas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTalukaId, setModalTalukaId] = useState(null);
  const navigate = useNavigate();
  const buttonWidth = 180;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/getAllTaluka");
        console.log("response", response.data.data[9].taluka_id);
        if (Array.isArray(response.data)) {
          setTalukas(response.data);
        } else if (response.data && Array.isArray(response.data.data)) {
          setTalukas(response.data.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setTalukas([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTalukas([]);
      }
    };

    fetchData();
  }, []);

  const handleNavigate = (talukaId) => {
    if (talukaId == "10") {
      setModalTalukaId(talukaId);
      setIsModalOpen(true);
    } else {
      navigate(`/tahasiltwo/${talukaId}`);
    }
  };

  const handleModalActionGraph = (action) => {
    setIsModalOpen(false);
    navigate(`/sgyOne/${action}`);
  };
  const handleModalActionCard = (action) => {
    setIsModalOpen(false);
    navigate(`/cards/${action}`);
  };
  const handleModalAll = (action) => {
    setIsModalOpen(false);
    navigate(`/tahasiltwo/${action}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Group talukas into rows of decreasing lengths
  const groupedTalukas = [
    talukas.slice(0, 6), // First 6 talukas
    talukas.slice(6, 9), // Next 3 talukas
    talukas.slice(9, 10), // Last taluka
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: "20px", sm: "5%" },
      }}
    >
      <CssBaseline />
      <Box>
        <TopBar />

        <Grid
          container
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* Left Grid */}
          <Grid item xs={12} md={5}>
            <Box
              className="map-image"
              p={2}
              boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 30px 4px;"}
            >
              <img src={MapImage} alt="Map" />
              <Box>
                <img src={Logo} className="logo" />
              </Box>
            </Box>
          </Grid>

          {/* Right Grid */}
          <Grid item xs={12} md={6}>
            <Box p={2} boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 30px 4px;"}>
              <Typography
                variant="h3"
                className="ff_yatra"
                textAlign={"center"}
              >
                तहसील कार्यालये, जालना
              </Typography>
              <Box component="main" sx={{ flexGrow: 1 }}>
                <Box
                  pt={5}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {groupedTalukas.map((group, groupIndex) => (
                    <Grid
                      container
                      spacing={2}
                      justifyContent="center"
                      key={groupIndex}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {group.map((taluka) => (
                        <Grid item key={taluka.id}>
                          <Button
                            onClick={() => handleNavigate(taluka.taluka_id)}
                            className="ff_yatra"
                            variant="contained"
                            sx={{
                              height: taluka.status == 2 ? 60 : 60,
                              fontSize: taluka.status == 2 ? 25 : 22,
                              width: taluka.status == 2 ? 220 : 200,
                              background:
                                taluka.status == 2
                                  ? "linear-gradient(43deg, #FFCC70 0%, #C850C0 46%, #4158D0 100%)"
                                  : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                              transition: "background 0.3s, transform 0.3s",
                              "&:hover": {
                                background:
                                  taluka.status == 2
                                    ? "linear-gradient(43deg, #FFCC70 0%, #C850C0 46%, #4158D0 100%)"
                                    : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                                transform: "scale(1.05)",
                              },
                              m: 1, // Margin for spacing between buttons
                            }}
                          >
                            {taluka.taluka_title}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Custom Modal */}
      {isModalOpen && (
        <Dialog
          open={isModalOpen}
          onClose={handleCloseModal}
          fullWidth
          maxWidth="xs"
          PaperProps={{
            sx: {
              borderRadius: "10px",
              p: 3,
              boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
              background: "#fff",
            },
          }}
        >
          <DialogTitle>
            <Box>
              <Typography variant="h4" textAlign="center" fontSize={"35px"} className="ff_yatra font-bold">
                Select an Action
                <hr className="mt-2 text-black" />
              </Typography>
            </Box>

            <IconButton 
              aria-label="close"
              onClick={handleCloseModal}
              sx={{ position: "absolute", right: 8, top: 8, color: "#000",  fontWeight:"bold", background:"rgb(0 147 255 / 12%)",   }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Box display="flex" justifyContent="center" mb={2}></Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Button
                    className="ff_baloo"
                    onClick={() => handleModalActionGraph(10)}
                    sx={{
                      color: "#000",
                      width: "100%",
                      py: 1.5,
                      fontSize: "25px",
                      textTransform: "none",
                      background:
                        "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
                      borderRadius: "6px",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        background:
                          "linear-gradient(242deg, #8EC5FC 0%, #E0C3FC 100%)",
                        transform: "scale(1.04)",
                      },
                    }}
                    variant="h5"
                    startIcon={<VscGraph />}
                  >
                    View in Graph
                  </Button>

                  <Button
                    className="ff_baloo"
                    onClick={() => handleModalActionCard(10)}
                    sx={{
                      color: "#000",
                      width: "100%",
                      py: 1.5,
                      fontSize: "25px",
                      textTransform: "none",
                      background:
                        " linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
                      borderRadius: "6px",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        background:
                          " linear-gradient(270deg, #A9C9FF 0%, #FFBBEC 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                    variant="contained"
                    startIcon={<ViewComfyIcon />}
                  >
                    View in Cards
                  </Button>

                  <Button
                    className="ff_baloo text-black"
                    onClick={() => handleModalAll(10)}
                    sx={{
                      color: "#000",
                      width: "100%",
                      py: 1.5,
                      fontSize: "25px",
                      textTransform: "none",
                      background:
                        "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
                      borderRadius: "6px",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        background:
                          "linear-gradient(190deg, #FAACA8 0%, #DDD6F3 100%)",
                        transform: "scale(1.05)",
                      },
                    }}
                    variant="contained"
                    startIcon={<AppsIcon />}
                  >
                    View All Yojna
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>

          {/* <DialogActions> */}
          {/* <Button
              onClick={handleCloseModal}
              sx={{
                color: "#000",
                fontWeight: "bold",
                textTransform: "none",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Close
            </Button> */}
          {/* </DialogActions> */}
        </Dialog>
      )}
    </Box>
  );
};

export default Tahasil;
