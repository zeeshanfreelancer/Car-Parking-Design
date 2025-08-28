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
            <div className="grid grid-cols-4 gap-1 text-center items-stretch">
                <Text
                    className="rounded-l-lg text-sm flex items-center justify-center"
                    style={{
                        background: "var(--menu_back)",
                        color: "var(--menu_text)",
                    }}
                >
                    {carInfo.lot}
                </Text>

                <Text
                    className="text-sm flex items-center justify-center"
                    style={{
                        background: "var(--menu_back)",
                        color: "var(--menu_text)",
                    }}
                >
                    {carInfo.grade}
                </Text>

                <div
                    className="flex flex-col items-center justify-center"
                    style={{
                        background: "var(--menu_back)",
                        color: "var(--menu_text)",
                    }}
                >
                    <Text variant="small" style={{ color: "var(----menu_text)" }}>Mileage</Text>
                    <span className="text-sm" style={{ color: "var(----menu_text)" }}>{carInfo.mileage}</span>
                </div>

                <Text
                    variant="small"
                    className="rounded-r-lg flex items-center justify-center"
                    style={{
                        background: "var(--menu_back)",
                        color: "var(--menu_text)",
                    }}
                >
                    {carInfo.status}
                </Text>
            </div>


            {/* Car Details */}
            <div className="items-center justify-center text-center">
                <Text variant="h5" className="font-bold" style={{ color: "var(--text_main)" }}>
                    {carInfo.model}
                </Text>
                <Text className="text-xs" style={{ color: "var(--text_main)" }}>
                    {carInfo.vin}
                </Text>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-4 gap-1 text-center p-2">
                {summary.map((item, i) => (
                    <div key={i} style={{ border: "var(--button_border)" }}>
                        <Text className="text-xs" style={{ color: "var(--text_main)" }}>{item.label}</Text>
                        {item.value && <Text className="text-xs font-bold" style={{ color: "var(--top_nav_text)" }}>{item.value}</Text>}
                    </div>
                ))}
            </div>

            {/* Colored bars as buttons */}
            <div className="grid grid-cols-4 gap-2 px-2 py-2 mb-2">
                <button
                    style={{
                        height: "2.25rem",
                        border: "2px solid var(--good_color)",
                        // background: "var(--bar_green_back)",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    aria-label="Green Bar"
                />
                <button
                    style={{
                        height: "2.25rem",
                        // border: "2px solid var(--bar_red)",
                        background: "var(--bad_color)",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    aria-label="Red Bar"
                />
                <button
                    style={{
                        height: "2.25rem",
                        border: "2px solid var(--conditional_color)",
                        background: "var(--black_color)",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    aria-label="Yellow Bar"
                />
                <button
                    style={{
                        height: "2.25rem",
                        // border: "2px solid var(--bar_blue)",
                        background: "var(--dark_blue)",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    aria-label="Blue Bar"
                />
            </div>

            {/* Price Grid with Expand Icon */}
            <div className="flex items-center px-2">
                <div className="grid grid-cols-6 text-center flex-1">
                    {priceSteps.map((price, i) => (
                        <div
                            key={i}
                            className="px-2 py-0.5 border text-xs"
                            style={{
                                borderColor: "var(--button_note_border)",
                                background: price === selectedPrice
                                    ? "var(--button_update_back)"
                                    : "var(--main_field_inner)",
                                color: price === selectedPrice
                                    ? "var(--button_update_text)"
                                    : "var(--text_main)",
                                fontWeight: price === selectedPrice ? "bold" : "normal",
                            }}
                        >
                            {price}
                        </div>
                    ))}
                </div>

                {/* Expand Icon styled as a button */}
                <button
                    className="text-lg cursor-pointer"
                    onClick={() => setOpen(true)}
                    style={{
                        color: "var(--text_main_highlight)",
                        fontWeight: "bold",
                    }}
                    aria-label="Expand Price Grid"
                >
                    <RiExpandUpDownFill style={{color:"var(--top_nav_text)"}} />
                </button>
            </div>

            {/* Increment Model modal */}
            <IncrementModel open={open} onClose={() => setOpen(false)} />

            {/* Increments Grid */}
            <div className="grid grid-cols-6 mt-1 px-3">
                {bidIncrements.map((inc, i) => (
                    <button
                        key={i}
                        className="text-xs bg-transparent py-1 w-full"
                        style={{
                            border: inc === "$100" ? "var(--button_note_border)" : "none",
                            color: "var(--top_nav_text)",
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
                        color: "var(--button_text)",
                        background: "var(--button_back)",
                    }}
                >
                    {selectedPrice}
                </Text>
                <Text
                    variant="p"
                    className="p-1 font-bold flex justify-center items-center gap-2"
                    style={{
                        color: "var(--button_text)",
                        background: "var(--button_back)",
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
                        background: "var(--button2_back)",
                        color: "var(--button2_text)",
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
                                color: "var(--top_nav_text)",
                                background: "var(--button_disabled)",
                            }}
                        >
                            Reset
                        </button>
                        <button
                            className="py-2 w-full text-xs cursor-pointer"
                            style={{
                                color: "var(--top_nav_text)",
                                background: "var(--button_disabled)",
                            }}
                        >
                            Undo
                        </button>
                    </div>
                    <button
                        className="py-1 text-xs col-span-2 cursor-pointer"
                        style={{
                        color: "var(--button_text)",
                        background: "var(--button_back)",
                    }}
                    >
                        Online <span className="block">Override</span>
                    </button>
                    <button
                        className="py-1 text-xs font-bold cursor-pointer"
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
            <div className="grid grid-cols-3 gap-1 text-center px-2 py-1">
                <button
                    className="py-2 text-xs"
                    style={{
                        color: "var(--button_text)",
                        background: "var(--button_back)",
                    }}
                >
                    NO <span className="block">SALE</span>
                </button>
                <button
                    className="text-xs"
                    style={{
                        color: "var(--button_text)",
                        background: "var(--button_back)",
                    }}
                >
                    OFFER
                </button>
                <button
                    className="text-xs"
                    style={{
                        color: "var(--button_text)",
                        background: "var(--button_back)",
                    }}
                >
                    SOLD
                </button>
            </div>
        </div>
    );
}