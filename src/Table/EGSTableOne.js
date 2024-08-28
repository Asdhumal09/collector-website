import { Box, Container } from "@mui/material";
import React from "react";
import TopBar from "../TopBar/TopBar";
const EGSTableOne = () => {
  const data = [
    {
      id: 1,
      sr_no: 1,
      block: 2,
      house_holde_eployed: 3,
      persondays_penerated: 4,
    },
    {
      id: 1,
      sr_no: 1,
      block: "Akshay",
      house_holde_eployed: 228,
      persondays_penerated: "akshay@example.com",
    },
  ];

  return (
    <Box  className="ff_baloo"  sx={{ width: "90%", marginLeft: "6.5%", marginTop:"6.5%" }}>
      {/* <TopBar/> */}
      <h2 className="text-xl font-bold m-4 text-center">Households Completed 100 days in Financial Year -2023-2024</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-1 px-6 border border-gray-300 text-center">
                Sr.No
              </th>
              <th className="py-1 px-6 border border-gray-300 text-center">
                Block
              </th>
              <th className="py-1 px-6 border border-gray-300 text-center">
                House Hold Employed
              </th>
              <th className="py-1 px-6 border border-gray-300 text-center">
                Persondays Generated
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-1 px-6 border border-gray-300">
                  {item.sr_no}
                </td>
                <td className="py-1 px-6 border border-gray-300">
                  {item.block}
                </td>
                <td className="py-1 px-6 border border-gray-300">
                  {item.house_holde_eployed}
                </td>
                <td className="py-1 px-6 border border-gray-300">
                  {item.persondays_penerated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default EGSTableOne;
