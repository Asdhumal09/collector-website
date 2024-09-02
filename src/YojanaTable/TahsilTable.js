import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
  TextField
} from "@mui/material";
import TopBar from "../TopBar/TopBar";
import apiClient from "../apiClient/ApiClient";
import { useParams } from "react-router-dom";

const TahsilTable = () => {
  const [showSignature, setShowSignature] = useState(true);
  const [title, setTitle] = useState("");
  const [talukas, setTalukas] = useState({});
  const [role, setRole] = useState(null);
  const [formFieldValues, setFormFieldValues] = useState({});
  const { id, subyojnaId } = useParams();
  const editable = role !== '1'; // Determine if fields should be editable based on role

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id && subyojnaId) {
          let response;
          if (id === '10') {
            response = await apiClient.get(`/getAllformfields/${subyojnaId}`);
          } else {
            response = await apiClient.get(`/getformfields_with_taluka/${id}/${subyojnaId}`);
          }
          const data = response.data.data;
          console.log("dataaaaa", data);

          if (data[subyojnaId]) {
            setTitle(data[subyojnaId].title || "");
            setTalukas(data[subyojnaId].talukas || {});
            
            // Initialize form field values
            const initialValues = {};
            Object.values(data[subyojnaId].talukas).forEach(taluka => {
              taluka.form_fields.forEach(field => {
                initialValues[field.form_field_id] = field.value || "";
              });
            });
            setFormFieldValues(initialValues);
          } else {
            console.error("No data found for the given SubyojnaID");
          }
        } else {
          console.error("ID or SubyojnaID is missing");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, [id, subyojnaId]);

  const handleInputChange = (e, fieldId) => {
    const newValue = e.target.value;
    setFormFieldValues(prevValues => ({
      ...prevValues,
      [fieldId]: newValue
    }));
  };

  const handleSubmit = async () => {
    try {
      await apiClient.post('/updateTalukas', formFieldValues);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const renderTalukaTable = (taluka) => {
    return (
      <Box id="pdf-table" sx={{ mb: 4 }} key={taluka.taluka_title}>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
          className="ff_yatra"
        >
          {taluka.taluka_title}
        </Typography>

        <Box sx={{ position: 'relative', mb: 4 }}>
          <TableContainer
            component={Paper}
            sx={{ width: "90%", marginLeft: "6.5%" }}
          >
            <Table
              sx={{ 
                minWidth: 650, 
                border: 1, 
                borderColor: "grey.400", 
                tableLayout: "fixed",
              }}
              aria-label="simple table"
            >
              <TableHead sx={{ background: "rgb(224 224 224 / 57%);" }}>
                <TableRow>
                  {taluka.form_fields.map(field => (
                    <TableCell
                      key={field.form_field_id}
                      className="ff_yatra"
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "grey.400",
                        padding: "8px",
                        fontSize: { xs: "0.875rem", sm: "0.975rem" },
                        width: "200px"
                      }}
                    >
                      {field.form_field_name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {taluka.form_fields.map(field => (
                    <TableCell
                      key={field.form_field_id}
                      className="ff_yatra"
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "grey.400",
                        padding: "8px",
                        width: "300px"
                      }}
                    >
                      {editable ? (
                        <TextField
                          value={formFieldValues[field.form_field_id] || ""}
                          onChange={(e) => handleInputChange(e, field.form_field_id)}
                          variant="outlined"
                          size="small"
                          sx={{ width: '100%' }}
                        />
                      ) : (
                        field.value || ""
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {role !== '1' && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              sx={{
                position: 'absolute',
                bottom: "-50%",
                right: "65px",  // Adjust spacing as needed
                backgroundColor: theme => theme.palette.primary.main, // Button background color
                color: '#fff', // Text color
                '&:hover': {
                  backgroundColor: theme => theme.palette.primary.dark, // Button color on hover
                },
                boxShadow: theme => theme.shadows[4], // Optional: add shadow for better visibility
                
                padding: theme => theme.spacing(1.5, 3), // Adjust padding for better button size
              }}
            >
              Submit Changes
            </Button>
          )}
        </Box>
      </Box>
    );
  };

  if (!title || Object.keys(talukas).length === 0) {
    return (
      <Box
        sx={{
          paddingLeft: { xs: "20px", sm: "10px" },
          marginTop: { xs: "50px", sm: "80px" },
        }}
      >
        <TopBar />
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "1.5rem",
            },
          }}
          width={"90%"}
          marginLeft={"5%"}
          variant="h5"
          align="center"
          gutterBottom
          pt={1}
          className="ff_yatra"
        >
          Loading data...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        paddingLeft: { xs: "20px", sm: "10px" },
        marginTop: { xs: "50px", sm: "80px" },
      }}
    >
      <TopBar />
      {Object.values(talukas).map(taluka => renderTalukaTable(taluka))}
    </Box>
  );
};

export default TahsilTable;
