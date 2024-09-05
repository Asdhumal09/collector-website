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
import * as XLSX from "xlsx";
import { useDropzone } from "react-dropzone";

const YojanaTableOne = () => {
  const [showSignature, setShowSignature] = useState(true);
  const [title, setTitle] = useState("");
  const [talukas, setTalukas] = useState({});
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
          console.log(data, 'data')

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

  const exportToExcel = () => {
    const allFields = [];
    const fieldTotals = {};
    const excelData = [];

    Object.values(talukas).forEach(taluka => {
      taluka.form_fields.forEach(field => {
        if (!allFields.find(f => f.form_field_id === field.form_field_id)) {
          allFields.push(field);
          fieldTotals[field.form_field_id] = 0;
        }
        const fieldId = field.form_field_id;
        const value = parseFloat(field.value) || 0;
        if (fieldTotals[fieldId] !== undefined) {
          fieldTotals[fieldId] += value;
        }
      });

      const rowData = {
        "तालुका": taluka.taluka_title,
        ...taluka.form_fields.reduce((acc, field) => {
          acc[field.form_field_name] = field.value || "";
          return acc;
        }, {})
      };

      excelData.push(rowData);
    });

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${title}.xlsx`);
  };

  const handleFieldChange = (event, talukaTitle, fieldId) => {
    const newValue = event.target.value;
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
  };

  const handleSubmit = async () => {
    try {
      // Create an array with only form_field_id and value
      const formData = Object.values(talukas).map(taluka => ({
        taluka_title: taluka.taluka_title,
        form_fields: taluka.form_fields.map(field => ({
          form_field_id: field.form_field_id,
          value: field.value
        }))
      }));
  
      // Prepare the request payload
      const requestData = {
        taluka_id: id,
        subyojnaId: subyojnaId,
        formData: formData,
      };
  
      // Log the request data to ensure it is correct
      console.log("Request Data:", requestData);
  
      // Send the data to the server
      await apiClient.post('/inputValues', requestData);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  
  

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Process the Excel data and update the table
      const updatedTalukas = {};
      const headers = jsonData[0];

      jsonData.slice(1).forEach((row) => {
        const talukaTitle = row[0];
        if (talukaTitle) {
          const fields = headers.slice(1).map((header, index) => ({
            form_field_name: header,
            form_field_id: index + 1,
            value: row[index + 1] || ""
          }));

          updatedTalukas[talukaTitle] = {
            taluka_title: talukaTitle,
            form_fields: fields
          };
        }
      });

      setTalukas(updatedTalukas);
    };

    reader.readAsArrayBuffer(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const renderCombinedTalukaTable = () => {
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
              tableLayout: "fixed",
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
                  {allFields.map(field => (
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
                      {role !== '1' ? (
                        <TextField
                          value={taluka.form_fields.find(f => f.form_field_id === field.form_field_id)?.value || ""}
                          onChange={(e) => handleFieldChange(e, taluka.taluka_title, field.form_field_id)}
                          variant="outlined"
                          size="small"
                          sx={{ width: '100%' }}
                        />
                      ) : (
                        taluka.form_fields.find(f => f.form_field_id === field.form_field_id)?.value || ""
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow sx={{ background: "rgb(224 224 224 / 57%);" }}>
                <TableCell
                  align="center"
                  sx={{
                    border: 1,
                    borderColor: "grey.400",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
                  एकूण
                </TableCell>
                {allFields.map(field => (
                  <TableCell
                    key={field.form_field_id}
                    align="center"
                    sx={{
                      border: 1,
                      borderColor: "grey.400",
                      padding: "8px",
                    }}
                  >
                    <strong>{fieldTotals[field.form_field_id]}</strong>
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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
      {/* Table */}
      {renderCombinedTalukaTable()}
  
      {/* Action Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={generatePDF}
          sx={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Download PDF
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={exportToExcel}
          sx={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Download Excel
        </Button>
      </Box>
  
      {/* Submit Button */}
      {role !== '1' && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            sx={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Submit
          </Button>
        </Box>
      )}
       {/* Drag-and-Drop Area */}
       <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed #4caf50",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          padding: "40px",
          textAlign: "center",
          width: "30%",
          mt: 5,
          mb: 3,
          transition: "border 0.3s ease",
          '&:hover': {
            borderColor: "#388e3c",
          }
        }}
      >
        <input {...getInputProps()} />
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          Upload Excel File
        </Typography>
        <Typography variant="body2" sx={{ color: "#777" }}>
          Drag and drop an Excel file here, or click to select a file
        </Typography>
      </Box>
    </Box>
  </>
  
  );
};

export default YojanaTableOne;
