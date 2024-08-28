import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data Preparation
const data = [
    {
        id: 1,
        tal_Name: 'Bhokardan',
        labharthi: 9136,
        Sgy_Sasa: 3158,
        Sgy_anu: 575,
        shravanbal_sasa: 5978,
        shravanbal_anu: 2583,
    },
    {
        id: 2,
        tal_Name: 'Another Taluka',
        labharthi: 8124,
        Sgy_Sasa: 2200,
        Sgy_anu: 450,
        shravanbal_sasa: 5400,
        shravanbal_anu: 2300,
    },
    {
        id: 2,
        tal_Name: 'Another Taluka',
        labharthi: 8124,
        Sgy_Sasa: 2200,
        Sgy_anu: 450,
        shravanbal_sasa: 5400,
        shravanbal_anu: 2300,
    },
    {
        id: 2,
        tal_Name: 'Another Taluka',
        labharthi: 8124,
        Sgy_Sasa: 2200,
        Sgy_anu: 450,
        shravanbal_sasa: 5400,
        shravanbal_anu: 2300,
    },
    {
        id: 2,
        tal_Name: 'Another Taluka',
        labharthi: 8124,
        Sgy_Sasa: 2200,
        Sgy_anu: 450,
        shravanbal_sasa: 5400,
        shravanbal_anu: 2300,
    },
    // Add more distinct data items here
];

// Calculate data for pie charts
const totalBeneficiariesData = data.map(taluka => ({
    name: taluka.tal_Name,
    value: taluka.labharthi,
}));

const portalUploadsData = data.map(taluka => ({
    name: taluka.tal_Name,
    value: taluka.Sgy_Sasa + taluka.Sgy_anu,
}));

const aadhaarAuthenticationData = data.map(taluka => ({
    name: taluka.tal_Name,
    value: taluka.shravanbal_sasa + taluka.shravanbal_anu,
}));

// Custom tooltip content
const CustomTooltip = ({ payload, label }) => {
    if (!payload || payload.length === 0) return null;

    const { name } = payload[0].payload;
    const talukaData = data.find(item => item.tal_Name === name);

    return (
        <div className="p-2 bg-white border rounded shadow-lg">
            <h4 className="font-bold">{name}</h4>
            <p>लाभार्थी संख्‍या: {talukaData.labharthi}</p>
            <p>संजय गांधी (स.सा.): {talukaData.Sgy_Sasa + talukaData.Sgy_anu}</p>
            <p>श्रावणबाळ (स.सा.): {talukaData.shravanbal_sasa + talukaData.shravanbal_anu}</p>
        </div>
    );
};

const SgyThree = () => {
    // Custom Colors
    const COLORS = ['#FF6F61', '#FFCC5C', '#6B4226'];

    return (
        <div className="p-6">
            {/* Table */}
            <div className="mb-8">
                <h2 className="text-xl font-bold m-4 text-center">विसयो अंतर्गत राज्‍य पुरस्‍कृत योजना माहे एप्रिल व मे-2024 अखेरपर्यंत जिल्‍हास्‍तरावरुन वाटप अनुदान तपशिल</h2>
                <div className='overflow-x-auto'>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center" rowSpan="2">अ.क्र</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center" rowSpan="2">तालुका</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center" rowSpan="2">लाभार्थी संख्‍या</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center" rowSpan="2">संजय गांधी (स.सा.)</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center" colSpan="1">संजय गांधी</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center" rowSpan="2">श्रावणबाळ (स.सा.)</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center" colSpan="1">श्रावणबाळ</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center" rowSpan="2">एकूण वाटप अनुदान</th>
                            </tr>
                            <tr>
                                <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">(अनू.जाती)</th>
                                <th className="py-1 px-6 border-t border-l border-r border-gray-300 text-center">(अनू.जाती)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-1 px-6 border border-gray-300">{item.id}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.tal_Name}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.labharthi}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.Sgy_Sasa}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.Sgy_anu}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.shravanbal_sasa}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.shravanbal_anu}</td>
                                    <td className="py-1 px-6 border border-gray-300">
                                        {item.Sgy_Sasa + item.Sgy_anu + item.shravanbal_sasa}
                                    </td>
                                </tr>
                            ))}
                            {/* Total Row */}
                            <tr className="bg-gray-100 font-bold">
                                <td className="py-1 px-6 border border-gray-300 text-center" colSpan="2">Total</td>
                                <td className="py-1 px-6 border border-gray-300 text-center">{data.reduce((sum, entry) => sum + entry.labharthi, 0)}</td>
                                <td className="py-1 px-6 border border-gray-300 text-center">{data.reduce((sum, entry) => sum + entry.Sgy_Sasa, 0)}</td>
                                <td className="py-1 px-6 border border-gray-300 text-center">{data.reduce((sum, entry) => sum + entry.Sgy_anu, 0)}</td>
                                <td className="py-1 px-6 border border-gray-300 text-center">{data.reduce((sum, entry) => sum + entry.shravanbal_sasa, 0)}</td>
                                <td className="py-1 px-6 border border-gray-300 text-center">{data.reduce((sum, entry) => sum + entry.shravanbal_anu, 0)}</td>
                                <td className="py-1 px-6 border border-gray-300 text-center">
                                    {data.reduce((sum, entry) => sum + entry.Sgy_Sasa + entry.Sgy_anu + entry.shravanbal_sasa, 0)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pie Charts */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4 text-center">Total Beneficiaries</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={totalBeneficiariesData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                onMouseEnter={(data, index) => {
                                    // Handle hover logic
                                    document.querySelector(`.recharts-pie-sector-${index}`).classList.add('hover');
                                }}
                                onMouseLeave={(data, index) => {
                                    // Handle hover logic
                                    document.querySelector(`.recharts-pie-sector-${index}`).classList.remove('hover');
                                }}
                            >
                                {totalBeneficiariesData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        className={`recharts-pie-sector-${index}`}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4 text-center">Portal Uploads</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={portalUploadsData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                onMouseEnter={(data, index) => {
                                    // Handle hover logic
                                    document.querySelector(`.recharts-pie-sector-${index}`).classList.add('hover');
                                }}
                                onMouseLeave={(data, index) => {
                                    // Handle hover logic
                                    document.querySelector(`.recharts-pie-sector-${index}`).classList.remove('hover');
                                }}
                            >
                                {portalUploadsData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        className={`recharts-pie-sector-${index}`}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4 text-center">Aadhaar Authentication</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={aadhaarAuthenticationData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                onMouseEnter={(data, index) => {
                                    // Handle hover logic
                                    document.querySelector(`.recharts-pie-sector-${index}`).classList.add('hover');
                                }}
                                onMouseLeave={(data, index) => {
                                    // Handle hover logic
                                    document.querySelector(`.recharts-pie-sector-${index}`).classList.remove('hover');
                                }}
                            >
                                {aadhaarAuthenticationData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        className={`recharts-pie-sector-${index}`}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <style jsx>{`
                .recharts-pie-sector-hover {
                    transition: transform 0.3s;
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default SgyThree;
