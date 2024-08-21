import React from 'react';

const DataTable = () => {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      email: 'john@example.com',
      city1: ['Chicago', 'Suburb A', 'Suburb B', 'Suburb C'],
      city2: ['IL', 'Region 1', 'Region 2', 'Region 3'],
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      email: 'jane@example.com',
      city1: ['Mumbai', 'Area A', 'Area B', 'Area C'],
      city2: ['MH', 'Region 4', 'Region 5', 'Region 6'],
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold m-4 text-center">Data Table</h2>
    <div className='overflow-x-auto'>
    <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th rowSpan="3" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">ID</th>
            <th rowSpan="3" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">Name</th>
            <th rowSpan="3" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">Age</th>
            <th rowSpan="3" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">Email</th>
            <th colSpan="8" className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">City</th>
          </tr>
          <tr>
            <th colSpan="4" className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">City 1</th>
            <th colSpan="4" className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">City 2</th>
          </tr>
          <tr>
            <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 1</th>
            <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 2</th>
            <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 3</th>
            <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Sub 4</th>
            <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Region 1</th>
            <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Region 2</th>
            <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Region 3</th>
            <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">Region 4</th>
          </tr>
        </thead>
        <tbody>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DataTable;
