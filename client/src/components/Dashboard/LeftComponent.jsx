import Text from "../Reusable/Text";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function LeftComponent() {
    // Example car details (can come from props, API, or context later)
    const carDetails = [
        { label: "Seller", value: "Loehmann Blasius Chevrolet Inc" },
        { label: "Title", value: "No" },
        { label: "Color", value: "Gray" },
        { label: "Drivetrain", value: "4WD" },
        { label: "Interior", value: "Leather" },
        { label: "Fuel", value: "Gasoline" },
        { label: "Sunroof", value: "No" },
        { label: "Engine", value: "3.60L" },
        { label: "Trans", value: "Automatic" },
        { label: "Trim", value: "Laredo" }
    ];

    return (
        <div className="bg-neutral-800 px-1 py-1 rounded-lg shadow-md">
            {/* Image */}
            <div>
                <img
                    src="/assets/car.PNG"
                    alt="Car"
                    className="w-70 h-40 mx-auto"
                />
            </div>

            {/* Announcements */}
            <div className="text-center mt-2 bg-gray-300 overflow-y-scroll h-20 ">
                <div className="flex justify-center gap-2 sticky top-0 bg-neutral-500 p-1 ">
                    <TfiAnnouncement className="text-white" />
                    <Text className="text-white text-xs">ANNOUNCEMENTS</Text>
                </div>
                <Text className="text-black text-xs text-left px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                    laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                    perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor perspiciatis unde eum...
                </Text>
            </div>

            {/* Vehicle Details */}
            <div className="max-w-md mx-auto shadow-lg">
                {/* Header */}
                <div className="flex justify-center gap-2 bg-neutral-500 items-center py-1">
                    <IoMdInformationCircleOutline className="text-white" />
                    <Text className="text-white text-xs font-semibold uppercase">
                        Vehicle Details
                    </Text>
                </div>

                {/* Details Grid */}
                <div className="bg-neutral-700 text-white py-3">
                    {/* Seller row (full width) */}
                    <div className="px-4 py-1 border-b border-gray-900 ">
                        <Text className="text-xs font-semibold text-white">
                            {carDetails[0].label}:  {carDetails[0].value}
                        </Text>
                    </div>

                    {/* Title / Color */}
                    <div className="grid grid-cols-2 text-xs">
                        {carDetails.slice(1, 3).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 py-1 border-b border-gray-900"
                            >
                                <Text className="font-semibold text-xs text-white">
                                    {detail.label}:  {detail.value}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Drivetrain / Interior */}
                    <div className="grid grid-cols-2 text-xs">
                        {carDetails.slice(3, 5).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 py-1 border-b border-gray-900"
                            >
                                <Text className="font-semibold text-xs text-white">
                                    {detail.label}:  {detail.value}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Fuel / Sunroof */}
                    <div className="grid grid-cols-2 text-xs">
                        {carDetails.slice(5, 7).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 py-1 border-b border-gray-900"
                            >
                                <Text className="font-semibold text-xs text-white">
                                    {detail.label}:  {detail.value}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Engine / Trans / Trim (3 columns in one line) */}
                    <div className="grid grid-cols-1 text-xs">
                        {carDetails.slice(7).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 py-1 border-b border-gray-900"
                            >
                                <Text className="font-semibold text-xs text-white">
                                    {detail.label}:  {detail.value}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>

            </div>



        </div>
    );
}
