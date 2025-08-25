import { useState } from "react";
import { createRoot } from "react-dom/client";
import Text from "../Reusable/Text"
import { IoSettingsSharp } from "react-icons/io5";
import { CgStack } from "react-icons/cg";
import AuctionLayout from "./AuctionLayout";
export default function Navbar() {
    const lanes = ["Q", "R", "S", "T", "U"];
    const [selectedLane, setSelectedLane] = useState(null);

    // define click handler
   const handleClick = () => {
    const newWindow = window.open("", "AuctionWindow", "width=1000,height=500,left=200,top=200");

    if (newWindow) {
      // Create a div inside the new window
      const div = newWindow.document.createElement("div");
      newWindow.document.body.appendChild(div);

      // Render your component inside that div
      const root = createRoot(div);
      root.render(<AuctionLayout />);
    }
  };
    return (
        <div className="w-full px-14 pt-1">
            <header className="bg-neutral-600 pe-2 text-white flex flex-wrap items-center justify-between rounded-lg">
                {/* Left Section */}
                <div className="flex flex-row flex-wrap gap-5">
                    <div className="flex items-center gap-1">
                        {/* Lane Label */}
                        <Text
                            variant="small"
                            className="bg-neutral-800 py-2 px-3 rounded-l font-semibold text-white"
                        >
                            LANE Q
                        </Text>

                        {/* Auction Info */}
                        <Text className="text-white text-sm">
                            Statewide Auto Auction:{" "}
                            <Text variant="small" className="font-bold text-sm inline text-white">August 19, 2025</Text>
                        </Text>
                        {/* Stack Icon */}
                        <button
                            onClick={handleClick}
                            className="p-1 cursor-pointer"
                        >
                            <CgStack className="text-sm" />
                        </button>
                    </div>
                    {/* Auctioneer Input */}
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Auctioneer Name"
                            className="bg-neutral-500 text-black placeholder-gray-800 px-3 py-0.5 text-xs focus:outline-none"
                        />
                    </div>
                </div>
                {/* Right Section */}
                <div className="flex sm:mt-0">
                    {/* Simulcast Users */}
                    <div className="flex items-center gap-2">
                        <Text className="text-white font-semibold text-xs">SIMULCAST <span className="block text-center">USERS</span></Text>
                        <Text variant="h3" className="text-white">14</Text>
                    </div>

                    {/* Settings Icon */}
                    <button className="ps-6">
                        <IoSettingsSharp className="text-xl" />
                    </button>

                    {/* Switch Lane */}
                    <div className="flex flex-col items-center ms-2 bg-neutral-800 px-3">
                        <Text className="text-white text-xs">Switch Lane</Text>
                        <div className="flex">
                            {lanes.map((lane) => (
                                <button
                                    key={lane}
                                    onClick={() => setSelectedLane(lane)}
                                    className={`px-0.5 text-xs
              hover:border hover:border-white
              ${selectedLane === lane ? "border border-white" : "border border-transparent"}
              text-white transition`}
                                >
                                    {lane}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Lane Countdown */}
                    <div className="flex gap-1">
                        <Text className="bg-yellow-300 text-black px-2 text-xs  font-bold">
                            Lane Starts
                            <span className="block text-center">04:52:58</span>
                        </Text>

                        {/* Start Button */}
                        <Text className="bg-green-600 px-3 text-xs font-bold">
                            Start
                            <span className="block text-center">Lane</span>
                        </Text>
                    </div>
                </div>
            </header>
        </div>
    )
}
