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
    {
      office: "Collector office (Revenue), Jalna",
      totalComplaints: 222,
      resolved: 219,
      pending: 3,
      pendingPercent: "1%",
    },
    {
      office: "Sub-Divisional Office (Revenue), Ambad",
      totalComplaints: 6,
      resolved: 5,
      pending: 1,
      pendingPercent: "17%",
    },
    {
      office: "Sub-Divisional Office (Revenue), Jalna",
      totalComplaints: 13,
      resolved: 3,
      pending: 10,
      pendingPercent: "77%",
    },
    {
      office: "Sub-Divisional Office (Revenue), Bhokardan",
      totalComplaints: 8,
      resolved: 7,
      pending: 1,
      pendingPercent: "13%",
    },
    {
      office: "Sub-Divisional Office (Revenue), Partur",
      totalComplaints: 7,
      resolved: 2,
      pending: 5,
      pendingPercent: "71%",
    },
    {
      office: "Taluka Office (Revenue), Ambad",
      totalComplaints: 15,
      resolved: 14,
      pending: 1,
      pendingPercent: "7%",
    },
    {
      office: "Taluka Office (Revenue), Badnapur",
      totalComplaints: 10,
      resolved: 7,
      pending: 3,
      pendingPercent: "30%",
    },
    {
      office: "Taluka Office (Revenue), Bhokardan",
      totalComplaints: 29,
      resolved: 29,
      pending: 0,
      pendingPercent: "0%",
    },
    {
      office: "Taluka Office (Revenue), Ghansawangi",
      totalComplaints: 12,
      resolved: 12,
      pending: 0,
      pendingPercent: "0%",
    },
    {
      office: "Taluka Office (Revenue), Jafrabad",
      totalComplaints: 23,
      resolved: 22,
      pending: 1,
      pendingPercent: "4%",
    },
    {
      office: "Taluka Office (Revenue), Jalna",
      totalComplaints: 11,
      resolved: 11,
      pending: 0,
      pendingPercent: "0%",
    },
    {
      office: "Taluka Office (Revenue), Mantha",
      totalComplaints: 6,
      resolved: 5,
      pending:1,
      pendingPercent: "17%",
    },
    {
      office: "Taluka Office (Revenue), Partur",
      totalComplaints: 3,
      resolved: 3,
      pending: 0,
      pendingPercent: "0%",
    },
    {
      office: "Total",
      totalComplaints: 365,
      resolved: 339,
      pending: 26,
      pendingPercent: "6%",
    },
  ];

const tableStyles = {
  container: { maxWidth: "1000px", margin: "20px auto" },
  header: {
    padding: "10px",
    fontWeight: "bold",
    backgroundColor: "#f5f5f5",
    fontSize: "35px",
  },
  table: { border: 1, borderColor: "#ccc" },
  cell: { fontSize: "16px", padding: "8px", border: 1, borderColor: "#ccc" },
};

const ApaleSarkarTable = () => {
  return (
    <Box className="mt-20">
      <TopBar />
      <TableContainer component={Paper} sx={tableStyles.container}>
        <Typography
          variant="h6"
          align="center"
          className="ff_yatra"
          sx={{ fontSize: "35px", backgroundColor: "#f5f5f5", padding: "10px" }}
        >
         आपल सरकार
        </Typography>

        <Table>
          <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
            <TableRow>
              {[
                "Sr No",
                "कार्यालय",
                "एकूण तक्रारी",
                "निस्कारीत केले",
                "प्रलंबित",
                "प्रलंबित %",
              ].map((header, index) => (
                <TableCell
                  key={index}
                  align={index === 0 ? "center" : index === 1 ? "left" : "center"}
                  sx={{ ...tableStyles.cell, fontSize: "20px" }}
                  className="ff_yatra"
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                sx={
                  row.office === "Total"
                    ? { backgroundColor: "#fff" }
                    : null
                }
              >
                <TableCell
                  align="center"
                  sx={{ ...tableStyles.cell}}
                className="ff_baloo">
                  {index + 1}
                </TableCell>
                <TableCell
                  sx={{
                    ...tableStyles.cell,
                    fontFamily:
                      row.office === "Total"
                        ? "YatraOne, sans-serif"
                        : "Baloo, sans-serif",
                  }}
                  className={row.office === "Total" ? "ff_yatra" : "ff_baloo"}
                >
                  {row.office}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    ...tableStyles.cell,
                    fontFamily:
                      row.office === "Total"
                        ? "YatraOne, sans-serif"
                        : "Baloo, sans-serif",
                  }}
                  className={row.office === "Total" ? "ff_yatra" : "ff_baloo"}
                >
                  {row.totalComplaints}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    ...tableStyles.cell,
                    fontFamily:
                      row.office === "Total"
                        ? "YatraOne, sans-serif"
                        : "Baloo, sans-serif",
                  }}
                  className={row.office === "Total" ? "ff_yatra" : "ff_baloo"}
                >
                  {row.resolved}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    ...tableStyles.cell,
                    fontFamily:
                      row.office === "Total"
                        ? "YatraOne, sans-serif"
                        : "Baloo, sans-serif",
                  }}
                  className={row.office === "Total" ? "ff_yatra" : "ff_baloo"}
                >
                  {row.pending}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    ...tableStyles.cell,
                    fontFamily:
                      row.office === "Total"
                        ? "YatraOne, sans-serif"
                        : "Baloo, sans-serif",
                  }}
                  className={row.office === "Total" ? "ff_yatra" : "ff_baloo"}
                >
                  {row.pendingPercent}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ApaleSarkarTable;
