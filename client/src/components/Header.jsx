import React, { useState } from "react";   // <-- add useState here
import Text from "./Reusable/Text.jsx";
import { FaCarAlt, FaSearch } from "react-icons/fa";
import { RiAddLargeLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io"; // bell icon

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white flex justify-between items-center px-4 py-2">
            {/* Left side */}
            <div className="flex items-center gap-6">
                {/* Logo + Title */}
                <div className="flex items-center gap-2">
                    <FaCarAlt className="text-3xl text-cyan-400" />
                    <div className="flex flex-col leading-tight">
                        <Text variant="h3" className="text-white font-semibold">
                            AUCTIONS
                        </Text>
                    </div>
                </div>

                {/* Subtitle */}
                <Text variant="p" className="text-white text-sm">
                    Statewide Auto Auction
                </Text>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
                {/* Search */}
                <button className="bg-gray-800 p-2 rounded hover:bg-gray-700">
                    <FaSearch className="text-xl" />
                </button>

                {/* Add */}
                <button className="bg-gray-800 p-2 rounded hover:bg-gray-700">
                    <RiAddLargeLine className="text-xl" />
                </button>

                {/* Notifications + User */}
                <div className="relative flex items-center gap-1 bg-gray-800 pe-2">
                    {/* Notification Icon */}
                    <button className=" p-2 rounded ">
                        <IoMdNotificationsOutline className="text-xl" />
                    </button>

                    {/* User Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-1 text-sm text-white hover:text-gray-300"
                        >
                            <Text variant="p" className="text-sm text-white">
                                Tim Innocente
                            </Text>
                            <span>▼</span>
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg">
                                <ul className="text-sm">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Profile
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Settings
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
