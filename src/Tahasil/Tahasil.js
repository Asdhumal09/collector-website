import React, { useEffect, useState } from "react";
import { Box, CssBaseline, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import apiClient from "../apiClient/ApiClient";
import TopBar from "../TopBar/TopBar";

const Tahasil = () => {
  const [talukas, setTalukas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTalukaId, setModalTalukaId] = useState(null);
  const navigate = useNavigate();
  const buttonWidth = 200;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/getAllTaluka");
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
    if (talukaId == '10') {
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
    talukas.slice(0, 4),
    talukas.slice(4, 7),
    talukas.slice(7, 9),
    talukas.slice(9, 10),
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
        marginTop: { xs: "20px", sm: "50px" },
        marginLeft: "25px",
      }}
    >
      <CssBaseline />
      <Box
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
              flexDirection: "column",
              alignItems: "center",
              paddingRight: { xs: "0", sm: "10" },
            }}
          >
            {groupedTalukas.map((group, groupIndex) => (
              <Grid
                container
                spacing={4}
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
                        height: 60,
                        fontSize: 20,
                        width: buttonWidth,
                        background:
                          taluka.status === 2
                            ? "linear-gradient(43deg, #FFCC70 0%, #C850C0 46%, #4158D0 100%)"
                            : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                        transition: "background 0.3s, transform 0.3s",
                        "&:hover": {
                          background:
                            taluka.status === 2
                              ? "linear-gradient(43deg, #FFCC70 0%, #C850C0 46%, #4158D0 100%)"
                              : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,147,255,1) 100%)",
                          transform: "scale(1.05)",
                        },
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
      <TopBar />

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Select an Action</h2>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleModalActionGraph(10)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                View in Graph
              </button>
              <button
                onClick={() => handleModalActionCard(10)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
              >
                View in Cards
              </button>
              <button
                onClick={() => handleModalAll(10)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              >
                View All Yojna
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="map">

      </div>
    </Box>
    
  );
};
 
export default Tahasil;
