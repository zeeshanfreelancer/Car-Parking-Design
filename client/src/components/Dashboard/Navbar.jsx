import { useState } from "react";
import Text from "../Reusable/Text"
import { IoSettingsSharp } from "react-icons/io5";
export default function Navbar() {
    const lanes = ["Q", "R", "S", "T", "U"];
    const [selectedLane, setSelectedLane] = useState(null);

    return (
        <div className="w-full">
            <header className="mt-5 bg-gray-600 text-white flex flex-wrap items-center justify-between px-3 py-0.5 text-sm">
                {/* Left Section */}
                <div className="flex flex-wrap items-center gap-2">
                    {/* Lane Label */}
                    <Text
                        variant="h5"
                        className="bg-gray-800 px-3 py-1 rounded font-semibold text-white"
                    >
                        LANE Q
                    </Text>

                    {/* Auction Info */}
                    <Text className="text-white" variant="p">
                        Statewide Auto Auction:{" "}
                        <Text variant="p" className="font-semibold inline text-white">August 19, 2025</Text>
                    </Text>

                    {/* Auctioneer Input */}
                    <input
                        type="text"
                        placeholder="Auctioneer Name"
                        className="bg-slate-300 text-black placeholder-gray-800 px-3 py-0.5 text-xs focus:outline-none"
                    />
                </div>

                {/* Right Section */}
                <div className="flex  gap-3 sm:mt-0">
                    {/* Simulcast Users */}
                    <div className="flex items-center gap-1">
                        <Text variant="small" className="text-white font-semibold">SIMULCAST <span className="block text-center">USERS</span></Text>
                        <Text variant="h1" className="text-white">14</Text>
                    </div>

                    {/* Settings Icon */}
                    <button>
                        <IoSettingsSharp className="text-3xl" />
                    </button>

                    {/* Switch Lane */}
                    <div className="flex flex-col items-center ms-4">
                        <p className="text-white text-sm mb-2">Switch Lane</p>
                        <div className="flex">
                            {lanes.map((lane) => (
                                <button
                                    key={lane}
                                    onClick={() => setSelectedLane(lane)}
                                    className={`px-0.5
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
                        <Text variant="small" className="bg-yellow-500 text-black px-2 py-1  font-bold">
                            Lane Starts
                            <span className="block text-center">04:52:58</span>
                        </Text>

                        {/* Start Button */}
                        <Text variant="small" className="bg-green-600 px-3 py-1 font-bold">
                            Start
                            <span className="block text-center">Lane</span>
                        </Text>
                    </div>
                </div>
            </header>
        </div>
    )
}
