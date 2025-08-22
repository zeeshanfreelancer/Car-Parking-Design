import React, { useState } from "react";
import Text from "../Reusable/Text";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";
import IncrementModel from "./IncrementModel"; // ✅ correct import

export default function CenterComponent() {
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
        <div className="bg-neutral-800 rounded-lg shadow-lg text-white w-full max-w-2xl mx-auto">
            {/* Lot Header */}
            <div className="grid grid-cols-4 gap-1 text-center items-center">
                <Text className="bg-black rounded-l-lg text-white text-sm py-2">{carInfo.lot}</Text>
                <Text className="bg-black text-white text-sm py-2">{carInfo.grade}</Text>
                <div className="bg-black">
                    <Text className="text-white text-xs">Mileage</Text>
                    <Text className="text-white text-sm">{carInfo.mileage}</Text>
                </div>
                <Text variant="small" className="bg-black text-white rounded-r-lg py-2">{carInfo.status}</Text>
            </div>

            {/* Car Details */}
            <div className="items-center justify-center text-center">
                <Text variant="h5" className="text-white font-bold">{carInfo.model}</Text>
                <Text className="text-white text-xs">{carInfo.vin}</Text>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-4 gap-1 text-center p-2">
                {summary.map((item, i) => (
                    <div key={i} className="border-[2px] border-black">
                        <Text className="text-white text-xs">{item.label}</Text>
                        {item.value && <Text className="text-white text-xs font-bold">{item.value}</Text>}
                    </div>
                ))}
            </div>

            {/* Colored bars */}
            <div className="grid grid-cols-4 gap-2 px-2 py-2 mb-2">
                <div className="h-9 border-2 border-green-500 bg-gray-700"></div>
                <div className="h-9 border-2 border-red-600 bg-red-500"></div>
                <div className="h-9 border-2 border-yellow-500 bg-gray-900"></div>
                <div className="h-9 border-2 border-[#211DA6] bg-[#211DA6]"></div>
            </div>

            {/* Price Grid with Expand Icon */}
            <div className="flex items-center px-2">
                <div className="grid grid-cols-6 text-center flex-1">
                    {priceSteps.map((price, i) => (
                        <div
                            key={i}
                            className={`px-2 py-0.5 border border-gray-300 text-xs ${price === selectedPrice
                                    ? "bg-white text-black font-bold"
                                    : "bg-neutral-900"
                                }`}
                        >
                            {price}
                        </div>
                    ))}
                </div>

                {/* Expand Icon */}
                <button
                    className="ml-1 text-lg"
                    onClick={() => setOpen(true)}
                >
                    <RiExpandUpDownFill />
                </button>
            </div>

            {/* ✅ Increment Model modal */}
            <IncrementModel open={open} onClose={() => setOpen(false)} />

            {/* Increments Grid */}
            <div className="grid grid-cols-6 mt-1 px-2">
                {bidIncrements.map((inc, i) => (
                    <button
                        key={i}
                        className={`text-xs bg-transparent py-1 w-full ${inc === "$100" ? "border-1 border-white" : ""
                            }`}
                    >
                        {inc}
                    </button>
                ))}
            </div>

            {/* Current Price + Lot */}
            <div className="grid grid-cols-2 gap-1 items-center text-center py-1 px-2 rounded mt-1">
                <Text
                    variant="p"
                    className="font-bold p-1 text-white bg-neutral-700"
                >
                    {selectedPrice}
                </Text>
                <Text
                    variant="p"
                    className="p-1 text-white font-bold flex justify-center items-center gap-2 bg-neutral-700"
                >
                    <span className="text-xl"><FaAngleDoubleLeft /></span>
                    {carInfo.lot}
                    <span className="text-xl"><FaAngleDoubleRight /></span>
                </Text>
            </div>

            {/* Start Vehicle + Controls */}
            <div className="grid grid-cols-2 gap-1 px-2 py-1">
                <div className="bg-white text-black text-center p-4 font-bold text-sm">
                    Start Vehicle
                    <span className="block font-extrabold">{selectedPrice}</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                    <div className="col-span-3 grid grid-cols-2 gap-1">
                        <button className="bg-neutral-500 py-2 w-full text-xs cursor-pointer">Reset</button>
                        <button className="bg-neutral-500 py-2  w-full text-xs cursor-pointer">Undo</button>
                    </div>
                    <button className="bg-neutral-700 py-1 text-xs col-span-2 cursor-pointer">Online <span className="block">Override</span></button>
                    <button className="bg-red-700 py-1 text-xs font-bold cursor-pointer">X</button>
                </div>
            </div>

            {/* Final Actions */}
            <div className="grid grid-cols-3 gap-1 text-center px-2 py-1">
                <button className="bg-neutral-700 py-2 text-xs">NO <span className="block">SALE</span>
                </button>
                <button className="bg-neutral-700 text-xs">OFFER</button>
                <button className="bg-neutral-700 text-xs">SOLD</button>
            </div>
        </div>
    );
}
