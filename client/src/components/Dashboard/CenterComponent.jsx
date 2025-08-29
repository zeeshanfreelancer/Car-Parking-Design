import React, { useState } from "react";
import Text from "../Reusable/Text";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";
import IncrementModel from "./IncrementModel";

export default function CenterComponent({ theme }) {
    const [open, setOpen] = useState(false);

    // Example dynamic data (later you can pass as props or from API)
    const carInfo = {
        lot: "Q1",
        grade: "Grade",
        mileage: "143,253",
        status: "ACTUAL",
        model: "2012 Grand Cherokee",
        vin: "1C4RJFAGOCC297969",
    };

    const summary = [
        { label: "Reserve", value: "0.00" },
        { label: "Est Value", value: "" },
        { label: "Prox Bids", value: "0" },
        { label: "Rep Online", value: "No" },
    ];

    const priceSteps = [
        "$3800", "$3900", "$4000", "$4100", "$4200", "$4300",
        "$4400", "$4500", "$4600", "$4700", "$4800", "$4900",
        "$5000", "$5100", "$5200", "$5300", "$5400", "$5500"
    ];
    const selectedPrice = "$5000"; // highlight this

    const bidIncrements = ["$25", "$50", "$100", "$200", "$250", "$500"];

    return (
        <div
            className="rounded-lg shadow-lg w-full mx-auto h-[80vh]"
            style={{
                background: "var(--main_field_back)",
                color: "var(--text_main)",
            }}
        >
            {/* Lot Header */}
            <div className="grid grid-cols-4 gap-1 text-center h-[8%]">
                <div
                    className="flex justify-center rounded-l-lg"
                    style={{
                        background: "var(--menu_back)",
                        color: "var(--menu_text)",
                    }}
                >
                    <Text className="sm:text-xs lg:text-sm xl:text-lg 2xl:text-xl">{carInfo.lot}</Text>
                </div>

                <div
                    className="flex justify-center"
                    style={{
                        background: "var(--menu_back)",
                        color: "var(--menu_text)",
                    }}
                >
                    <Text className="sm:text-xs lg:text-lg xl:text-lg 2xl:text-xl">{carInfo.grade}</Text>
                </div>

                <div
                    className="flex flex-col h-full"
                    style={{
                        background: "var(--menu_back)",
                        color: "var(--menu_text)",
                    }}
                >
                    <Text className="text-sm 2xl:text-lg">Mileage</Text>
                    <span className="sm:text-xs lg:text-sm xl:text-sm 2xl:text-xl">{carInfo.mileage}</span>
                </div>

                <div
                    className="rounded-r-lg flex justify-center h-full"
                    style={{
                        background: "var(--menu_back)",
                        color: "var(--menu_text)",
                    }}
                >
                    <Text className="sm:text-sm lg:text-lg xl:text-lg 2xl:text-xl">{carInfo.status}</Text>
                </div>
            </div>



            <div className="h-[22%] px-2 flex flex-col">
                {/* Car Details */}
                <div className="flex flex-col items-center h-[50%] py-1 2xl:pt-3">
                    <Text className="font-bold text-lg lg:text-lg xl:text-lg 2xl:text-2xl" style={{ color: "var(--text_main)" }}>
                        {carInfo.model}
                    </Text>
                    <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-xl" style={{ color: "var(--text_main)" }}>
                        {carInfo.vin}
                    </Text>
                </div>

                {/* Summary */}
                <div className="flex justify-between gap-2 h-[50%] py-2">
                    {summary.map((item, i) => (
                        <div className="w-full flex flex-col items-center justify-center" key={i} style={{ border: "var(--button_border)" }}>
                            <Text className="text-xs lg:text-sm xl:text-sm 2xl:text-xl" style={{ color: "var(--text_main)" }}>{item.label}</Text>
                            {item.value && <Text className="text-xs lg:text-sm xl:text-sm 2xl:text-xl font-bold" style={{ color: "var(--top_nav_text)" }}>{item.value}</Text>}
                        </div>
                    ))}
                </div>
            </div>
            {/* Colored bars as buttons */}
            <div className="grid grid-cols-4 gap-2 px-2 py-1 h-[8%]">
                <button
                    style={{
                        // height: "2.25rem",
                        border: "2px solid var(--good_color)",
                        // background: "var(--bar_green_back)",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    aria-label="Green Bar"
                />
                <button
                    style={{
                        // height: "2.25rem",
                        // border: "2px solid var(--bar_red)",
                        background: "var(--bad_color)",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    aria-label="Red Bar"
                />
                <button
                    style={{
                        // height: "2.25rem",
                        border: "2px solid var(--conditional_color)",
                        background: "var(--black_color)",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    aria-label="Yellow Bar"
                />
                <button
                    style={{
                        // height: "2.25rem",
                        // border: "2px solid var(--bar_blue)",
                        background: "var(--dark_blue)",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    aria-label="Blue Bar"
                />
            </div>

            {/* Price Grid with Expand Icon */}
            <div className="flex px-2 py-1 h-[15%]">
                <div className="grid grid-cols-6 text-center flex-1">
                    {priceSteps.map((price, i) => (
                        <div
                            key={i}
                            className="px-1 border text-xs lg:text-xs xl:text-sm 2xl:text-lg"
                            style={{
                                borderColor: "var(--button_note_border)",
                                background: price === selectedPrice
                                    ? "var(--button_update_back)"
                                    : "var(--main_field_inner)",
                                color: price === selectedPrice
                                    ? "var(--button_update_text)"
                                    : "var(--text_main)",
                            }}
                        >
                            {price}
                        </div>
                    ))}
                </div>

                {/* Expand Icon styled as a button */}
                <button
                    className="lg:text-sm xl:text-sm 2xl:text-3xl cursor-pointer"
                    onClick={() => setOpen(true)}
                    style={{
                        color: "var(--text_main_highlight)",
                        fontWeight: "bold",
                    }}
                    aria-label="Expand Price Grid"
                >
                    <RiExpandUpDownFill style={{ color: "var(--top_nav_text)" }} />
                </button>
            </div>

            {/* Increment Model modal */}
            <IncrementModel open={open} onClose={() => setOpen(false)} />

            {/* Increments Grid */}
            <div className="grid grid-cols-6 px-2 h-[5%] ">
                {bidIncrements.map((inc, i) => (
                    <button
                        key={i}
                        className="text-xs lg:text-xs xl:text-sm 2xl:text-lg bg-transparent"
                        style={{
                            border: inc === "$100" ? "var(--button_note_border)" : "none",
                            color: "var(--top_nav_text)",
                        }}
                    >
                        {inc}
                    </button>
                ))}
            </div>
            <div className="h-[40%] flex flex-col gap-2 mt-1"
            >
                {/* Current Price + Lot */}
                <div className="grid grid-cols-2 gap-1 text-center px-2 rounded h-[20%]">
                    <Text
                        className="font-semibold py-1 flex justify-center items-center text-xs lg:text-lg xl:text-xl 2xl:text-2xl"
                        style={{
                            color: "var(--button_text)",
                            background: "var(--button_back)",
                        }}
                    >
                        {selectedPrice}
                    </Text>
                    <Text
                        className="py-1 font-bold flex justify-center items-center gap-2 text-xs lg:text-lg xl:text-xl 2xl:text-2xl"
                        style={{
                            color: "var(--button_text)",
                            background: "var(--button_back)",
                        }}
                    >
                        <span className="text-xs lg:text-xl xl:text-2xl 2xl:text-3xl"><FaAngleDoubleLeft /></span>
                        {carInfo.lot}
                        <span className="text-xs lg:text-xl xl:text-2xl 2xl:text-3xl"><FaAngleDoubleRight /></span>
                    </Text>
                </div>

                {/* Start Vehicle + Controls */}
                <div className="grid grid-cols-2 gap-1 px-2 h-[50%]">
                    <div
                        className="flex flex-col justify-center items-center"
                        style={{
                            background: "var(--button2_back)",
                            color: "var(--button2_text)",
                        }}
                    >
                        <Text className="text-lg xl:text-lg 2xl:text-3xl text-center font-bold">
                            Start Vehicle
                        <span className="font-bold 2xl:font-extrabold block">{selectedPrice}</span>
                        </Text>
                    </div>

                    <div className="grid grid-cols-3 gap-1">
                        <div className="col-span-3 grid grid-cols-2 gap-1">
                            <button
                                className="py-2 w-full text-sm lg:text-sm xl:text-sm 2xl:text-2xl cursor-pointer"
                                style={{
                                    color: "var(--top_nav_text)",
                                    background: "var(--button_disabled)",
                                }}
                            >
                                Reset
                            </button>
                            <button
                                className="py-2 w-full text-sm lg:text-sm xl:text-sm 2xl:text-2xl cursor-pointer"
                                style={{
                                    color: "var(--top_nav_text)",
                                    background: "var(--button_disabled)",
                                }}
                            >
                                Undo
                            </button>
                        </div>
                        <button
                            className="py-1 text-sm lg:text-sm xl:text-sm 2xl:text-2xl col-span-2 cursor-pointer"
                            style={{
                                color: "var(--button_text)",
                                background: "var(--button_back)",
                            }}
                        >
                            Online <span className="block">Override</span>
                        </button>
                        <button
                            className="py-1 text-sm lg:text-sm xl:text-sm 2xl:text-2xl font-bold cursor-pointer"
                            style={{
                                background: "var(--bad_color)",
                                color: "var(--button3_text)",
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>

                {/* Final Actions */}
                <div className="grid grid-cols-3 gap-1 text-center px-2 h-[30%]">
                    <button
                        className="text-sm lg:text-sm xl:text-sm 2xl:text-2xl"
                        style={{
                            color: "var(--button_text)",
                            background: "var(--button_back)",
                        }}
                    >
                        NO <span className="block">SALE</span>
                    </button>
                    <button
                        className="text-sm lg:text-sm xl:text-sm 2xl:text-2xl"
                        style={{
                            color: "var(--button_text)",
                            background: "var(--button_back)",
                        }}
                    >
                        OFFER
                    </button>
                    <button
                        className="text-sm lg:text-sm xl:text-sm 2xl:text-2xl"
                        style={{
                            color: "var(--button_text)",
                            background: "var(--button_back)",
                        }}
                    >
                        SOLD
                    </button>
                </div>
            </div>
        </div>
    );
}