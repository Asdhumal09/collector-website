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
  Button
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
  const { id, subyojnaId } = useParams(); // Extract ID and SubyojnaID from URL parameters

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
          console.log("dataaaaa", data)

          if (data[subyojnaId]) {
            setTitle(data[subyojnaId].title || "");
            setTalukas(data[subyojnaId].talukas || {});
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

      pdf.addImage(imgData, "PNG", 20, 40, imgWidth - 40, imgHeight - 100); // Adjust positioning

      if (showSignature) {
        const margin = 40;
        pdf.setFontSize(12);
        const yPosition = pdf.internal.pageSize.height - margin;

        pdf.text("Signature: _____________________", pdf.internal.pageSize.width - 150, yPosition, { align: "right" });
      }

      // Add title to the PDF
      pdf.setFontSize(16);
      pdf.text(title, 20, 20); // Adjust position if needed

      pdf.save("YojanaTable.pdf");
    }).catch(error => {
      console.error("Error generating PDF:", error);
    });
  };

  // Function to render a combined table when ID is 10
  const renderCombinedTalukaTable = () => {
    const allFields = [];
    const fieldTotals = {}; // Object to keep track of totals for each field

    Object.values(talukas).forEach(taluka => {
      taluka.form_fields.forEach(field => {
        if (!allFields.find(f => f.form_field_id === field.form_field_id)) {
          allFields.push(field);
          fieldTotals[field.form_field_id] = 0; // Initialize total for this field
        }
        const fieldId = field.form_field_id;
        const value = parseFloat(field.value) || 0; // Convert to number
        if (fieldTotals[fieldId] !== undefined) {
          fieldTotals[fieldId] += value;
        }
      });
    });

    return (
      <Box id="pdf-table" sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
          className="ff_yatra"
        >
          {title}
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
              tableLayout: "fixed", // Ensure fixed table layout
            }}
            aria-label="combined taluka table"
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
                    width: "200px" // Set desired width
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
                      width: "150px", // Set desired width
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
                      width: "200px" // Set desired width
                    }}
                  >
                    {taluka.taluka_title}
                  </TableCell>
                  {allFields.map(field => (
                    <TableCell
                      key={field.form_field_id}
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "grey.400",
                        padding: "8px",
                        width: "150px", // Set desired width
                      }}
                    >
                      {taluka.form_fields.find(f => f.form_field_id === field.form_field_id)?.value || ""}
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
                    fontWeight: 'bold',
                    width: "200px" // Set desired width
                  }}
                >
                  Total
                </TableCell>
                {allFields.map(field => (
                  <TableCell
                    key={field.form_field_id}
                    align="center"
                    sx={{
                      border: 1,
                      borderColor: "grey.400",
                      padding: "8px",
                      width: "150px", // Set desired width
                    }}
                  >
                    {fieldTotals[field.form_field_id]?.toFixed(2) || "0"}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

  // Function to render a taluka's data (for non-ID 10 case)
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

        <TableContainer
          component={Paper}
          sx={{ width: "90%", marginLeft: "6.5%" }}
        >
          <Table
            sx={{ 
              minWidth: 650, 
              border: 1, 
              borderColor: "grey.400", 
              tableLayout: "fixed", // Ensure fixed table layout
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
                      width: "200px" // Set desired width
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
                      width: "300px" // Set desired width
                    }}
                  >
                    {field.value}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={generatePDF}
          sx={{ mb: 2, padding: "10px 20px", fontSize: "1rem" }}
        >
          Download as PDF
        </Button>
      </Box>
      {id === '10' ? (
        renderCombinedTalukaTable()
      ) : (
        <>
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
            {title}
          </Typography>

          {/* Render the tables for all talukas individually */}
          {Object.values(talukas).map(taluka => renderTalukaTable(taluka))}
        </>
      )}
    </Box>
  );
};

export default YojanaTableOne;
