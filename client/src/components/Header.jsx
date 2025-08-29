import React, { useState } from "react";
import Text from "./Reusable/Text";
import { FaCarAlt, FaSearch, FaPlus, FaBell, FaAngleDown } from "react-icons/fa";

export default function Header({ theme }) {
    const [open, setOpen] = useState(false);

    return (
        <header
            className="flex justify-between items-center px-6 py-1"
            style={{
                background: "var(--top_nav_background)",
                color: "var(--top_nav_text)",

            }}
        >
            {/* Left side */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                    <FaCarAlt className="text-2xl xl:text-3xl 2xl:text-4xl" style={{ color: "var(--icon_main, var(--top_nav_text))" }} />
                    <div className="flex flex-col leading-tight">
                        <Text
                            className="font-semibold text-lg xl:text-xl 2xl:text-2xl"
                        // style={{ color: "var(--top_nav_text)" }}
                        >
                            AUCTIONS
                        </Text>
                    </div>
                </div>
                <Text
                    className="text-sm lg:text-sm xl:text-lg 2xl:text-2xl"
                    style={{ color: "var(--top_nav_text)" }}
                >
                    Statewide Auto Auction
                </Text>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
                {/* Search button */}
                <button
                    className="p-2 rounded hover:opacity-80 cursor-pointer"
                    style={{
                        background: "var(--button_secondary_back)",
                        color: "var(--button_secondary_text)",
                    }}
                >
                    <FaSearch className="text-lg lg:text-lg xl:text-xl 2xl:text-3xl" />
                </button>

                {/* Add button */}
                <button
                    className="p-2 rounded hover:opacity-80 cursor-pointer"
                    style={{
                        background: "var(--button_secondary_back)",
                        color: "var(--button_secondary_text)",
                    }}
                >
                    <FaPlus className="text-lg lg:text-lg xl:text-xl 2xl:text-3xl" />
                </button>

                {/* Notification + User dropdown */}
                <div
                    className="relative flex items-center gap-1 pe-2 rounded"
                    style={{
                        background: "var(--button_secondary_back)",
                        color: "var(--button_secondary_text)",
                    }}
                >
                    <button className="p-2">
                        <FaBell className="text-lg lg:text-lg xl:text-xl 2xl:text-3xl" />
                    </button>

                    {/* User dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-1 text-sm"
                            style={{ color: "var(--top_nav_text)" }}
                        >
                            <Text
                                className="text-xs lg:text-sm xl:text-sm 2xl:text-2xl"
                                style={{ color: "var(--top_nav_text)" }}
                            >
                                Tim Innocente
                            </Text>
                            <FaAngleDown className="text-xs lg:text-sm xl:text-sm 2xl:text-2xl" />
                        </button>

                        {open && (
                            <div
                                className="absolute right-0 mt-2 w-40 rounded shadow-lg z-10"
                                style={{
                                    background: "var(--main_field_inner, var(--main_field_back))",
                                    color: "var(--text_main)",
                                }}
                            >
                                <ul className="text-xs lg:text-sm xl:text-sm 2xl:text-2xl">
                                    <li className="px-4 py-1 hover:opacity-80 cursor-pointer">
                                        Profile
                                    </li>
                                    <li className="px-4 py-1 hover:opacity-80 cursor-pointer">
                                        Settings
                                    </li>
                                    <li className="px-4 py-1 hover:opacity-80 cursor-pointer">
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
