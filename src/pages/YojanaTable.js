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
  TextField,
} from "@mui/material";
import TopBar from "./TopBar";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import { useDropzone } from "react-dropzone";
import { FaRegFilePdf } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { getFormFields, getFormFieldsWithTaluka, tableInputValues } from "../utils/axios";
import { useSelector } from "react-redux";

const YojanaTable = () => {
  const [showSignature, setShowSignature] = useState(true);
  const [title, setTitle] = useState("");
  const [talukas, setTalukas] = useState({});
  const [role, setRole] = useState(null);
  // const { id, subyojnaId } = useParams();
  const talukaId = useSelector((state) => state.yojna.tId); 
  console.log(talukaId, "talukaId");
  const subyojnaId = useSelector((state) => state.yojna.subyojnaId); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (talukaId && subyojnaId) {
          let response;
          console.log(talukaId, "talukaIdssssdsds");
          if (talukaId == "10") {
             response = await getFormFields(subyojnaId);
             console.log(response, "responseone");
          } else {
              response = await getFormFieldsWithTaluka(talukaId, subyojnaId);
              console.log(response, "responsetwo");
          }
          const data = response.data.data;
          console.log(data, "data");

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
  }, [talukaId, subyojnaId]);

  const printTable = () => {
    const input = document.getElementById("pdf-table");

    if (!input) {
      console.error("The element #pdf-table was not found.");
      return;
    }

    // Create a new print window
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Table</title>
          <style>
            @page {
              size: 1010mm 1000mm; /* Custom width and height */
            }
            body {
              font-family: Arial, sans-serif;
              margin: 0; /* Remove default margin */
              padding: 20px; /* Padding inside the body */
              font-size: 18px; /* Set default font size for body text */
            }
            .ff_yatra {
              font-size: 24px; /* Set a larger font size for the title */
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #000;
              padding: 12px; /* Increase padding for table cells */
              text-align: left;
              font-size: 18px; /* Set font size for table cells */
            }
            th {
              background-color: #f2f2f2;
            }
            /* Hide elements you don’t want in print */
            .no-print {
              display: none;
            }
        .signature-container {
    display: flex;
    justify-content: flex-end; /* Aligns content to the right */
    margin-top: 32px; /* Adds space above */
    font-family: Arial, sans-serif; /* Sets font family */
    font-size: 40px; /* Set font size for signature */
}
    .signature{
     border: 2px solid #000; /* Add a border with a solid black color */
    padding: 50px 50px; /* Optional: Adds padding inside the border */
    }

          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <div>${input.outerHTML}</div>
          <div class="signature-container">
            <div class="signature">Signature: _________</div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const exportToExcel = () => {
    const allFields = [];
    const fieldTotals = {};
    const excelData = [];

    Object.values(talukas).forEach((taluka) => {
      taluka.form_fields.forEach((field) => {
        if (!allFields.find((f) => f.form_field_id === field.form_field_id)) {
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
        तालुका: taluka.taluka_title,
        ...taluka.form_fields.reduce((acc, field) => {
          acc[field.form_field_name] = field.value || "";
          return acc;
        }, {}),
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
    setTalukas((prevTalukas) => {
      const updatedTalukas = { ...prevTalukas };
      const taluka = updatedTalukas[talukaTitle];
      if (taluka) {
        const field = taluka.form_fields.find(
          (f) => f.form_field_id === fieldId
        );
        if (field) {
          field.value = newValue;
        }
      }
      return updatedTalukas;
    });
  };

  const handleSubmit = async () => {
    alert("Submitting data...");
    try {
      // Create an array with only form_field_id and value
      const formData = Object.values(talukas).map((taluka) => ({
        taluka_title: taluka.taluka_title,
        form_fields: taluka.form_fields.map((field) => ({
          form_field_id: field.form_field_id,
          value: field.value,
        })),
      }));

      // Prepare the request payload
      const requestData = {
        taluka_id: talukaId,
        subyojnaId: subyojnaId,
        formData: formData,
      };

      // Log the request data to ensure it is correct
      console.log("Request Data:", requestData);

      // Send the data to the server
      // await apiClient.post("/inputValues", requestData);
      await tableInputValues({requestData})
      alert("Data submitted successfully!");
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
            value: row[index + 1] || "",
          }));

          updatedTalukas[talukaTitle] = {
            taluka_title: talukaTitle,
            form_fields: fields,
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

    Object.values(talukas).forEach((taluka) => {
      taluka.form_fields.forEach((field) => {
        if (!allFields.find((f) => f.form_field_id === field.form_field_id)) {
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
      <Box id="pdf-table" sx={{ mb: 4, mt: 10 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontSize: "30px", textAlign: "center" }}
          className="ff_yatra"
        >
          {title}
        </Typography>
        <Box
            sx={{ display: "flex", justifyContent: "end", mb:2, gap: 2 , width: "90%", marginLeft: "6.5%" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={printTable}
              sx={{ padding: "6px 14px"}}
              className="no-print"
            >
              Download <FaRegFilePdf className="ms-2"  fontSize={"18px"}/>
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={exportToExcel}
              sx={{ padding: "6px 14px"}}
               className="no-print"
            >
              Download Excel <TbFileExport className="ms-1"  fontSize={"19px"}/>
            </Button>
          </Box>
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
            <TableHead sx={{ background: " rgb(0 147 255 / 7%)" }}>
              <TableRow>
                <TableCell
                  className="ff_yatra"
                  align="center"
                  sx={{
                    border: 1,
                    borderColor: "grey.400",
                    padding: "8px",
                    fontSize: { xs: "0.875rem", sm: "0.975rem" },
                    width: "200px",
                  }}
                >
                  तालुका
                </TableCell>
                {allFields.map((field) => (
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
                      width: "200px",
                    }}
                  >
                    {taluka.taluka_title}
                  </TableCell>
                  {allFields.map((field) => (
                    <TableCell
                      className="ff_baloo"
                      key={field.form_field_id}
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "grey.400",
                        padding: "8px",
                        width: "150px",
                      }}
                    >
                      {role !== "1" ? (
                        <TextField
                          value={
                            taluka.form_fields.find(
                              (f) => f.form_field_id === field.form_field_id
                            )?.value || ""
                          }
                          onChange={(e) =>
                            handleFieldChange(
                              e,
                              taluka.taluka_title,
                              field.form_field_id
                            )
                          }
                          variant="outlined"
                          size="small"
                          sx={{ width: "100%" }}
                        />
                      ) : (
                        taluka.form_fields.find(
                          (f) => f.form_field_id === field.form_field_id
                        )?.value || ""
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow sx={{ background: "rgb(224 224 224 / 30%);" }}>
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
                {allFields.map((field) => (
                  <TableCell
                    className="ff_yatra"
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
      <Box sx={{ mt: 3 }}>
        {/* Table */}
        {renderCombinedTalukaTable()}

        {/* Action Buttons */}

        {/* Submit Button */}
        {role !== "1" && (
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
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            {...getRootProps()}
            sx={{
              border: "2px dashed #4caf50",
              borderRadius: "8px",
              backgroundColor: "#00bf0a05",
              padding: "40px",
              textAlign: "center",
              width: "30%",
              mt: 3,
              mb: 3,
              transition: "border 0.3s ease",
              "&:hover": {
                borderColor: "#388e3c",
              },
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
      </Box>
    </>
  );
};

export default YojanaTable;
