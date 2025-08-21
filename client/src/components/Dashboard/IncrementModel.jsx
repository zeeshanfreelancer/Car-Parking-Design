import React, { useState, useEffect } from "react";

export default function IncrementModal() {
  const [increment, setIncrement] = useState(100); // Default increment
  const [values, setValues] = useState([]);
  const [asking, setAsking] = useState(5000); // Default asking value

  // Generate grid values based on increment
  useEffect(() => {
    let arr = [];
    for (let i = increment; i <= 8000; i += increment) {
      arr.push(i);
    }
    setValues(arr);
  }, [increment]);

  // Handle Bid click
  const handleBid = () => {
    setAsking((prev) => prev + increment);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-white p-6 min-h-screen">
      {/* Left Section */}
      <div className="flex-1">
        {/* Asking */}
        <div className="bg-gray-600 text-center py-6 text-2xl font-bold mb-4 rounded">
          ASKING <br /> ${asking}
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-8 gap-2">
          {values.map((val, idx) => (
            <div
              key={idx}
              className={`p-2 text-center rounded ${
                val === asking ? "bg-gray-500 font-bold" : "bg-gray-700"
              }`}
            >
              ${val}
            </div>
          ))}
        </div>

        {/* Reserve + Bid */}
        <div className="flex justify-between mt-6">
          <button className="flex-1 mr-2 py-3 bg-gray-700 rounded text-xl font-bold">
            RESERVE $
          </button>
          <button
            onClick={handleBid}
            className="flex-1 ml-2 py-3 bg-gray-200 text-black rounded text-xl font-bold"
          >
            BID
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-64 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-center text-lg font-bold mb-4">BID INCREMENTS</h2>
        <div className="space-y-2">
          {[25, 50, 100, 200, 250, 500, 1000].map((inc) => (
            <button
              key={inc}
              onClick={() => setIncrement(inc)}
              className={`w-full py-3 rounded ${
                increment === inc ? "bg-white text-black font-bold" : "bg-gray-700"
              }`}
            >
              ${inc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
