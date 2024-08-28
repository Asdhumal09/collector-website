import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from 'recharts';

// Data Preparation
const data = [
    {
        id: 1,
        tal_Name: 'Bhokardan',
        Sgy_total: 9136,
        portal: 3158,
        adhar: 575,
        pralambitUpload: 5978,
        portalUpload: 2583,
        uploadPercent: 34.57
    },
    {
        id: 2,
        tal_Name: 'Badnapur',
        Sgy_total: 4955,
        portal: 1368,
        adhar: 673,
        pralambitUpload: 3587,
        portalUpload: 695,
        uploadPercent: 27.61
    },
    {
        id: 3,
        tal_Name: 'Mantha',
        Sgy_total: 1975,
        portal: 261,
        adhar: 9,
        pralambitUpload: 1714,
        portalUpload: 252,
        uploadPercent: 13.22
    },
    {
        id: 4,
        tal_Name: 'Partur',
        Sgy_total: 2880,
        portal: 1067,
        adhar: 454,
        pralambitUpload: 1813,
        portalUpload: 613,
        uploadPercent: 37.05
    },
];

// Custom active shape rendering function
// Custom active shape rendering function for keeping all data within the chart
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


const SgyTwo = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    // Pie Chart Data Preparation
    const totalBeneficiariesData = data.map(taluka => ({
        name: taluka.tal_Name,
        value: taluka.Sgy_total,
    }));

    const portalUploadsData = data.map(taluka => ({
        name: taluka.tal_Name,
        value: taluka.portal,
    }));

    const aadhaarAuthenticationData = data.map(taluka => ({
        name: taluka.tal_Name,
        value: taluka.adhar,
    }));

    // Custom Colors
    const COLORS_TOTAL = ['#1A3636', '#40534C', '#677D6A', '#D6BD98'];
    const COLORS_PORTAL = ['#1A3636', '#40534C', '#677D6A', '#D6BD98'];
    const COLORS_AADHAAR = ['#1A3636', '#40534C', '#677D6A', '#D6BD98'];

    return (
        <div className="p-6">
            {/* Table */}
            <div className="mb-8">
                <h2 className="text-xl font-bold m-4 text-center">श्रावणबाळ सेवा राज्‍य निवृत्‍ती वेतन योजना-दिनांक 18/06/2024 अखेर डी.बी.टी पोर्टल कामाचा तपशिल
                </h2>
                <div className='overflow-x-auto'>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">अ.क्र</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">Taluka Name</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">SBY Total Beneficiary</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">पोर्टलवर अपलोड लाभार्थी  संख्‍या</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">आधार प्रमाणीकरण  लाभार्थी संख्‍या</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center"> अपलोड करणे प्रंलबीत लाभार्थी  संख्‍या</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">पोर्टलवरील अपलोड लाभार्थी संख्‍यापैकी आधार प्रमाणीकरण  बाकी  लाभार्थी संख्‍या</th>
                                <th className="py-1 px-6 border-t-0 border-l border-r border-gray-300 text-center">अपलोड लाभार्थी  टक्‍केवारी%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-1 px-6 border border-gray-300">{item.id}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.tal_Name}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.Sgy_total}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.portal}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.adhar}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.pralambitUpload}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.portalUpload}</td>
                                    <td className="py-1 px-6 border border-gray-300">{item.uploadPercent}</td>
                                </tr>   
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pie Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Beneficiaries Pie Chart */}
                <div className="flex flex-col items-center shadow-xl">
                    <h3 className="text-lg font-bold text-center mb-4">Total Beneficiaries</h3>
                    <ResponsiveContainer width={300} height={300}>
                        <PieChart>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={totalBeneficiariesData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius="80%"
                                innerRadius="60%"
                                onMouseEnter={onPieEnter}
                            >
                                {totalBeneficiariesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS_TOTAL[index % COLORS_TOTAL.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Portal Uploads Pie Chart */}
                <div className="flex flex-col items-center shadow-xl">
                    <h3 className="text-lg font-bold text-center mb-4">Portal Uploads</h3>
                    <ResponsiveContainer width={300} height={300}>
                        <PieChart>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={portalUploadsData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius="80%"
                                innerRadius="60%"
                                onMouseEnter={onPieEnter}
                            >
                                {portalUploadsData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS_PORTAL[index % COLORS_PORTAL.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Aadhaar Authentication Pie Chart */}
                <div className="flex flex-col items-center shadow-xl">
                    <h3 className="text-lg font-bold text-center mb-4">Aadhaar Authentication</h3>
                    <ResponsiveContainer width={300} height={300}>
                        <PieChart>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={aadhaarAuthenticationData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius="80%"
                                innerRadius="60%"
                                onMouseEnter={onPieEnter}
                            >
                                {aadhaarAuthenticationData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS_AADHAAR[index % COLORS_AADHAAR.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SgyTwo;
