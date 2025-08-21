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
        { label: "Trim", value: "Laredo" },
    ];

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            {/* Image */}
            <div>
                <img
                    src="/car.PNG"
                    alt="Car"
                    className="w-70 h-50 mx-auto"
                />
            </div>

            {/* Announcements */}
            <div className="text-center mt-4 bg-gray-300 overflow-y-scroll h-25 p-2">
                <div className="flex justify-center gap-2 sticky top-0 bg-gray-600 p-1 rounded">
                    <TfiAnnouncement className="text-white" />
                    <Text className="text-white text-xs">ANNOUNCEMENTS</Text>
                </div>
                <Text className="text-black text-xs text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                    laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                    perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor perspiciatis unde eum...
                </Text>
            </div>

            {/* Vehicle Details */}
            <div className="flex justify-center gap-2 bg-gray-500 items-center">
                <IoMdInformationCircleOutline className="text-white" />
                <Text className="text-white text-xs">VEHICLE DETAILS</Text>
            </div>
            <div className="bg-gray-900 text-white max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
                {carDetails.map((detail, index) => (
                    <div
                        key={index}
                        className={`px-4 py-1 border-b border-gray-700`}
                    >
                        <Text variant="small" className="text-white">
                            {detail.label}: {detail.value}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
}
