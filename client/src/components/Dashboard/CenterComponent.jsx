import Text from "../Reusable/Text";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";
export default function CenterComponent() {
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
        <div className="bg-gray-800 rounded-lg shadow-lg text-white w-full max-w-2xl mx-auto">
            {/* Lot Header */}
            <div className="grid grid-cols-4 gap-1 text-center">
                <Text variant="p" className="bg-black rounded-l-lg text-white">{carInfo.lot}</Text>
                <Text className="bg-black text-white">{carInfo.grade}</Text>
                <div className="bg-black">
                    <Text variant="p" className="text-white">Mileage</Text>
                    <Text variant="p" className="text-white">{carInfo.mileage}</Text>
                </div>
                <p className="bg-black rounded-lg">{carInfo.status}</p>
            </div>

            {/* Car Details */}
            <div className="items-center justify-center text-center">
                <Text variant="h4" className="text-white">{carInfo.model}</Text>
                <Text variant="h5" className="text-white">{carInfo.vin}</Text>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-4 gap-1 text-center p-4">
                {summary.map((item, i) => (
                    <div key={i} className="border-[3px] border-black">
                        <Text variant="p" className="text-white">{item.label}</Text>
                        {item.value && <Text variant="p" className="text-white">{item.value}</Text>}
                    </div>
                ))}
            </div>

            {/* Colored bars */}
            <div className="grid grid-cols-4 gap-2 p-2">
                <div className="h-10 border-2 border-green-500 bg-gray-700"></div>
                <div className="h-10 border-2 border-red-600 bg-red-500"></div>
                <div className="h-10 border-2 border-yellow-500 bg-gray-900"></div>
                <div className="h-10 border-2 border-[#211DA6] bg-[#211DA6]"></div>
            </div>

            {/* Price Grid with Expand Icon */}
            <div className="flex items-center px-2">
                {/* Price Grid */}
                <div className="grid grid-cols-6 text-center flex-1">
                    {priceSteps.map((price, i) => (
                        <div
                            key={i}
                            className={`px-2 border border-gray-300 ${price === selectedPrice
                                    ? "bg-white text-black font-bold"
                                    : "bg-gray-900"
                                }`}
                        >
                            {price}
                        </div>
                    ))}
                </div>

                {/* Expand Icon */}
                <button className="ml-1 text-lg">
                    <RiExpandUpDownFill />
                </button>
            </div>



            <div className="grid grid-cols-6 mt-1 px-2">
                {bidIncrements.map((inc, i) => (
                    <button
                        key={i}
                        className={`bg-gray-900 py-1 w-full ${inc === "$100" ? "border-2 border-white" : ""
                            }`}
                    >
                        {inc}
                    </button>
                ))}
            </div>

            {/* Current Price + Lot */}
            <div className="grid grid-cols-2 gap-2 items-center text-center py-1 px-2 rounded mt-1">
                {/* Selected Price */}
                <Text
                    variant="p"
                    className="font-bold p-1 text-white bg-gray-500 rounded"
                >
                    {selectedPrice}
                </Text>

                {/* Lot Navigation */}
                <Text
                    variant="p"
                    className="p-1 text-white font-bold flex justify-center items-center gap-2 bg-gray-500 rounded"
                >
                    <span className="text-xl"><FaAngleDoubleLeft /></span>
                    {carInfo.lot}
                    <span className="text-xl"><FaAngleDoubleRight /></span>
                </Text>
            </div>


            {/* Start Vehicle + Controls */}
            <div className="grid grid-cols-2 gap-2 p-2">
                <div className="bg-white text-black text-center p-4 font-bold text-lg rounded">
                    Start Vehicle <br /> {selectedPrice}
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-3 grid grid-cols-2 gap-2">
                        <button className="bg-gray-700 py-2 rounded w-full">Reset</button>
                        <button className="bg-gray-700 py-2 rounded w-full">Undo</button>
                    </div>
                    <button className="bg-gray-700 py-2 rounded col-span-2">
                        Online Override
                    </button>
                    <button className="bg-red-600 py-2 rounded font-bold">X</button>
                </div>
            </div>

            {/* Final Actions */}
            <div className="grid grid-cols-3 gap-2 text-center font-bold p-2">
                <button className="bg-gray-700 py-3 rounded">NO SALE</button>
                <button className="bg-gray-700 py-3 rounded">OFFER</button>
                <button className="bg-gray-700 py-3 rounded">SOLD</button>
            </div>
        </div>
    );
}
