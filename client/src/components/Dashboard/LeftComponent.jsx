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
        <div
            className="px-1 py-1 rounded-lg shadow-md h-[100%]"
            style={{
                background: "var(--main_field_back)",
                color: "var(--text_main)",
            }}
        >
            {/* Image */}
            <div>
                <img
                    src="/assets/car.PNG"
                    alt="Car"
                    className="w-[60%] h-[50%] mx-auto"
                />
            </div>

            {/* Announcements */}
            <div
                className="text-center mt-2 overflow-y-scroll h-[15%]"
                style={{
                    background: "var(--button_note_back)",
                    color: "var(--button_note_text)",
                    border: "1px solid var(--button_note_border)",
                }}
            >
                <div
                    className="flex justify-center gap-2 sticky top-0 p-1"
                    style={{
                        background: "var(--main_field_hr)"
                    }}
                >
                    <TfiAnnouncement style={{ color: "var(--button_update_text)" }} />
                    <Text className="text-xs" style={{ color: "var(--text_main_highlight)" }}>
                        ANNOUNCEMENTS
                    </Text>
                </div>
                <Text className="text-xs text-left px-2" style={{ color: "var(--button_note_text)" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                    laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                    perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                    laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                    perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                    laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                    perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                    laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                    perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                </Text>
            </div>

            {/* Vehicle Details */}
            <div
                className="drop-shadow-lg h-[43%]"
                style={{
                    background: "var(--main_field_inner, transparent)",
                    color: "var(--table_head_text)",
                    border: "1px solid var(--main_field_hr)",
                }}
            >
                {/* Header */}
                <div
                    className="flex justify-center gap-2 items-center py-1"
                    style={{
                        background: "var(--main_field_hr)"
                    }}
                >
                    <IoMdInformationCircleOutline style={{ color: "var(--button_update_text)" }} />
                    <Text
                        className="text-xs font-semibold uppercase"
                        style={{ color: "var(--text_main_highlight)" }}
                    >
                        Vehicle Details
                    </Text>
                </div>

                {/* Details Grid */}
                <div className="py-3">
                    {/* Seller row (full width) */}
                    <div
                        className="flex justify-between px-4 border-b"
                        style={{ borderColor: "var(--top_nav_border)" }}
                    >
                        <Text className="text-xs font-semibold" style={{ color: "var(--table_head_text)" }}>
                            {carDetails[0].label}:  {carDetails[0].value}
                        </Text>
                    </div>

                    {/* Title / Color */}
                    <div className="grid grid-cols-2 text-xs">
                        {carDetails.slice(1, 3).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 py-1 border-b"
                                style={{ borderColor: "var(--top_nav_border)" }}
                            >
                                <Text className="font-semibold text-xs" style={{ color: "var(--table_head_text)" }}>
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
                                className="flex justify-between px-4 py-1 border-b"
                                style={{ borderColor: "var(--top_nav_border)" }}
                            >
                                <Text className="font-semibold text-xs" style={{ color: "var(--table_head_text)" }}>
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
                                className="flex justify-between px-4 py-1 border-b"
                                style={{ borderColor: "var(--top_nav_border)" }}
                            >
                                <Text className="font-semibold text-xs" style={{ color: "var(--table_head_text)" }}>
                                    {detail.label}:  {detail.value}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Engine / Trans / Trim */}
                    <div className="grid grid-cols-1 text-xs">
                        {carDetails.slice(7).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 py-1 border-b"
                                style={{ borderColor: "var(--top_nav_border)" }}
                            >
                                <Text className="font-semibold text-xs" style={{ color: "var(--table_head_text)" }}>
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