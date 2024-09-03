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
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const YojanaTableOne = () => {
  const [showSignature, setShowSignature] = useState(true);
  const [title, setTitle] = useState("");
  const [talukas, setTalukas] = useState({});
  const [editableTalukas, setEditableTalukas] = useState({});
  const [role, setRole] = useState(null);
  const { id, subyojnaId } = useParams();
  
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

            // Create empty editable talukas data
            const emptyEditableTalukas = {};
            Object.keys(data[subyojnaId].talukas).forEach(talukaTitle => {
              emptyEditableTalukas[talukaTitle] = {
                taluka_title: talukaTitle,
                form_fields: data[subyojnaId].talukas[talukaTitle].form_fields.map(field => ({
                  form_field_id: field.form_field_id,
                  form_field_name: field.form_field_name,
                  value: ""
                }))
              };
            });
            setEditableTalukas(emptyEditableTalukas);
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

  const generatePDF = () => {
    const input = document.getElementById("pdf-table");
    
    if (!input) {
      console.error("The element #pdf-table was not found.");
      return;
    }

    html2canvas(input, {
      scale: 2,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 20, 40, imgWidth - 40, imgHeight - 100);

      if (showSignature) {
        const margin = 40;
        pdf.setFontSize(12);
        const yPosition = pdf.internal.pageSize.height - margin;

        pdf.text("Signature: _____________________", pdf.internal.pageSize.width - 150, yPosition, { align: "right" });
      }

      pdf.setFontSize(16);
      pdf.text(title, 20, 20);

      pdf.save("YojanaTable.pdf");
    }).catch(error => {
      console.error("Error generating PDF:", error);
    });
  };

  const handleFieldChange = (event, talukaTitle, fieldId, tableType) => {
    const newValue = event.target.value;
    if (tableType === 'prefilled') {
      setTalukas(prevTalukas => {
        const updatedTalukas = { ...prevTalukas };
        const taluka = updatedTalukas[talukaTitle];
        if (taluka) {
          const field = taluka.form_fields.find(f => f.form_field_id === fieldId);
          if (field) {
            field.value = newValue;
          }
        }
        return updatedTalukas;
      });
    } else {
      setEditableTalukas(prevTalukas => {
        const updatedTalukas = { ...prevTalukas };
        const taluka = updatedTalukas[talukaTitle];
        if (taluka) {
          const field = taluka.form_fields.find(f => f.form_field_id === fieldId);
          if (field) {
            field.value = newValue;
          }
        }
        return updatedTalukas;
      });
    }
  };

  const handleSubmit = async () => {
    try {
      await apiClient.post('/updateTalukas', talukas);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const renderEditableTalukaTable = () => {
    return (
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
          className="ff_yatra"
        >
          Editable Talukas
        </Typography>

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
            aria-label="editable taluka table"
          >
            <TableHead sx={{ background: "rgb(224 224 224 / 57%);" }}>
              <TableRow>
                <TableCell
                  className="ff_yatra"
                  align="center"
                  sx={{
                    border: 1,
                    borderColor: "grey.400",
                    padding: "8px",
                    fontSize: { xs: "0.875rem", sm: "0.975rem" },
                    fontWeight: 'bold',
                    width: "200px"
                  }}
                >
                  तालुका
                </TableCell>
                {Object.values(editableTalukas).length > 0 && 
                  Object.values(editableTalukas)[0].form_fields.map(field => (
                    <TableCell
                      key={field.form_field_id}
                      className="ff_yatra"
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "grey.400",
                        padding: "8px",
                        fontSize: { xs: "0.875rem", sm: "0.975rem" },
                        width: "150px",
                      }}
                    >
                      {field.form_field_name}
                    </TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(editableTalukas).map((taluka) => (
                <TableRow key={taluka.taluka_title}>
                  <TableCell
                    align="center"
                    sx={{
                      border: 1,
                      borderColor: "grey.400",
                      padding: "8px",
                      width: "200px"
                    }}
                  >
                    {taluka.taluka_title}
                  </TableCell>
                  {taluka.form_fields.map(field => (
                    <TableCell
                      key={field.form_field_id}
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "grey.400",
                        padding: "8px",
                        width: "150px",
                      }}
                    >
                      <TextField
                        value={field.value || ""}
                        onChange={(e) => handleFieldChange(e, taluka.taluka_title, field.form_field_id, 'editable')}
                        variant="outlined"
                        size="small"
                        sx={{ width: '100%' }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

  const renderPrefilledTalukaTable = () => {
    const allFields = [];
    const fieldTotals = {};

    Object.values(talukas).forEach(taluka => {
      taluka.form_fields.forEach(field => {
        if (!allFields.find(f => f.form_field_id === field.form_field_id)) {
          allFields.push(field);
          fieldTotals[field.form_field_id] = 0;
        }
        const fieldId = field.form_field_id;
        const value = parseFloat(field.value) || 0;
        fieldTotals[fieldId] += value;
      });
    });

    return (
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
          className="ff_yatra"
        >
          Prefilled Talukas
        </Typography>

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
            aria-label="prefilled taluka table"
          >
            <TableHead sx={{ background: "rgb(224 224 224 / 57%);" }}>
              <TableRow>
                <TableCell
                  className="ff_yatra"
                  align="center"
                  sx={{
                    border: 1,
                    borderColor: "grey.400",
                    padding: "8px",
                    fontSize: { xs: "0.875rem", sm: "0.975rem" },
                    fontWeight: 'bold',
                    width: "200px"
                  }}
                >
                  तालुका
                </TableCell>
                {allFields.map(field => (
                  <TableCell
                    key={field.form_field_id}
                    className="ff_yatra"
                    align="center"
                    sx={{
                      border: 1,
                      borderColor: "grey.400",
                      padding: "8px",
                      fontSize: { xs: "0.875rem", sm: "0.975rem" },
                      width: "150px",
                    }}
                  >
                    {field.form_field_name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(talukas).map((taluka) => (
                <TableRow key={taluka.taluka_title}>
                  <TableCell
                    align="center"
                    sx={{
                      border: 1,
                      borderColor: "grey.400",
                      padding: "8px",
                      width: "200px"
                    }}
                  >
                    {taluka.taluka_title}
                  </TableCell>
                  {taluka.form_fields.map(field => (
                    <TableCell
                      key={field.form_field_id}
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "grey.400",
                        padding: "8px",
                        width: "150px",
                      }}
                    >
                      <TextField
                        value={field.value || ""}
                        onChange={(e) => handleFieldChange(e, taluka.taluka_title, field.form_field_id, 'prefilled')}
                        variant="outlined"
                        size="small"
                        sx={{ width: '100%' }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    border: 1,
                    borderColor: "grey.400",
                    padding: "8px",
                    fontWeight: "bold",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  Total
                </TableCell>
                {allFields.map(field => (
                  <TableCell
                    key={`total-${field.form_field_id}`}
                    align="center"
                    sx={{
                      border: 1,
                      borderColor: "grey.400",
                      padding: "8px",
                      fontWeight: "bold",
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    {fieldTotals[field.form_field_id]}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

  return (
    <>
      <TopBar />
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "background.paper",
          padding: 2,
          mt: "90px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
          className="ff_yatra"
        >
          {title}
        </Typography>
        
        {renderEditableTalukaTable()}

        {renderPrefilledTalukaTable()}

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: 2 }}
            onClick={generatePDF}
          >
            Generate PDF
          </Button>
          {role === "admin" && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Submit Data
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default YojanaTableOne;
    