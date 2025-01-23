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
} from "@mui/material";
import TopBar from "./TopBar";

const data = [
  { srNo: 1, name: "COLLECTOR OFFICE JALNA", file: 16, receipt: 76, total: 92 },
  {
    srNo: 2,
    name: "TAHSIL OFFICE GHANSAWANGI",
    file: 7,
    receipt: 59,
    total: 66,
  },
  { srNo: 3, name: "TAHSIL OFFICE AMBAD", file: 14, receipt: 22, total: 36 },
  { srNo: 4, name: "SDO BHOKARDAN", file: 11, receipt: 17, total: 28 },
  { srNo: 5, name: "TAHSIL OFFICE JALNA", file: 21, receipt: 4, total: 25 },
  { srNo: 6, name: "TAHSIL OFFICE JAFRABAD", file: 12, receipt: 2, total: 14 },
  { srNo: 7, name: "TAHSIL OFFICE BADNAPUR", file: 0, receipt: 5, total: 5 },
  { srNo: 8, name: "TAHSIL OFFICE BHOKARDAN", file: 1, receipt: 4, total: 5 },
  { srNo: 9, name: "TAHSIL OFFICE PARTUR", file: 2, receipt: 0, total: 2 },
  { srNo: 10, name: "SDO PARTUR", file: 1, receipt: 0, total: 1 },
  { srNo: 11, name: "SDO JALNA", file: 0, receipt: 0, total: 0 },
  { srNo: 12, name: "SDO AMBAD", file: 0, receipt: 0, total: 0 },
  { srNo: 13, name: "TAHSIL OFFICE MANTHA", file: 0, receipt: 1, total: 1 },
];

const SimpleTable = () => {
  return (
    <>
      <TopBar />
      <Box className="mt-20">
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "800px", margin: "20px auto" }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              padding: "10px",  
              backgroundColor: "#f5f5f5",
              fontSize: "35px",
            }}
            className="ff_yatra"
          >
            eOffice
          </Typography>
          <Table sx={{ border: 1, borderColor: "#ccc" }}>
            <TableHead
              sx={{
                backgroundColor: "#f0f0f0",
                border: 1,
                borderColor: "#ccc",
              }}
            >
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    padding: "10px",
                    fontSize: "18px",
                    border: 1,
                    borderColor: "#ccc",
                  }}
                  className="ff_yatra"
                >
                  Sr No
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    padding: "10px",
                    fontSize: "18px",
                    border: 1,
                    borderColor: "#ccc",
                  }}
                  className="ff_yatra"
                >
                  Name Of Office
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    padding: "10px",
                    fontSize: "18px",
                    border: 1,
                    borderColor: "#ccc",
                  }}
                  className="ff_yatra"
                >
                  File
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    padding: "10px",
                    fontSize: "18px",
                    border: 1,
                    borderColor: "#ccc",
                  }}
                  className="ff_yatra"
                >
                  Receipt
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    padding: "10px",
                    fontSize: "18px",
                    border: 1,
                    borderColor: "#ccc",
                  }}
                  className="ff_yatra"
                >
                  Grand Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.srNo}
                  sx={{ border: 1, borderColor: "#ccc" }}
                >
                  <TableCell
                    align="center"
                    sx={{ padding: "10px", border: 1, borderColor: "#ccc" }}
                    className="ff_baloo"
                  >
                    {row.srNo}
                  </TableCell>
                  <TableCell
                    sx={{ padding: "10px", border: 1, borderColor: "#ccc" }}
                    className="ff_baloo"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ padding: "10px", border: 1, borderColor: "#ccc" }}
                    className="ff_baloo"
                  >
                    {row.file}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ padding: "10px", border: 1, borderColor: "#ccc" }}
                    className="ff_baloo"
                  >
                    {row.receipt}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ padding: "10px", border: 1, borderColor: "#ccc" }}
                    className="ff_baloo"
                  >
                    {row.total}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow
                sx={{
                  backgroundColor: "#f9f9f9",
                  border: 1,
                  borderColor: "#ccc",
                }}
              >
                <TableCell
                  colSpan={2}
                  align="right"
                  sx={{
                    fontWeight: "bold",
                    padding: "10px",
                    border: 1,
                    borderColor: "#ccc",
                  }}
                  className="ff_yatra"
                >
                  Grand Total
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    padding: "10px",
                    border: 1,
                    borderColor: "#ccc",
                  }}
                  className="ff_yatra"
                >
                  {data.reduce((sum, row) => sum + row.file, 0)}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    padding: "10px",
                    border: 1,
                    borderColor: "#ccc",
                  }}
                  className="ff_yatra"
                >
                  {data.reduce((sum, row) => sum + row.receipt, 0)}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    padding: "10px",
                    border: 1,
                    borderColor: "#ccc",
                  }}
                  className="ff_yatra"
                >
                  {data.reduce((sum, row) => sum + row.total, 0)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default SimpleTable;
