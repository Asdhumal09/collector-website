import React from "react";
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
} from "@mui/material";
import TopBar from "../TopBar/TopBar";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const YojanaTableFour = () => {
  // Data array
  const data = [
    { id: 1, taluka: "अंबड", panchayat: 1278, persondays: 144356 },
    { id: 2, taluka: "बदनापुर", panchayat: 943, persondays: 101417 },
    { id: 3, taluka: "भोकरदन", panchayat: 327, persondays: 35704 },
    { id: 4, taluka: "घनसावंगी", panchayat: 3692, persondays: 683624 },
    { id: 5, taluka: "जाफ्राबाद", panchayat: 131, persondays: 14444 },
    { id: 6, taluka: "जालना", panchayat: 1618, persondays: 192919 },
    { id: 7, taluka: "मंठा", panchayat: 653, persondays: 94970 },
    { id: 8, taluka: "परतुर", panchayat: 6358, persondays: 1264076 },
  ];

  const exportPDF = () => {
    const headingElement = document.getElementById("pdf-heading");
    const tableElement = document.getElementById("pdf-table");

    Promise.all([
      html2canvas(headingElement, { scale: 2 }),
      html2canvas(tableElement, { scale: 2 }),
    ]).then(([headingCanvas, tableCanvas]) => {
      const headingImgData = headingCanvas.toDataURL("image/png");
      const tableImgData = tableCanvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Add heading image to PDF
      const headingWidth = 190; // Width in mm
      const headingHeight =
        (headingCanvas.height * headingWidth) / headingCanvas.width;
      pdf.addImage(headingImgData, "PNG", 10, 10, headingWidth, headingHeight);

      // Add table image to PDF
      const tableImgWidth = 190; // Width in mm (A4 width minus margins)
      const tableImgHeight =
        (tableCanvas.height * tableImgWidth) / tableCanvas.width;
      pdf.addImage(
        tableImgData,
        "PNG",
        10,
        20 + headingHeight,
        tableImgWidth,
        tableImgHeight
      );

      pdf.save("table.pdf");
    });
  };

  return (
    <Box
      sx={{
        paddingLeft: { xs: "20px", sm: "10px" },
        marginTop: { xs: "50px", sm: "80px" },
      }}
    >
      <TopBar />
      <Typography
        id="pdf-heading"
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
        {/* This heading will be included in the PDF */}
        Add Heading here
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ width: "90%", marginLeft: "6.5%" }}
      >
        <Table
          sx={{ minWidth: 650, border: 1, borderColor: "grey.400" }}
          aria-label="simple table"
          id="pdf-table"
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
                }}
              >
                अ. क्र
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{
                  border: 1,
                  borderColor: "grey.400",
                  padding: "8px",
                  fontSize: { xs: "0.875rem", sm: "0.975rem" },
                }}
              >
                तालुका
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{
                  border: 1,
                  borderColor: "grey.400",
                  padding: "8px",
                  fontSize: { xs: "0.875rem", sm: "0.975rem" },
                }}
              >
                पंचायतस्‍तर
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{
                  border: 1,
                  borderColor: "grey.400",
                  padding: "8px",
                  fontSize: { xs: "0.875rem", sm: "0.975rem" },
                }}
              >
                Persondays Generated
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  className="ff_yatra"
                  align="center"
                  sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
                >
                  {row.id}
                </TableCell>
                <TableCell
                  className="ff_yatra"
                  align="center"
                  sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
                >
                  {row.taluka}
                </TableCell>
                <TableCell
                  className="ff_yatra"
                  align="center"
                  sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
                >
                  {row.panchayat}
                </TableCell>
                <TableCell
                  className="ff_yatra"
                  align="center"
                  sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
                >
                  {row.persondays}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ borderColor: "grey.400", padding: "8px" }}
                color="red"
              ></TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ borderColor: "grey.400", padding: "8px" }}
              >
                Total
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                {data.reduce((sum, row) => sum + row.panchayat, 0)}
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                {data.reduce((sum, row) => sum + row.persondays, 0)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
         sx={{display:"flex", justifyContent:"end", marginRight: "3.5%", marginTop:"1%" }}
      >
        <Button  variant="contained"
          sx={{ marginBottom: "20px", backgroundColor: "#028A0F" }} onClick={exportPDF}>
          Download PDF
        </Button>
      </Box>
    </Box>
  );
};

export default YojanaTableFour;
