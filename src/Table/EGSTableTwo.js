import React from "react";
import { Box } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from 'recharts';

// Data Preparation
const data = [
  { id: 1, taluka: 'अंबड ', panchayatWorks: 0, panchayatAttendance: 0, tahasilWorks: 18, tahasilAttendance: 2560, totalWorks: 18, totalAttendance: 2560, panchayatCapacityWorks: 3122, panchayatCapacityAttendance: 52540, tahasilCapacityWorks: 946, tahasilCapacityAttendance: 38400, totalCapacityWorks: 4068, totalCapacityAttendance: 90940 },
  { id: 2, taluka: 'बदनापुर ', panchayatWorks: 100, panchayatAttendance: 900, tahasilWorks: 18, tahasilAttendance: 2560, totalWorks: 18, totalAttendance: 2560, panchayatCapacityWorks: 3122, panchayatCapacityAttendance: 52540, tahasilCapacityWorks: 946, tahasilCapacityAttendance: 38400, totalCapacityWorks: 4068, totalCapacityAttendance: 90940 },
  { id: 2, taluka: 'भोकरदन ', panchayatWorks: 100, panchayatAttendance: 900, tahasilWorks: 18, tahasilAttendance: 2560, totalWorks: 18, totalAttendance: 2560, panchayatCapacityWorks: 3122, panchayatCapacityAttendance: 52540, tahasilCapacityWorks: 946, tahasilCapacityAttendance: 38400, totalCapacityWorks: 4068, totalCapacityAttendance: 90940 },
  { id: 2, taluka: 'घनसावंगी ', panchayatWorks: 100, panchayatAttendance: 900, tahasilWorks: 18, tahasilAttendance: 2560, totalWorks: 18, totalAttendance: 2560, panchayatCapacityWorks: 3122, panchayatCapacityAttendance: 52540, tahasilCapacityWorks: 946, tahasilCapacityAttendance: 38400, totalCapacityWorks: 4068, totalCapacityAttendance: 90940 },
  { id: 2, taluka: 'जाफ्राबाद ', panchayatWorks: 100, panchayatAttendance: 900, tahasilWorks: 18, tahasilAttendance: 2560, totalWorks: 18, totalAttendance: 2560, panchayatCapacityWorks: 3122, panchayatCapacityAttendance: 52540, tahasilCapacityWorks: 946, tahasilCapacityAttendance: 38400, totalCapacityWorks: 4068, totalCapacityAttendance: 90940 },
  { id: 2, taluka: 'जालना ', panchayatWorks: 100, panchayatAttendance: 900, tahasilWorks: 18, tahasilAttendance: 2560, totalWorks: 18, totalAttendance: 2560, panchayatCapacityWorks: 3122, panchayatCapacityAttendance: 52540, tahasilCapacityWorks: 946, tahasilCapacityAttendance: 38400, totalCapacityWorks: 4068, totalCapacityAttendance: 90940 },
  { id: 2, taluka: 'मंठा  ', panchayatWorks: 100, panchayatAttendance: 900, tahasilWorks: 18, tahasilAttendance: 2560, totalWorks: 18, totalAttendance: 2560, panchayatCapacityWorks: 3122, panchayatCapacityAttendance: 52540, tahasilCapacityWorks: 946, tahasilCapacityAttendance: 38400, totalCapacityWorks: 4068, totalCapacityAttendance: 90940 },
  { id: 2, taluka: 'परतुर  ', panchayatWorks: 100, panchayatAttendance: 900, tahasilWorks: 18, tahasilAttendance: 2560, totalWorks: 18, totalAttendance: 2560, panchayatCapacityWorks: 3122, panchayatCapacityAttendance: 52540, tahasilCapacityWorks: 946, tahasilCapacityAttendance: 38400, totalCapacityWorks: 4068, totalCapacityAttendance: 90940 },
];

// Active shape rendering function
const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value, percent } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy - 20}
        dy={8}
        textAnchor="middle"
        fill={fill}
        style={{ fontSize: '16px', fontWeight: 'bold' }}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="#000"
        strokeWidth={2}
        strokeOpacity={0.2}
        style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
      />
      <text
        x={cx}
        y={cy + 10}
        textAnchor="middle"
        fill="#333"
        style={{ fontSize: '14px', fontWeight: 'bold' }}
      >
        {`Count: ${value}`}
      </text>
      <text
        x={cx}
        y={cy + 30}
        textAnchor="middle"
        fill="#999"
        style={{ fontSize: '12px' }}
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Log the payload to check the structure and the availability of properties
    console.log("Payload data:", payload[0].payload);

    // Destructuring properties with a fallback to avoid undefined values
    const { name, totalCapacityAttendance = "N/A", totalCapacityWorks = "N/A" } = payload[0].payload;

    return (
      <div className="custom-tooltip" style={{ backgroundColor: "#fff", padding: "10px", border: "1px solid #ccc" }}>
        <p className="label"><strong>{name}</strong></p>
        <p>{`Total Capacity Attendance: ${totalCapacityAttendance}`}</p>
        <p>{`Total Capacity Works: ${totalCapacityWorks}`}</p>
      </div>
    );
  }

  return null;
};


const EGSTableTwo = () => {
  const [activeIndexTotal, setActiveIndexTotal] = React.useState(0);
  const [activeIndexPortal, setActiveIndexPortal] = React.useState(0);
  const [activeIndexAadhaar, setActiveIndexAadhaar] = React.useState(0);

  const onPieEnterTotal = (_, index) => setActiveIndexTotal(index);
  const onPieEnterPortal = (_, index) => setActiveIndexPortal(index);
  const onPieEnterAadhaar = (_, index) => setActiveIndexAadhaar(index);

  // Pie Chart Data Preparation
  const totalBeneficiariesData = data.map(taluka => ({
    name: taluka.taluka,
    value: taluka.panchayatWorks,
  }));

  const portalUploadsData = data.map(taluka => ({
    name: taluka.taluka,
    value: taluka.panchayatAttendance,
  }));

  const aadhaarAuthenticationData = data.map(taluka => ({
    name: taluka.taluka,
    value: taluka.tahasilWorks,
  }));

  // Custom Colors
  const COLORS = ['#1A3636', '#40534C', '#677D6A', '#D6BD98'];

  return (
    <Box className="ff_baloo" sx={{ width: "90%", marginLeft: "6.5%", marginTop: "6.5%", overflowX: "auto" }}>
      <h2 className="text-xl font-bold m-4 text-center">साप्‍ताहिक मजुर उपस्थिती अहवाल दि 15.05.2024 ते 23.05.2024</h2>
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
              पंचायतस्तर
            </th>
            <th colSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              तहसीलस्तर
            </th>
            <th rowSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              एकुण कामे
            </th>
            <th rowSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              एकुण मजुर क्षमता
            </th>
            <th rowSpan="2" className="py-2 px-6 border border-gray-300 text-center">
              अभिप्राय
            </th>
          </tr>
          <tr>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मजुर उपस्थिति</th>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मजुर उपस्थिति</th>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मजुर उपस्थिति</th>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मजुर क्षमता</th>
            <th className="py-2 px-6 border border-gray-300 text-center">कामे</th>
            <th className="py-2 px-6 border border-gray-300 text-center">मजुर क्षमता</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.id}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.taluka}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.panchayatWorks}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.panchayatAttendance}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.tahasilWorks}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.tahasilAttendance}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.totalWorks}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.totalAttendance}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.panchayatCapacityWorks}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.panchayatCapacityAttendance}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.tahasilCapacityWorks}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.tahasilCapacityAttendance}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.totalCapacityWorks}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.totalCapacityAttendance}</td>
              <td className="py-2 px-6 border border-gray-300 text-center">{item.totalWorks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Box display="flex" justifyContent="space-around" mt={4}>
        <ResponsiveContainer width="30%" height={300}>
          <PieChart>
            <Pie
              activeIndex={activeIndexTotal}
              activeShape={renderActiveShape}
              data={totalBeneficiariesData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnterTotal}
            >
              {totalBeneficiariesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="30%" height={300}>
          <PieChart>
            <Pie
              activeIndex={activeIndexPortal}
              activeShape={renderActiveShape}
              data={portalUploadsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              dataKey="value"
              onMouseEnter={onPieEnterPortal}
            >
              {portalUploadsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="30%" height={300}>
          <PieChart>
            <Pie
              activeIndex={activeIndexAadhaar}
              activeShape={renderActiveShape}
              data={aadhaarAuthenticationData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#ffc658"
              dataKey="value"
              onMouseEnter={onPieEnterAadhaar}
            >
              {aadhaarAuthenticationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default EGSTableTwo;
