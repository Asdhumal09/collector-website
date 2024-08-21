import React, { useState } from 'react';

const EditableTable = () => {
  // Define hidden values with indices
  const hiddenValues = {
    nameId: 0,
    ageId: 1,
    emailId: 2,
    city1Indices: [3, 4, 5, 6],
    city2Indices: [7, 8, 9, 10],
  };

  // Initialize table data state
  const [data, setData] = useState([
    {
      id: 1,
      [hiddenValues.nameId]: '',
      [hiddenValues.ageId]: '',
      [hiddenValues.emailId]: '',
      city1: ['', '', '', ''],
      city2: ['', '', '', ''],
    },
    {
      id: 2,
      [hiddenValues.nameId]: '',
      [hiddenValues.ageId]: '',
      [hiddenValues.emailId]: '',
      city1: ['', '', '', ''],
      city2: ['', '', '', ''],
    },
  ]);

  const handleChange = (e, index, field, subField) => {
    const { value } = e.target;
    setData(prevData => {
      const updatedData = [...prevData];
      if (subField !== undefined) {
        updatedData[index][field][subField] = value;
      } else {
        updatedData[index][field] = value;
      }
      return updatedData;
    });
  };

  const handleSubmit = () => {
    const transformedData = data.map(item => {
      const transformedItem = {};
      Object.keys(item).forEach(key => {
        // Transform city1 and city2 arrays
        if (Array.isArray(item[key])) {
          item[key].forEach((subItem, subIndex) => {
            const cityIndex = key === 'city1' ? hiddenValues.city1Indices[subIndex] : hiddenValues.city2Indices[subIndex];
            transformedItem[cityIndex] = subItem;
          });
        } else {
          // Transform fields based on hiddenValues
          const hiddenIndex = Object.values(hiddenValues).flat().find(index => index === parseInt(key));
          if (hiddenIndex !== undefined) {
            transformedItem[hiddenIndex] = item[key];
          }
        }
      });
      return transformedItem;
    });

    console.log('Transformed Data:', transformedData);
  };

  return (
    <div>
      <h2 className="text-xl font-bold m-4 text-center">Editable Table</h2>
      <div className='overflow-x-auto'>
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th rowSpan="3" className="py-2 px-6 border-t-0 border-l border-r border-gray-300 text-center">ID</th>
              <th rowSpan="3" className="py-2 px-6 border-t-0 border-l border-r border-gray-300 text-center">Name <input type="hidden" value={hiddenValues.nameId} /></th>
              <th rowSpan="3" className="py-2 px-6 border-t-0 border-l border-r border-gray-300 text-center">Age <input type="hidden" value={hiddenValues.ageId} /></th>
              <th rowSpan="3" className="py-2 px-6 border-t-0 border-l border-r border-gray-300 text-center">Email <input type="hidden" value={hiddenValues.emailId} /></th>
              <th colSpan="8" className="py-2 px-6 border-t-0 border-l border-r border-gray-300 text-center">City</th>
            </tr>
            <tr>
              <th colSpan="4" className="py-2 px-6 border-t border-l border-r border-gray-300 text-center">City 1</th>
              <th colSpan="4" className="py-2 px-6 border-t border-l border-r border-gray-300 text-center">City 2</th>
            </tr>
            <tr>
              {hiddenValues.city1Indices.map((index, subIndex) => (
                <th key={`city1-${subIndex}`} className="py-2 px-6 border-t border-l border-r border-gray-300 text-center">Sub {subIndex + 1}</th>
              ))}
              {hiddenValues.city2Indices.map((index, subIndex) => (
                <th key={`city2-${subIndex}`} className="py-2 px-6 border-t border-l border-r border-gray-300 text-center">Region {subIndex + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-6 border border-gray-300 text-center">{item.id}</td>
                <td className="py-2 px-6 border border-gray-300">
                  <input
                    type="text"
                    value={item[hiddenValues.nameId]}
                    onChange={(e) => handleChange(e, index, hiddenValues.nameId)}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </td>
                <td className="py-2 px-6 border border-gray-300">
                  <input
                    type="number"
                    value={item[hiddenValues.ageId]}
                    onChange={(e) => handleChange(e, index, hiddenValues.ageId)}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </td>
                <td className="py-2 px-6 border border-gray-300">
                  <input
                    type="email"
                    value={item[hiddenValues.emailId]}
                    onChange={(e) => handleChange(e, index, hiddenValues.emailId)}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </td>
                {item.city1.map((city, subIndex) => (
                  <td key={`city1-${subIndex}`} className="py-2 px-6 border border-gray-300">
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => handleChange(e, index, 'city1', subIndex)}
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </td>
                ))}
                {item.city2.map((city, subIndex) => (
                  <td key={`city2-${subIndex}`} className="py-2 px-6 border border-gray-300">
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => handleChange(e, index, 'city2', subIndex)}
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditableTable;
