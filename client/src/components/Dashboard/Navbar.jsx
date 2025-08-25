import { useState } from "react";
import Text from "../Reusable/Text";
import { IoSettingsSharp } from "react-icons/io5";

export default function Navbar() {
  const lanes = ["Q", "R", "S", "T", "U"];
  const [selectedLane, setSelectedLane] = useState(null);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-14 pt-2">
      <header className="bg-neutral-600 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg p-2 gap-3">
        
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
          {/* Lane Label */}
          <Text
            variant="small"
            className="bg-neutral-800 py-2 px-3 rounded font-semibold text-white"
          >
            LANE Q
          </Text>

          {/* Auction Info */}
          <Text className="text-white text-sm">
            Statewide Auto Auction:{" "}
            <Text
              variant="small"
              className="font-bold text-sm inline text-white"
            >
              August 19, 2025
            </Text>
          </Text>

          {/* Auctioneer Input */}
          <input
            type="text"
            placeholder="Auctioneer Name"
            className="bg-neutral-500 text-black placeholder-gray-800 px-3 py-1 text-xs focus:outline-none rounded"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          {/* Simulcast Users */}
          <div className="flex items-center justify-between gap-2">
            <Text className="text-white font-semibold text-xs">
              SIMULCAST <span className="block text-center">USERS</span>
            </Text>
            <Text variant="h3" className="text-white">
              14
            </Text>
          </div>

          {/* Settings Icon */}
          <button className="flex justify-center">
            <IoSettingsSharp className="text-xl" />
          </button>

          {/* Switch Lane */}
          <div className="flex flex-col items-center bg-neutral-800 px-3 py-1 rounded">
            <Text className="text-white text-xs">Switch Lane</Text>
            <div className="flex gap-1">
              {lanes.map((lane) => (
                <button
                  key={lane}
                  onClick={() => setSelectedLane(lane)}
                  className={`px-1 text-xs hover:border hover:border-white rounded
                    ${
                      selectedLane === lane
                        ? "border border-white"
                        : "border border-transparent"
                    } text-white transition`}
                >
                  {lane}
                </button>
              ))}
            </div>
          </div>

          {/* Lane Countdown */}
          <div className="flex gap-1">
            <Text className="bg-yellow-300 text-black px-2 text-xs font-bold rounded">
              Lane Starts
              <span className="block text-center">04:52:58</span>
            </Text>
            <Text className="bg-green-600 px-3 text-xs font-bold rounded">
              Start
              <span className="block text-center">Lane</span>
            </Text>
          </div>
        </div>
      </header>
    </div>
  );
}
