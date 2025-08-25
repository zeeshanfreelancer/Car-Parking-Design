import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function IncrementModel({ open, onClose }) {
  const [increment, setIncrement] = useState(100); // default increment
  const [values, setValues] = useState([]);
  const [asking, setAsking] = useState(5000); // default asking
  const totalCells = 80; // 8 columns × 10 rows

  // Generate fixed grid values based on increment
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= totalCells; i++) {
      arr.push(i * increment);
    }
    setValues(arr);
  }, [increment]);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Handle Bid click
  const handleBid = () => {
    setAsking((prev) => prev + increment);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      {/* Modal Box */}
      <div className="relative bg-neutral-600 w-full max-w-6xl overflow-hidden flex flex-col md:flex-row h-[90vh] shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl font-bold cursor-pointer"
        >
          <IoIosCloseCircleOutline />
        </button>

        {/* Left Section */}
        <div className="flex-1 flex flex-col p-4 text-white">
          {/* Asking */}
          <div className="bg-gray-500 text-center py-2 text-2xl font-bold mb-2 rounded">
            ASKING <br /> ${asking}
          </div>

          {/* Price Grid */}
          <div className="grid grid-cols-8 flex-1 overflow-y-auto border border-gray-700">
            {values.map((val, idx) => (
              <div
                key={idx}
                className={`p-1 text-center border outline-none text-sm ${val === asking
                  ? "bg-white text-black font-bold"
                  : "bg-transparent text-gray-200"
                  }`}
              >
                ${val}
              </div>
            ))}
          </div>

          {/* Reserve + Bid */}
          <div className="flex justify-between mt-2">
            <button className="flex-1 mr-2 py-1 border-1 border-white bg-transparent text-lg font-bold hover:bg-white hover:text-black cursor-pointer">
              RESERVE
              <span className="block">$</span>
            </button>
            <button
              onClick={handleBid}
              className="flex-1 ml-2 py-1 bg-white text-black text-3xl font-bold cursor-pointer hover:bg-gray-200"
            >
              BID
            </button>
          </div>
        </div>

        {/* Right Section (Bid Increments) */}
        <div className="w-full md:w-72 p-4 text-white overflow-y-auto">
          <h2 className="text-center text-lg font-bold mb-4">BID INCREMENTS</h2>
          <div className="space-y-3">
            {[25, 50, 100, 200, 250, 500, 1000].map((inc) => (
              <button
                key={inc}
                onClick={() => setIncrement(inc)}
                className={`w-full py-2 border-1 text-2xl cursor-pointer border-black transition ${increment === inc
                    ? "bg-white text-black font-bold"
                    : "bg-transparen"
                  }`}
              >
                ${inc}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
