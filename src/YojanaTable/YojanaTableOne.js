import React, { useRef } from "react";
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

const YojanaTableOne = () => {
  const tableRef = useRef();
  const headingRef = useRef();

  const downloadPDF = () => {
    const heading = headingRef.current;
    const table = tableRef.current;

    // Convert heading to image
    html2canvas(heading, { scale: 2 }).then((headingCanvas) => { // Increase scale for better quality
      const headingImgData = headingCanvas.toDataURL("image/png");

      // Convert table to image
      html2canvas(table, { scale: 2 }).then((tableCanvas) => { // Increase scale for better quality
        const tableImgData = tableCanvas.toDataURL("image/png");
        const pdf = new jsPDF("l", "mm", "a4");

        const imgWidth = 297; // Width of A4 page in mm
        const pageHeight = 210; // Height of A4 page in mm
        const margin = 10; // Margin in mm

        // Calculate dimensions for heading
        const headingHeight = (headingCanvas.height * imgWidth) / headingCanvas.width;

        // Add heading image
        pdf.addImage(headingImgData, "PNG", margin, margin, imgWidth - 2 * margin, headingHeight);

        // Calculate dimensions for table
        const tableHeight = (tableCanvas.height * imgWidth) / tableCanvas.width;

        // Check if the table fits on the same page
        if (headingHeight + 2 * margin + tableHeight > pageHeight) {
          // If not, add heading on the first page and the table on the next
          pdf.addPage();
        }

        // Add table image with margins
        pdf.addImage(tableImgData, "PNG", margin, headingHeight + 2 * margin, imgWidth - 2 * margin, tableHeight);

        pdf.save("yojana-table-one.pdf");
      });
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
        ref={headingRef}
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
        माहे एप्रिल व मे २०२४ या कालावधीमध्‍ये अवेळी पाऊस/गारपीठ/वादळी वारे/विज पडुन मयत जनावरांचा तपशिल
      </Typography>
     
      <TableContainer
        component={Paper}
        sx={{ width: "90%", marginLeft: "6.5%" }}
        ref={tableRef}
      >
        <Table
          sx={{ minWidth: 650, border: 1, borderColor: "grey.400" }}
          aria-label="simple table"
        >
          <TableHead sx={{ background: "rgb(224 224 224 / 57%);" }}>
            <TableRow>
              {[
                "अ. क्र",
                "तालुका",
                "मयत झालेल्‍या जनावरांची संख्‍या",
                "PM झालेल्‍या जनावरांची संख्‍या",
                "बील तयार झालेली संख्‍या",
                "कोषागारामध्‍ये दाखल बिलाची संख्‍या",
                "रजिस्‍ट्रेशन झालेली संख्‍या",
                "प्रलंबित",
                "पशुधन मालकास निधी वितरण संख्‍या",
                "शेरा",
              ].map((header) => (
                <TableCell
                  key={header}
                  className="ff_yatra"
                  align="center"
                  sx={{
                    border: 1,
                    borderColor: "grey.400",
                    padding: "8px",
                    fontSize: { xs: "0.875rem", sm: "0.975rem" },
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                id: 1,
                taluka: "जालना",
                details: [12, 12, 9, 9, 0, 12, 0, ""],
              },
              {
                id: 2,
                taluka: "बदनापुर",
                details: [8, 3, 3, 0, 0, 8, 0, ""],
              },
              {
                id: 3,
                taluka: "भोकरदन",
                details: [42, 42, 20, 20, 20, 42, 0, ""],
              },
              {
                id: 4,
                taluka: "जाफ्राबाद",
                details: [18, 18, 10, 10, 3, 18, 0, "माहीती अप्राप्‍त"],
              },
              {
                id: 5,
                taluka: "परतुर",
                details: [6, 6, 6, 6, 0, 5, 1, ""],
              },
              {
                id: 6,
                taluka: "मंठा",
                details: [7, 6, 5, 2, 0, 7, 0, ""],
              },
              {
                id: 7,
                taluka: "अंबड",
                details: [11, 8, 8, 0, 0, 11, 0, ""],
              },
              {
                id: 8,
                taluka: "घनसावंगी",
                details: [ 21, 20, 15,15, 0, 21,0, ""],
              },
              {
                id: "",
                taluka: "एकुण",
                details: [ 125, 115, 76, 62, 23, 124,1, ""],
              },
            ].map((row) => (
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
                {row.details.map((detail, index) => (
                  <TableCell
                    key={index}
                    className="ff_yatra"
                    align="center"
                    sx={{
                      border: 1,
                      borderColor: "grey.400",
                      padding: "8px",
                    }}
                  >
                    {detail}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{display:"flex", justifyContent:"end", marginRight: "3.5%", marginTop:"1%" }}>
        <Button
          variant="contained"
          sx={{ marginBottom: "20px", backgroundColor: "#028A0F" }}
          onClick={downloadPDF}  
        >
          Download PDF
        </Button>
      </Box>
    </Box>
  );
};

export default YojanaTableOne;
