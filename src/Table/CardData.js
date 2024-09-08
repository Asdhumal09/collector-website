import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import apiClient from "../apiClient/ApiClient";

const Cards = () => {
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
  
    // Log the talukasArray to verify its structure
    console.log("Talukas Array:", talukasArray);
  
    talukasArray.forEach((taluka) => {
      taluka.forEach((item) => {
        const { form_field_name, value = "1" } = item; // Default value to "1" if not provided
        
        // Ensure value is a number
        const numericValue = Number(value);
  
        // Log the current item and its numeric value
        console.log(`Processing item: ${form_field_name}, Value: ${numericValue}`);
  
        // Check if the conversion to a number was successful
        if (!isNaN(numericValue)) {
          if (aggregation[form_field_name]) {
            aggregation[form_field_name] += numericValue;
          } else {
            aggregation[form_field_name] = numericValue;
          }
        } else {
          console.error(`Invalid value for ${form_field_name}: ${value}`);
        }
      });
    });
  
    // Log the aggregation object before converting it
    console.log("Aggregation:", aggregation);
  
    // Convert the aggregation object to an array format for display
    return Object.keys(aggregation).map(key => ({
      form_field_name: key,
      totalSum: aggregation[key],
    }));
  };
  

  return (
    <div className="p-6 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-16 justify-center flex">
        {chartData.length > 0 ? (
          chartData.map((data, index) => {
            // Calculate aggregated data for this yojna
            const aggregatedData = aggregateData(data);

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-lg p-6 border rounded-lg bg-white w-[500px] mb-8"
              >
                <h3 className="text-lg font-semibold text-center mb-4">
                  {data.subyojna_title}
                </h3>


                {aggregatedData.length > 0 ? (
                  aggregatedData.slice(0, 3).map((field, idx) => (
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
                  <p>No data available</p>
                )}

              </div>
            );
          })
        ) : (
          <p>Loading charts...</p>
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

export default Cards;
