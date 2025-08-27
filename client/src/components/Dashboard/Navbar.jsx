import { useState } from "react";
import Text from "../Reusable/Text";
import { IoSettingsSharp } from "react-icons/io5";
import { CgStack } from "react-icons/cg";
import { themes } from "../../useTheme";

export default function Navbar({ theme, onThemeChange }) {
    const lanes = ["Q", "R", "S", "T", "U"];
    const [selectedLane, setSelectedLane] = useState(null);

    // handle stack icon click
    const handleClick = () => {
        const auctionId = Math.floor(Math.random() * 100000); // random dummy ID
        const url = `${window.location.origin}/auction?id=${auctionId}`;
        window.open(url, "_blank", "width=1000,height=500,left=200,top=200");
    };

    return (
        <div className="w-full px-14 pt-1">
            <header
                className="flex flex-wrap items-center justify-between rounded-lg"
                style={{
                    background: "var(--top_nav_background)",
                    color: "var(--top_nav_text)",
                    boxShadow: `0 2px 4px 0 var(--top_nav_shadow)`,
                    borderBottom: `1px solid var(--top_nav_border)`,
                }}
            >
                {/* Left Section */}
                <div className="flex flex-row flex-wrap gap-5">
                    <div className="flex items-center gap-1">
                        {/* Lane Label */}
                        <Text
                            variant="small"
                            className="py-2 px-3 rounded-l font-semibold"
                            style={{
                                background: "var(--main_field_back)",
                                color: "var(--top_nav_text)",
                            }}
                        >
                            LANE Q
                        </Text>
                        {/* Auction Info */}
                        <Text className="text-sm" style={{ color: "var(--text_main)" }}>
                            Statewide Auto Auction:{" "}
                            <span className="font-bold">August 19, 2025</span>
                        </Text>
                        {/* Stack Icon */}
                        <button onClick={handleClick} className="p-1 cursor-pointer">
                            <CgStack style={{ color: "var(--top_nav_text)" }} className="text-sm" />
                        </button>
                    </div>
                    {/* Auctioneer Input */}
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Auctioneer Name"
                            className="px-3 py-0.5 text-xs focus:outline-none"
                            style={{
                                background: "var(--input_background)",
                                // color: "var(--text_inverted)",
                                // border: "var(--button_secondary_border)",
                            }}
                        />
                    </div>
                </div>
                {/* Right Section */}
                <div className="flex sm:mt-0 items-center gap-4">
                    {/* Simulcast Users */}
                    <div className="flex items-center gap-2">
                        <Text className="font-semibold text-xs" style={{ color: "var(--text_nav_text)" }}>
                            SIMULCAST <span className="block text-center">USERS</span>
                        </Text>
                        <Text variant="h3" style={{ color: "var(--text_nav_text)" }}>
                            14
                        </Text>
                    </div>
                    {/* Settings Icon */}
                    <button className="ps-6">
                        <IoSettingsSharp style={{ color: "var(--top_nav_text)" }} className="text-xl" />
                    </button>
                    {/* Switch Lane */}
                    <div className="flex flex-col items-center ms-2 px-3"
                        style={{ background: "var(--main_field_back)" }}>
                        <Text className="text-xs" style={{ color: "var(--text_nav_text)" }}>Switch Lane</Text>
                        <div className="flex">
                            {lanes.map((lane) => (
                                <button
                                    key={lane}
                                    onClick={() => setSelectedLane(lane)}
                                    className={`px-0.5 text-xs transition`}
                                    style={{
                                        border: selectedLane === lane
                                            ? "1px solid var(--tab_underline)"
                                            : "1px solid transparent",
                                        color: "var(--text_nav_text)",
                                        background: selectedLane === lane
                                            ? "var(--main_field_inner)"
                                            : "transparent",
                                    }}
                                >
                                    {lane}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Theme Switch Dropdown */}
                    <div
                        className="flex flex-col items-center ms-2 px-3 py-1"
                        style={{ background: "var(--main_field_back)" }}
                    >
                        <select
                            value={theme}
                            onChange={onThemeChange}
                            className="text-xs px-2 rounded py-1 outline-none border-none"
                            style={{
                                background: "var(--button_secondary_back)",
                                color: "var(--text_main_highlight)",
                            }}
                        >
                            {themes.map((t) => (
                                <option key={t.value} value={t.value}>
                                    {t.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Lane Countdown */}
                    <div className="flex gap-1">
                        <Text
                            className="px-2 text-xs font-bold"
                            style={{
                                background: "var(--button_note_back)",
                                color: "var(--button_note_text)",
                                border: "var(--button_note_border)",
                            }}
                        >
                            Lane Starts
                            <span className="block text-center">04:52:58</span>
                        </Text>
                        {/* Start Button */}
                        <Text
                            className="px-3 text-xs font-bold"
                            style={{
                                background: "var(--button_update_back)",
                                color: "var(--button_update_text)",
                                border: "var(--button_update_border)",
                            }}
                        >
                            Start
                            <span className="block text-center">Lane</span>
                        </Text>
                    </div>
                </div>
            </header>
        </div>
    );
}