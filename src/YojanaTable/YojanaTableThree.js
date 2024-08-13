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
import TopBar from "../TopBar/TopBar";

const YojanaTableThree = () => {
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
        {/* टँकर,विहीर व बोअर अधिग्रहण सदयस्थिती */}
        Add Heading here
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ width: "90%", marginLeft: "6.5%" }}
      >
        <Table
          sx={{ minWidth: 650, border: 1, borderColor: "grey.400" }}
          aria-label="simple table"
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
                Block
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
                House Hold Employed
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
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                2
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                3
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                4
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                AMBAD
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1278
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                144356
              </TableCell>
               
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                2
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                {/* बदनापुर */}
                BADNAPUR
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                943
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                101417
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                3
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                {/* भोकरदन */}
                BHOKARDAN
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                327
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                35704
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                4
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              > 
              GHANSAVANGI
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                3692
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                683624
              </TableCell>
              
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                5
              </TableCell>

              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                JAFRABAD
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                131
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                14444
              </TableCell>
               
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                6
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
               JALNA
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1618
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                192919
              </TableCell>
               
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                7
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                MANTHA
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                653
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                94970
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                8
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                PARTUR
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                6358
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1264076
              </TableCell>
               
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ borderColor: "grey.400", padding: "8px" }}
                color="red"
              >
                
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ borderColor: "grey.400", padding: "8px", color:"#1976d2" }}
              > Total</TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px", color:"#1976d2" }}
              >
                15000
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px", color:"#1976d2" }}
              >
                2531510
              </TableCell>
              
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default YojanaTableThree;
