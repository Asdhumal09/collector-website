// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Box,
// } from "@mui/material";
// import TopBar from "../TopBar/TopBar";

// const YojanaTableOne = () => {
//   return (
//     <Box
//       sx={{
//         paddingLeft: { xs: "20px", sm: "10px" },
//         marginTop: { xs: "50px", sm: "80px" },
//       }}
//     >
//       <TopBar />
//       <Typography
//         sx={{
//           fontSize: {
//             xs: "20px",
//             sm: "1.5rem",
//           },
//         }}
//         width={"90%"}
//         marginLeft={"5%"}
//         variant="h5"
//         align="center"
//         gutterBottom
//         pt={1}
//         className="ff_yatra"
//       >
//         टँकर,विहीर व बोअर अधिग्रहण सदयस्थिती 
//       </Typography>
//       <TableContainer
//         component={Paper}
//         sx={{ width: "90%", marginLeft: "6.5%" }}
//       >
//         <Table
//           sx={{ minWidth: 650, border: 1, borderColor: "grey.400" }}
//           aria-label="simple table"
//         >
//           <TableHead sx={{ background: "rgb(224 224 224 / 57%);" }}>
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
//                 अ. क्र
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
//                 तालुका
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
//                 टॅंकर सुरु असलेल्‍या गावांची/ वाडयांची लोकसंख्‍या
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
//                 टॅंकर सुरु असलेल्‍या गावाची संख्‍या
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
//                 टॅंकर सुरु असलेल्‍या वाडयांची संख्‍या
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
                 
//                 <TableCell 
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 0, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
                 
//               </TableCell> 
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
//                 विहीरीची संख्‍या
//               </TableCell> 
//               </TableCell> 
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
//                 खाजगी  विहीर अधिग्रहण 
//                 <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
//                 गावांची संख्‍या
//               </TableCell> 
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px", fontSize:{xs: "0.875rem", sm: "0.975rem"} }}
//               >
//                 विहीरीची संख्‍या
//               </TableCell> 
//               </TableCell> 
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 1
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 1
//               </TableCell>
              
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 2
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 3
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 4
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 5
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 end
//               </TableCell>
               
//             </TableRow>
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 2
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 जालना
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 123490
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 41
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 3
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 0
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 0
//               </TableCell>

//             </TableRow>
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 2
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 बदनापुर
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 8
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 3
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 3
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 0
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 0
//               </TableCell>
               
//             </TableRow>
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 3
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 भोकरदन
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 42
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 42
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 20
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 20
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 20
//               </TableCell>
               
//             </TableRow>

//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 4
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 जाफ्राबाद
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 18
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 18
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 10
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 10
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 3
//               </TableCell>
              
//             </TableRow> 
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 5
//               </TableCell>
              
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 परतुर
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 6
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 6
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 6
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 6
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 0
//               </TableCell>
              
//             </TableRow>
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 6
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 मंठा
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 7
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 6
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 5
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 2
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 0
//               </TableCell>
               
//             </TableRow>
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 7
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 अंबड
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 11
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 8
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 8
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 0
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 0
//               </TableCell>
              
//             </TableRow>
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 8
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 घनसावंगी
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 21
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 20
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 15
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 15
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 0
//               </TableCell>
               
//             </TableRow>
//             <TableRow>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ borderColor: "grey.400", padding: "8px" }}
//                 color="red"
//               >
//                 एकुण
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 125
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 115
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 76
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 62
//               </TableCell>
//               <TableCell
//                 className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 23
//               </TableCell>
              
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default YojanaTableOne;
