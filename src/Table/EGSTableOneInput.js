    import { Box } from '@mui/material';
    import React, { useState } from 'react'; 

    const EditableTable = () => {
    // Initialize table data state
    const [data, setData] = useState([
        { id: 1, block: '', houseHoldEmployed: '', persondaysGenerated: '' },
        { id: 2, block: '', houseHoldEmployed: '', persondaysGenerated: '' },
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
        <Box  className="ff_baloo" sx={{ marginTop:"6.5%" }}>
        <h2 className="text-xl font-bold m-4 text-center">Editable Table</h2>
        <div className='overflow-x-auto'>
            <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
                <tr>
                <th className="py-2 px-6 border-t-0 border-l border-r border-gray-300 text-center">Sr. No</th>
                <th className="py-2 px-6 border-t-0 border-l border-r border-gray-300 text-center">Block</th>
                <th className="py-2 px-6 border-t-0 border-l border-r border-gray-300 text-center">House Hold Employed</th>
                <th className="py-2 px-6 border-t-0 border-l border-r border-gray-300 text-center">Persondays Generated</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <tr key={index}>
                    <td className="py-2 px-6 border border-gray-300 text-center">{item.id}</td>
                    <td className="py-2 px-6 border border-gray-300">
                    <input
                        type="text"
                        value={item.block}
                        onChange={(e) => handleChange(e, index, 'block')}
                        className="w-full border border-gray-300 p-2 rounded focus-input" // Add the focus-input class
                    />
                    </td>
                    <td className="py-2 px-6 border border-gray-300">
                    <input
                        type="text"
                        value={item.houseHoldEmployed}
                        onChange={(e) => handleChange(e, index, 'houseHoldEmployed')}
                        className="w-full border border-gray-300 p-2 rounded focus-input" // Add the focus-input class
                    />
                    </td>
                    <td className="py-2 px-6 border border-gray-300">
                    <input
                        type="text"
                        value={item.persondaysGenerated}
                        onChange={(e) => handleChange(e, index, 'persondaysGenerated')}
                        className="w-full border border-gray-300 p-2 rounded focus-input" // Add the focus-input class
                    />
                    </td>
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
        </Box>
    );
    };

    export default EditableTable;
