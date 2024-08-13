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
import TopBar from "../../TopBar/TopBar";

const YojanaTableFour = () => {
  return (
    <Box
      sx={{
        paddingLeft: { xs: "20px", sm: "10px" },
        marginTop: { xs: "50px", sm: "80px" },
      }}
    >
      {/* <TopBar /> */}

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
        संजय गांधी निराधार अनुदान योजना दिनांक 18/06/2024 अखेर डी.बी.टी पोर्टल
        कामाचा तपशिल
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
                Taluka Name
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
                SGY TOTAL BENEFICIARY
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
                पोर्टलवर अपलोड लाभार्थी संख्‍या
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
                आधार प्रमाणीकरण लाभार्थी संख्‍या
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
                अपलोड करणे प्रंलबीत लाभार्थी संख्‍या
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
                पोर्टलवरील अपलोड लाभार्थी संख्‍यापैकी आधार प्रमाणीकरण बाकी
                लाभार्थी संख्‍या
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
                अपलोड लाभार्थी टक्‍केवारी%
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
                BHOKARDAN
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                4807
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1803
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                379
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                3004
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1424
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                37.51
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
                BADNAPUR
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                3460
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                784
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                429
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                2676
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                355
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                22.66
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
                PARTUR
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1593
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                357
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                181
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1236
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                176
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                22.41
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
                MANTHA
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1988
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                436
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                15
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                1552
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                421
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                21.93
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
                3196
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                588
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                408
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                2608
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                180
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                18.4
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
                AMBAD
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                5980
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                954
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                263
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                5026
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                691
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                15.95
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
                GHASWANGI
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                4942
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                355
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                264
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                4587
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                91
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                7.18
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
                JALNA R
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                4366
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                9
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                JALNA U
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
              >
                8700
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ padding: "8px" }}
              >
                1009
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ padding: "8px" }}
              >
                588
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ padding: "8px" }}
              >
                12057
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ padding: "8px" }}
              >
                421
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ padding: "8px" }}
              >
                7.72
              </TableCell>
            </TableRow>

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
                sx={{ borderColor: "grey.400", padding: "8px" ,color:"#1976d2"}}
              >
                {" "}
                Total
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px",color:"#1976d2" }}
              >
                39032
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px",color:"#1976d2" }}
              >
                6286
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px",color:"#1976d2" }}
              >
                2527
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px",color:"#1976d2" }}
              >
                32746
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" ,color:"#1976d2"}}
              >
                3759
              </TableCell>
              <TableCell
                className="ff_yatra"
                align="center"
                sx={{ border: 1, borderColor: "grey.400", padding: "8px" ,color:"#1976d2"}}
              >
               16.1
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default YojanaTableFour;
