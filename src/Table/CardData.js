import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Card, CardContent, CardActions, Typography, Grid, CircularProgress } from "@mui/material";
import TopBar from "../TopBar/TopBar";
import apiClient from "../apiClient/ApiClient";

const Cards = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await apiClient.get(`/getChartData`);
      console.log(response.data.data, "responses")
      setChartData(response.data.data); // Assume API returns an array of objects similar to dataSets
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts or when 'id' changes
  }, [id]);

  const handleAllYojna = (id) => {
    navigate(`/tahasiltwo/${10}/tableone/${id}`);
  };

  // Helper function to calculate aggregated sums by form_field_name
  const aggregateData = (data) => {
    const aggregation = {};

    const talukasArray = Array.isArray(data.talukas)
      ? data.talukas
      : typeof data.talukas === "object" && data.talukas !== null
        ? Object.values(data.talukas)
        : [];

    talukasArray.forEach((taluka) => {
      taluka.forEach((item) => {
        const { form_field_name, value = "1" } = item; // Default value to "1" if not provided

        const numericValue = Number(value);

        if (!isNaN(numericValue)) {
          if (aggregation[form_field_name]) {
            aggregation[form_field_name] += numericValue;
          } else {
            aggregation[form_field_name] = numericValue;
          }
        } else {
          console.error(`Invalid value for ${form_field_name}: ${value}`);
        }
      });
    });

    return Object.keys(aggregation).map(key => ({
      form_field_name: key,
      totalSum: aggregation[key],
    }));
  };

  return (
    <Box pl={10} pr={6} pt={5} mt={6} bgcolor="#8080805c">
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {chartData.length > 0 ? (
            chartData.map((data, index) => {
              const aggregatedData = aggregateData(data);

              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    mb={4}
                    sx={{
                      '&:not(:last-child)': {
                        marginLeft: { xs: 0, sm: "90px" }, // Adjust left margin as needed
                      }
                    }}
                  >
                    <Card
                      sx={{
                        width: 450, // Set fixed width
                        height: 270, // Set fixed height to ensure all cards have the same height
                        transition: 'transform 0.3s',
                        overflow: 'hidden', // Prevent content overflow
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0px 12px 24px rgba(0,0,0,0.2)',
                        },
                        borderRadius: '12px',
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                      }}
                    >
                      <CardContent sx={{
                        flex: 1,
                        overflowY: 'auto',
                        /* Custom scrollbar styling */
                        '&::-webkit-scrollbar': {
                          width: '5px', // Width of the scrollbar
                        },
                        '&::-webkit-scrollbar-track': {
                          background: '#f1f1f1', // Background color of the track
                          borderRadius: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: '#888', // Color of the scroll thumb
                          borderRadius: '8px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                          background: '#555', // Color when hovered
                        }
                      }}>
                        <Typography variant="h6" component="div" gutterBottom>
                          {data.subyojna_title}
                        </Typography>
                        {aggregatedData.length > 0 ? (
                          aggregatedData.slice(0, 3).map((field, idx) => (
                            <Box
                              key={idx}
                              display="flex"
                              flexDirection={{ xs: "column", sm: "row" }} // Column on small screens, row on larger screens
                              justifyContent="space-between"
                              alignItems="center"
                              py={1}
                              borderBottom="1px solid #e0e0e0"
                              sx={{
                                width: '100%', // Ensure full width for responsiveness
                                maxWidth: '100%', // Prevent overflow on smaller screens
                              }}
                            >
                              <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                                {field.form_field_name}
                              </Typography>
                              <Typography variant="body2" fontWeight="bold" color="text.primary" sx={{ flex: 1, textAlign: { xs: "left", sm: "right" } }}>
                                Total: {field.totalSum}
                              </Typography>
                            </Box>
                          ))
                        ) : (
                          <Typography variant="body2" color="text.secondary">
                            No data available
                          </Typography>
                        )}
                      </CardContent>

                      <CardActions>
                      <Button
                          size="small"
                          color="primary"
                          onClick={() => handleAllYojna(data.subyojna_id)}
                          sx={{ 
                            flexGrow: 1,
                            color: '#FFFFFF', // White text
                            backgroundColor: '#0056b3', // Professional blue
                            '&:hover': {
                              backgroundColor: '#004080', // Darker blue on hover
                            }
                          }}
                        >
                          सर्व माहिती पहा
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>

              );
            })
          ) : (
            <Typography variant="body1" align="center">No data available</Typography>
          )}
        </Grid>
      )}
      <TopBar />
    </Box>
  );
};

export default Cards;
