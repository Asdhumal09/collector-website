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

// const YojanaTable = () => {
//   return (
//     <Box sx={{ paddingLeft:{xs:"20px" ,sm:"10px"} ,marginTop:{xs:'50px', sm:'80px'}}}>
//       <TopBar />
//       <Typography  sx={{
//         fontSize: {
//           xs: '20px',  
//           sm: '2.125rem', 
//         }}} variant="h4" align="center" gutterBottom pt={1} className="ff_yatra"> 
//         आधार सीडिंग AAY, PHH व APL-F
//         </Typography>
//       <TableContainer
//         component={Paper}
//         sx={{ width: "90%", marginLeft: "6.5%"}}
//       >
        
//         <Table
//           sx={{ minWidth: 650, border: 1, borderColor: "grey.400" }}
//           aria-label="simple table"
//         >
//           <TableHead sx={{ background: "rgb(224 224 224 / 57%);"}}>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 अ. क्र
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 तालुका
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 आधार सीडिंग झालेले शिधाप्रत्रिका
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 एकूण लाभार्थी
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 आधार सीडिंग झालेले लाभार्थी
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 % आधार सीडिंग शिधाप्रत्रिका
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 आधार सिडिंग साठी प्रलंबित शिधाप्रत्रिका
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 % आधार सीडिंग लाभार्थी
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 आधार सिडिंग साठी प्रलंबित लाभार्थी
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell   className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 १
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 २
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 ३
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 ४
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 ५
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 ६
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                     ७
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 ८
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 ९
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 १०
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 १०
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 ११
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               >
//                 १२
//               </TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//               <TableCell className="ff_yatra"
//                 align="center"
//                 sx={{ border: 1, borderColor: "grey.400", padding: "8px" }}
//               ></TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default YojanaTable;
