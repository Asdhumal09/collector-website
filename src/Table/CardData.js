import React from 'react';
import TopBar from '../TopBar/TopBar';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const navigate = useNavigate();

    const handleAllYojna = (id) => {
        console.log("Navigating to:", id);
        navigate(`/tahasiltwo/${id}`);
    };

    return (
        <div className="p-6 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-16 justify-center flex">
                {/* Card 1 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 1</h3>
                    <p className="text-center text-gray-600">Description for Card 1</p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 2</h3>
                    <p className="text-center text-gray-600">Description for Card 2</p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 3</h3>
                    <p className="text-center text-gray-600">Description for Card 3</p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 4</h3>
                    <p className="text-center text-gray-600">Description for Card 4</p>
                </div>

                {/* Card 5 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 5</h3>
                    <p className="text-center text-gray-600">Description for Card 5</p>
                </div>

                {/* Card 6 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 6</h3>
                    <p className="text-center text-gray-600">Description for Card 6</p>
                </div>

                {/* Card 7 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 7</h3>
                    <p className="text-center text-gray-600">Description for Card 7</p>
                </div>

                {/* Card 8 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 8</h3>
                    <p className="text-center text-gray-600">Description for Card 8</p>
                </div>

                {/* Card 9 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 9</h3>
                    <p className="text-center text-gray-600">Description for Card 9</p>
                </div>

                {/* Card 10 */}
                <div className="flex flex-col items-center shadow-lg p-4 border rounded-lg bg-white w-[440px] mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-center mb-4">Card 10</h3>
                    <p className="text-center text-gray-600">Description for Card 10</p>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => handleAllYojna(10)} // Fixed the onClick handler
                    className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
                >
                    View All Yojana
                </button>
            </div>
            <TopBar />
        </div>
    );
};

export default Cards;
