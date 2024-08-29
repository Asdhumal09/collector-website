import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import TopBar from '../TopBar/TopBar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported

// Unique data for each chart
const dataSets = [
  { name: 'Jan', value1: 400, value2: 240 },
  { name: 'Feb', value1: 300, value2: 220 },
  { name: 'Mar', value1: 300, value2: 200 },
  { name: 'Apr', value1: 200, value2: 180 },
  { name: 'May', value1: 278, value2: 230 },
  { name: 'Jun', value1: 189, value2: 290 },
  { name: 'Jul', value1: 300, value2: 250 },
  { name: 'Aug', value1: 450, value2: 320 },
  { name: 'Sep', value1: 500, value2: 400 },
  { name: 'Oct', value1: 350, value2: 300 },
];

// Color schemes for each Bar chart
const colorSchemes = [
  ['#FF5733', '#C70039'],
  ['#DAF7A6', '#FFC300'],
  ['#581845', '#900C3F'],
  ['#FF6F61', '#6B5B95'],
  ['#88B04B', '#F7CAC9'],
  ['#FFCCCB', '#D5AAFF'],
  ['#A9DFBF', '#F5B041'],
  ['#E67E22', '#1F618D'],
  ['#EC7063', '#48C9B0'],
  ['#F39C12', '#E74C3C'],
];

const Charts = () => {
  const { id } = useParams(); // Move useParams inside the component
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null); // State to hold API response

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get(`/getAllYojna_subyojna/${id}`);
      console.log('API Response:', response); // Log the API response
      setApiData(response.data); // Store data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, [id]); // Add id as a dependency to refetch if id changes

  const handleAllYojna = (id) => {
    navigate(`/tahasiltwo/${id}`);
  };

  return (
    <div className="p-6 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-16 justify-center flex">
        {/* Bar Chart 1 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 1</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(0, 3)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[0][0]} />
              <Bar dataKey="value2" fill={colorSchemes[0][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart 2 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 2</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(3, 6)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[1][0]} />
              <Bar dataKey="value2" fill={colorSchemes[1][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart 3 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 3</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(6, 9)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[2][0]} />
              <Bar dataKey="value2" fill={colorSchemes[2][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart 4 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 4</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(9, 12)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[3][0]} />
              <Bar dataKey="value2" fill={colorSchemes[3][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart 5 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 5</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(0, 3)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[4][0]} />
              <Bar dataKey="value2" fill={colorSchemes[4][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart 6 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 6</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(3, 6)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[5][0]} />
              <Bar dataKey="value2" fill={colorSchemes[5][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart 7 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 7</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(6, 9)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[6][0]} />
              <Bar dataKey="value2" fill={colorSchemes[6][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart 8 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 8</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(9, 12)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[7][0]} />
              <Bar dataKey="value2" fill={colorSchemes[7][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart 9 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 9</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(0, 3)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[8][0]} />
              <Bar dataKey="value2" fill={colorSchemes[8][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart 10 */}
        <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Bar Chart 10</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataSets.slice(3, 6)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill={colorSchemes[9][0]} />
              <Bar dataKey="value2" fill={colorSchemes[9][1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* View All Charts Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handleAllYojna(10)}
          className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
        >
          View All Charts
        </button>
      </div>

      <TopBar />
    </div>
  );
};

export default Charts;
