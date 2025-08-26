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
            className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
            style={{
                background: "var(--main_field_back)",
                color: "var(--text_main)",
            }}
        >
            {/* Lot Header */}
            <div className="grid grid-cols-4 gap-1 text-center items-center">
                <Text
                    className="rounded-l-lg text-sm py-2"
                    style={{
                        background: "var(--main_field_inner)",
                        color: "var(--text_main_highlight)",
                    }}
                >
                    {carInfo.lot}
                </Text>
                <Text
                    className="text-sm py-2"
                    style={{
                        background: "var(--main_field_inner)",
                        color: "var(--text_main_highlight)",
                    }}
                >
                    {carInfo.grade}
                </Text>
                <div
                    style={{
                        background: "var(--main_field_inner)",
                        color: "var(--text_main)",
                    }}
                >
                    <Text className="text-xs">Mileage</Text>
                    <Text className="text-sm">{carInfo.mileage}</Text>
                </div>
                <Text
                    variant="small"
                    className="rounded-r-lg py-2"
                    style={{
                        background: "var(--main_field_inner)",
                        color: "var(--text_main_highlight)",
                    }}
                >
                    {carInfo.status}
                </Text>
            </div>

            {/* Car Details */}
            <div className="items-center justify-center text-center">
                <Text variant="h5" className="font-bold" style={{ color: "var(--text_main_highlight)" }}>
                    {carInfo.model}
                </Text>
                <Text className="text-xs" style={{ color: "var(--text_main)" }}>
                    {carInfo.vin}
                </Text>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-4 gap-1 text-center p-2">
                {summary.map((item, i) => (
                    <div key={i} style={{ border: "2px solid var(--top_nav_border)" }}>
                        <Text className="text-xs" style={{ color: "var(--text_main)" }}>{item.label}</Text>
                        {item.value && <Text className="text-xs font-bold" style={{ color: "var(--text_main_highlight)" }}>{item.value}</Text>}
                    </div>
                ))}
            </div>

            {/* Colored bars */}
            <div className="grid grid-cols-4 gap-2 px-2 py-2 mb-2">
                <div style={{ height: "2.25rem", border: "2px solid var(--bar_green)", background: "var(--bar_green_back)" }}></div>
                <div style={{ height: "2.25rem", border: "2px solid var(--bar_red)", background: "var(--bar_red_back)" }}></div>
                <div style={{ height: "2.25rem", border: "2px solid var(--bar_yellow)", background: "var(--bar_yellow_back)" }}></div>
                <div style={{ height: "2.25rem", border: "2px solid var(--bar_blue)", background: "var(--bar_blue_back)" }}></div>
            </div>

            {/* Price Grid with Expand Icon */}
            <div className="flex items-center px-2">
                <div className="grid grid-cols-6 text-center flex-1">
                    {priceSteps.map((price, i) => (
                        <div
                            key={i}
                            className="px-2 py-0.5 border text-xs"
                            style={{
                                borderColor: "var(--top_nav_border)",
                                background: price === selectedPrice ? "var(--button_update_back)" : "var(--main_field_inner)",
                                color: price === selectedPrice ? "var(--button_update_text)" : "var(--text_main)",
                                fontWeight: price === selectedPrice ? "bold" : "normal",
                            }}
                        >
                            {price}
                        </div>
                    ))}
                </div>

                {/* Expand Icon */}
                <button
                    className="ml-1 text-lg"
                    onClick={() => setOpen(true)}
                    style={{ color: "var(--text_main_highlight)" }}
                >
                    <RiExpandUpDownFill />
                </button>
            </div>

            {/* Increment Model modal */}
            <IncrementModel open={open} onClose={() => setOpen(false)} />

            {/* Increments Grid */}
            <div className="grid grid-cols-6 mt-1 px-2">
                {bidIncrements.map((inc, i) => (
                    <button
                        key={i}
                        className="text-xs bg-transparent py-1 w-full"
                        style={{
                            border: inc === "$100" ? "1px solid var(--top_nav_border)" : "none",
                            color: "var(--text_main_highlight)",
                        }}
                    >
                        {inc}
                    </button>
                ))}
            </div>

            {/* Current Price + Lot */}
            <div className="grid grid-cols-2 gap-1 items-center text-center py-1 px-2 rounded mt-1">
                <Text
                    variant="p"
                    className="font-bold p-1"
                    style={{
                        color: "var(--button_update_text)",
                        background: "var(--button_update_back)",
                    }}
                >
                    {selectedPrice}
                </Text>
                <Text
                    variant="p"
                    className="p-1 font-bold flex justify-center items-center gap-2"
                    style={{
                        color: "var(--text_main_highlight)",
                        background: "var(--main_field_inner)",
                    }}
                >
                    <span className="text-xl"><FaAngleDoubleLeft /></span>
                    {carInfo.lot}
                    <span className="text-xl"><FaAngleDoubleRight /></span>
                </Text>
            </div>

            {/* Start Vehicle + Controls */}
            <div className="grid grid-cols-2 gap-1 px-2 py-1">
                <div
                    className="text-center p-4 font-bold text-sm"
                    style={{
                        background: "var(--button_update_back)",
                        color: "var(--button_update_text)",
                    }}
                >
                    Start Vehicle
                    <span className="block font-extrabold">{selectedPrice}</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                    <div className="col-span-3 grid grid-cols-2 gap-1">
                        <button
                            className="py-2 w-full text-xs cursor-pointer"
                            style={{
                                background: "var(--button_secondary_back)",
                                color: "var(--button_secondary_text)",
                            }}
                        >
                            Reset
                        </button>
                        <button
                            className="py-2 w-full text-xs cursor-pointer"
                            style={{
                                background: "var(--button_secondary_back)",
                                color: "var(--button_secondary_text)",
                            }}
                        >
                            Undo
                        </button>
                    </div>
                    <button
                        className="py-1 text-xs col-span-2 cursor-pointer"
                        style={{
                            background: "var(--main_field_inner)",
                            color: "var(--text_main_highlight)",
                        }}
                    >
                        Online <span className="block">Override</span>
                    </button>
                    <button
                        className="py-1 text-xs font-bold cursor-pointer"
                        style={{
                            background: "var(--button_note_back)",
                            color: "var(--button_note_text)",
                        }}
                    >
                        X
                    </button>
                </div>
            </div>

            {/* Final Actions */}
            <div className="grid grid-cols-3 gap-1 text-center px-2 py-1">
                <button
                    className="py-2 text-xs"
                    style={{
                        background: "var(--main_field_inner)",
                        color: "var(--text_main_highlight)",
                    }}
                >
                    NO <span className="block">SALE</span>
                </button>
                <button
                    className="text-xs"
                    style={{
                        background: "var(--main_field_inner)",
                        color: "var(--text_main_highlight)",
                    }}
                >
                    OFFER
                </button>
                <button
                    className="text-xs"
                    style={{
                        background: "var(--main_field_inner)",
                        color: "var(--text_main_highlight)",
                    }}
                >
                    SOLD
                </button>
            </div>
        </div>
    );
}