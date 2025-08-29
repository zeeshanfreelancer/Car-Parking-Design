import React from "react";

export default function AuctionDisplay() {
  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center">
      <div className="w-[85%] h-[90%] bg-[#1a1a1a] p-4 flex flex-col">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-3 h-[30%]">

            <div className="bg-[#2b2b2b] px-8 py-4 text-5xl font-bold text-center">A1</div>

            <div className="flex-1 h-17 flex">
                <div className="bg-red-600 flex-1"></div>
                <div className="bg-blue-600 flex-1"></div>
            </div>

            {/* Vehicle Info */}
                <div className="mb-2">
                    <h2 className="text-2xl font-semibold text-center">2007 Cadillac DTS</h2>
                    <p className="text-gray-300 p-2">SELLER: Balise Chevrolet Of Warwick</p>
                </div>

            <div className="grid grid-cols-2 gap-4 ">
                <div className="text-right">
                    <div className="text-sm">MILEAGE</div>
                    <div className="text-2xl font-bold">0</div>
                </div>
                <div className="text-xl font-semibold ps-30">Actual</div>
            </div>
             
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 h-[70%] gap-3 ">
            {/* Announcements */}
            <div className="relative flex flex-col">
                <div className="bg-gray-300 text-black p-3 rounded-md absolute bottom-13 left-4 w-[95%] h-[35%]">
                    <div className="text-xs uppercase font-semibold mb-1 text-center">📢 Announcements</div>
                    <div className="text-lg">No Announcements</div>
                </div>
                <div className="absolute bottom-0 left-4 w-[95%] h-12 bg-black flex p-1">
                {/* Fake barcode */}
                {Array.from({ length: 140 }).map((_, i) => (
                    <div
                    key={i}
                    className={`h-full ${i % 2 === 0 ? "w-[3px] bg-white" : "w-[6px] bg-black"}`}
                    ></div>
                ))}
                </div>
            </div>

            {/* Empty right side */}
            <div className="bg-[#2b2b2b]"></div>
        </div>
      </div>
    </div>
  );
}
