import React, { useState } from "react";
import { Box } from "@mui/material";
import TopBar from "../TopBar/TopBar";

const EGSTableTwoInput = () => {
  const [data, setData] = useState([
    {
      id: 1,
      taluka: '',
      panchayatWorks: '',
      panchayatAttendance: '',
      tahasilWorks: '',
      tahasilAttendance: '',
      totalWorks: '',
      totalAttendance: '',
      panchayatCapacityWorks: '',
      panchayatCapacityAttendance: '',
      tahasilCapacityWorks: '',
      tahasilCapacityAttendance: '',
      totalCapacityWorks: '',
      totalCapacityAttendance: ''
    }
  ]);

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    setData(prevData => {
      const updatedData = [...prevData];
      updatedData[index][field] = value;
      return updatedData;
    });
  };

  const handleSubmit = () => {
    console.log('Table Data:', data);
  };

  return (
    <Box className="ff_baloo" sx={{ width: "90%", marginLeft: "6.5%", marginTop: "6.5%", overflowX: "auto"}}>
      <TopBar/>
      <h2 className="text-xl font-bold m-4 text-center">Custom Table with Input Fields</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th rowSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              अ.क्र.
            </th>
            <th rowSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              तालुका
            </th>
            <th colSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              पंचायतस्तर
            </th>
            <th colSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              तहसीलस्तर
            </th>
            <th colSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              एकूण
            </th>
            <th colSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              पंचायतस्तर क्षमता
            </th>
            <th colSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              तहसीलस्तर क्षमता
            </th>
            <th rowSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              एकुण कामे 
            </th>
            <th rowSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              एकुण मजुर क्षमता 
            </th>
          </tr>
          <tr>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मनुष्य उपस्थिति</th>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मनुष्य उपस्थिति</th>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मनुष्य उपस्थिति</th>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मनुष्य क्षमता</th>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मनुष्य क्षमता</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.id}</td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.taluka}
                  onChange={(e) => handleChange(e, index, 'taluka')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.panchayatWorks}
                  onChange={(e) => handleChange(e, index, 'panchayatWorks')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.panchayatAttendance}
                  onChange={(e) => handleChange(e, index, 'panchayatAttendance')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.tahasilWorks}
                  onChange={(e) => handleChange(e, index, 'tahasilWorks')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.tahasilAttendance}
                  onChange={(e) => handleChange(e, index, 'tahasilAttendance')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.totalWorks}
                  onChange={(e) => handleChange(e, index, 'totalWorks')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.totalAttendance}
                  onChange={(e) => handleChange(e, index, 'totalAttendance')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.panchayatCapacityWorks}
                  onChange={(e) => handleChange(e, index, 'panchayatCapacityWorks')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.panchayatCapacityAttendance}
                  onChange={(e) => handleChange(e, index, 'panchayatCapacityAttendance')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.tahasilCapacityWorks}
                  onChange={(e) => handleChange(e, index, 'tahasilCapacityWorks')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.tahasilCapacityAttendance}
                  onChange={(e) => handleChange(e, index, 'tahasilCapacityAttendance')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.totalCapacityWorks}
                  onChange={(e) => handleChange(e, index, 'totalCapacityWorks')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
              <td className="py-2 px-6 border border-gray-300">
                <input
                  type="text"
                  value={item.totalCapacityAttendance}
                  onChange={(e) => handleChange(e, index, 'totalCapacityAttendance')}
                  className="w-full border border-gray-300 p-2 rounded focus-input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit} className="m-4 p-2 bg-blue-500 text-white rounded">Submit</button>
    </Box>
  );
};

export default EGSTableTwoInput;
