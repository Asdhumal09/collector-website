import React from 'react';

const DataTableTwo = () => {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      email: 'john@example.com',
      city1: ['Chicago', 'Suburb A', 'Suburb B', 'Suburb C'],
      city2: ['IL', 'Region 1', 'Region 2', 'Region 3'],
      city3: ['City X', 'Area X', 'Area Y', 'Area Z'],
      city4: ['Extra 1', 'Extra 2'],
      city5: ['Extra 3', 'Extra 4'],
      city6: ['Extra 5', 'Extra 6'],
      city7: ['Extra 7', 'Extra 8']
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      email: 'jane@example.com',
      city1: ['Mumbai', 'Area A', 'Area B', 'Area C'],
      city2: ['MH', 'Region 4', 'Region 5', 'Region 6'],
      city3: ['City Y', 'Area A', 'Area B', 'Area C'],
      city4: ['Extra 7', 'Extra 8'],
      city5: ['Extra 9', 'Extra 10'],
      city6: ['Extra 11', 'Extra 12'],
      city7: ['Extra 13', 'Extra 14']
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold m-4 text-center">Data Table Two</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th rowSpan="4" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">ID</th>
              <th rowSpan="4" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">Name</th>
              <th rowSpan="4" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">Age</th>
              <th rowSpan="4" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">Email</th>
              <th colSpan="2" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">City 1</th>
              <th colSpan="2" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">City 2</th>
              <th colSpan="2" rowSpan="2" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">City 3</th>
              <th rowSpan="3" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">City 4</th>
              <th rowSpan="3" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">City 5</th>
              <th rowSpan="3" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">City 6</th>
              <th rowSpan="2" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">City 7</th>
            </tr>
            <tr>
              <th rowSpan="2" className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 1</th>
              <th rowSpan="2" className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 2</th>
              <th colSpan="2" className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 3 & 4</th>
              <th colSpan="2" className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 5 & 6</th>
            </tr>
            <tr>
              <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 3</th>
              <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 4</th>
              <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 5</th>
              <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 6</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto max-h-96"> {/* Adjust the height as needed */}
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-1 px-6 border border-gray-300">{item.id}</td>
                <td className="py-1 px-6 border border-gray-300">{item.name}</td>
                <td className="py-1 px-6 border border-gray-300">{item.age}</td>
                <td className="py-1 px-6 border border-gray-300">{item.email}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city1[0]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city1[1]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city1[2]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city1[3]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city2[0]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city2[1]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city2[2]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city2[3]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city3[0]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city3[1]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city3[2]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city3[3]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city4[0]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city4[1]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city5[0]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city5[1]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city6[0]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city6[1]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city7[0]}</td>
                <td className="py-1 px-6 border border-gray-300">{item.city7[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableTwo;
