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
            className="px-1 py-1 rounded-lg shadow-md h-[80vh]"
            style={{
                background: "var(--main_field_back)",
                color: "var(--text_main)",
            }}
        >
            {/* Image */}
            <div className="mx-auto w-[100%] h-[40%]">
                <img
                    src="/assets/car.PNG"
                    alt="Car"
                    className="mx-auto h-full object-contain"
                />
            </div>

            {/* Announcements */}
            <div
                className="text-center h-[20%] flex flex-col"
                style={{
                    background: "var(--button_note_back)",
                    color: "var(--button_note_text)",
                    border: "1px solid var(--button_note_border)",
                }}
            >
                {/* Header */}
                <div
                    className="flex justify-center items-center gap-2 sticky top-0 py-1"
                    style={{
                        background: "var(--main_field_hr)",
                    }}
                >
                    <TfiAnnouncement style={{ color: "var(--button_update_text)" }} className="text-xs lg:text-xs xl:text-sm 2xl:text-xl" />
                    <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-lg font-semibold uppercase" style={{ color: "var(--text_main_highlight)" }}>
                        ANNOUNCEMENTS
                    </Text>
                </div>

                {/* Body (scrollable) */}
                <div className="overflow-y-auto text-left px-2">
                    <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-lg" style={{ color: "var(--button_note_text)" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                        laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                        perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                        laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                        perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                        laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                        perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam, cum
                        laboriosam voluptate, aut vitae facere veniam autem, quae quaerat quis
                        perspiciatis! Natus, cumque officia. Temporibus inventore esse facere expedita.
                    </Text>
                </div>
            </div>


            {/* Vehicle Details */}


            <div
                className="drop-shadow-lg h-[40%]"
                style={{
                    background: "var(--main_field_inner, transparent)",
                    color: "var(--table_head_text)",
                }}
            >
                {/* Header */}
                <div
                    className="flex justify-center gap-2 items-center py-1"
                    style={{
                        background: "var(--main_field_hr)"
                    }}
                >
                    <IoMdInformationCircleOutline className="text-xs lg:text-xs xl:text-sm 2xl:text-xl" style={{ color: "var(--button_update_text)" }} />
                    <Text
                        className="text-xs lg:text-xs xl:text-sm 2xl:text-lg font-semibold uppercase"
                        style={{ color: "var(--text_main_highlight)" }}
                    >
                        Vehicle Details
                    </Text>
                </div>

                {/* Details Grid */}
                <div className="pt-2">
                    {/* Seller row (full width) */}
                    <div
                        className="flex justify-between px-4 border-b"
                        style={{ borderColor: "2px var(--top_nav_border)" }}
                    >
                        <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-2xl" style={{ color: "var(--table_head_text)" }}>
                            {carDetails[0].label}:  {carDetails[0].value}
                        </Text>
                    </div>

                    {/* Title / Color */}
                    <div className="grid grid-cols-2">
                        {carDetails.slice(1, 3).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 border-b"
                                style={{ borderColor: "2px var(--top_nav_border)" }}
                            >
                                <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-2xl" style={{ color: "var(--table_head_text)" }}>
                                    {detail.label}:  {detail.value}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Drivetrain / Interior */}
                    <div className="grid grid-cols-2 ">
                        {carDetails.slice(3, 5).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 border-b"
                                style={{ borderColor: "2px var(--top_nav_border)" }}
                            >
                                <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-2xl" style={{ color: "var(--table_head_text)" }}>
                                    {detail.label}:  {detail.value}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Fuel / Sunroof */}
                    <div className="grid grid-cols-2">
                        {carDetails.slice(5, 7).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 border-b"
                                style={{ borderColor: "2px var(--top_nav_border)" }}
                            >
                                <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-2xl" style={{ color: "var(--table_head_text)" }}>
                                    {detail.label}:  {detail.value}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Engine / Trans / Trim */}
                    <div className="grid grid-cols-1">
                        {carDetails.slice(7).map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between px-4 border-b"
                                style={{ borderColor: "2px var(--top_nav_border)" }}
                            >
                                <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-2xl" style={{ color: "var(--table_head_text)" }}>
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