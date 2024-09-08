import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import apiClient from "../apiClient/ApiClient";
import { Chart } from "react-google-charts";

// Color schemes for each pie chart
const colorSchemes = [
  ["#FF5733", "#C70039", "#900C3F"],
  ["#DAF7A6", "#FFC300", "#FF5733"],
  ["#581845", "#900C3F", "#C70039"],
  ["#FF6F61", "#6B5B95", "#FF5733"],
  ["#88B04B", "#F7CAC9", "#FFC300"],
  ["#FFCCCB", "#D5AAFF", "#C70039"],
  ["#A9DFBF", "#F5B041", "#900C3F"],
  ["#E67E22", "#1F618D", "#FF5733"],
  ["#EC7063", "#48C9B0", "#900C3F"],
  ["#F39C12", "#E74C3C", "#C70039"],
  ["#DAF7A6", "#FFC300", "#FF5733"],
  ["#581845", "#900C3F", "#C70039"],
];

const Charts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chartData, setChartData] = useState([]);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await apiClient.get(`/getChartData`);
      setChartData(response.data.data); // Assume API returns an array of objects similar to dataSets
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts or when 'id' changes
  }, [id]);

  const handleAllYojna = (id) => {
    navigate(`/tahasiltwo/${id}`);
  };

  // Helper function to calculate aggregated sums by form_field_name
  const aggregateData = (data) => {
    const aggregation = {};

    const talukasArray = Array.isArray(data.talukas)
      ? data.talukas
      : typeof data.talukas === "object" && data.talukas !== null
        ? Object.values(data.talukas)
        : [];

    talukasArray.forEach((taluka) => {
      taluka.forEach((item) => {
        const { form_field_name, value = "1" } = item; // Default value to "1" if not provided
        const numericValue = Number(value);

        if (!isNaN(numericValue)) {
          if (aggregation[form_field_name]) {
            aggregation[form_field_name] += numericValue;
          } else {
            aggregation[form_field_name] = numericValue;
          }
        }
      });
    });

    return Object.keys(aggregation).map(key => ({
      form_field_name: key,
      totalSum: aggregation[key],
    }));
  };

  // Function to convert aggregated data to pie chart format
  const formatPieData = (data) => {
    const aggregatedData = aggregateData(data);
    const pieData = [["Form Field Name", "Total"]];

    // Take only the first three items
    aggregatedData.slice(0, 3).forEach((field) => {
      pieData.push([field.form_field_name, field.totalSum]);
    });

    return pieData;
  };

  return (
    <div className="ms-16 mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chartData.length > 0 ? (
          chartData.map((data, index) => {
            // Format pie chart data
            const pieData = formatPieData(data);
            const colors = colorSchemes[index % colorSchemes.length]; // Use color schemes in a cyclic manner

            const slices = pieData.slice(1).map((_, idx) => ({
              color: colors[idx] || "#000000", // Default color if not enough colors
            }));

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-lg p-4 md:p-6 border rounded-lg bg-white"
                style={{width:"450px"}}
              >
                <h3 className="text-lg font-semibold text-center mb-4">
                  {data.subyojna_title}
                </h3>

                {/* Pie Chart */}
                <Chart
                  chartType="PieChart"
                  data={pieData}
                  options={{
                    pieHole: 1, // Optional: Donut chart
                    is3D: true, // Optional: 3D effect
                    slices: slices.reduce((acc, _, idx) => {
                      acc[idx] = { color: colors[idx] || "#000000" }; // Apply color
                      return acc;
                    }, {}),
                    legend: {
                      position: "bottom",
                      alignment: "center",
                      textStyle: {
                        fontSize: 14,
                      },
                    },
                    chartArea: { width: "90%", height: "70%" },
                    pieSliceTextStyle: {
                      color: "white",
                      fontSize: 16,
                    },
                    backgroundColor: "#f4f4f4",
                  }}
                  width="100%"
                  height="300px"
                />

                {/* Display form field names and the total sum */}
                {aggregateData(data).length > 0 ? (
                  aggregateData(data).slice(0, 3).map((field, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center w-full border-b py-2"
                    >
                      <span className="text-sm text-gray-600">
                        {field.form_field_name}
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        Total: {field.totalSum}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No data available</p>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 text-center">Loading charts...</p>
        )}
      </div>

      {/* View All Charts Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handleAllYojna(10)}
          className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
        >
          View All Yojna
        </button>
      </div>

      <TopBar />
    </div>
  );
};

export default Charts;
