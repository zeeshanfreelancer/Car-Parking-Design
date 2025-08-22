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
        { label: "Engine", value: "3.60L" }
    ];

    return (
        <div className="bg-neutral-800 px-1 py-1 rounded-lg shadow-md">
            {/* Image */}
            <div>
                <img
                    src="/car.PNG"
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
            <div className="flex justify-center gap-2 bg-neutral-500 items-center">
                <IoMdInformationCircleOutline className="text-white" />
                <Text className="text-white text-xs">VEHICLE DETAILS</Text>
            </div>
            <div className="bg-neutral-700 text-white max-w-md mx-auto shadow-lg">
                {carDetails.map((detail, index) => (
                    <div
                        key={index}
                        className="flex items-center px-4 py-1 border-b border-gray-900"
                    >
                        {/* Label on left */}
                        <Text className="text-xs text-white w-1/3">
                            {detail.label}
                        </Text>

                        {/* Value in center */}
                        <Text className="text-xs text-white flex-1 text-center">
                            {detail.value}
                        </Text>
                    </div>
                ))}
            </div>


        </div>
    );
}
