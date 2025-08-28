import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import Text from "../Reusable/Text";
export default function AuctionLayout() {
  return (
    <div
      className="w-full h-screen p-2"
      style={{
              backgroundImage: "var(--background_image)",
              minHeight: "100vh" 
            }}
    >
      {/* Container */}
      <div
        className="relative w-full h-full rounded-lg overflow-hidden flex flex-col p-2"
        style={{
          background: "var(--main_field_back)",
          boxShadow: "0px 0px 15px 5px var(--main_field_shadow)",
        }}
      >
        {/* Close Button (top right) */}
        <button
          className="absolute top-2 right-2 text-2xl cursor-pointer"
          style={{
            color: "var(--button_update_text)",
            background: "var(--button_update_back)",
            border: "var(--button_update_border)",
            borderRadius: "8px",
          }}
        >
          <IoCloseCircleOutline />
        </button>

        {/* Top Section */}
        <div
          className="flex gap-2"
          style={{
            background: "var(--top_nav_background)",
            color: "var(--top_nav_text)",
            borderBottom: "1px solid var(--top_nav_border)",
          }}
        >
          {/* Left big input box */}
          <div className="flex-1 flex flex-col justify-between">
            <div
              className="h-20 rounded mt-2"
              style={{
                background: "var(--button_disabled)",
                color: "var(--main_field_text)",
              }}
            ></div>
            <div className="text-lg font-bold">
              <Text variant="h4" style={{ color: "var(--table_head_text)" }}>
                SELLER:
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="font-semibold px-8 py-2 col-span-2"
              style={{
                background: "var(--button2_back)",
                color: "var(--button2_text)",
                border: "var(--button2_border)",
              }}
            >
              REP
            </button>
            <button
              className="px-4"
              style={{
                background: "var(--button_secondary_back)",
                color: "var(--button_secondary_text)",
                border: "var(--button_secondary_border)",
              }}
            >
              RESERVE <span className="block">$</span>
            </button>
            <button
              className="px-4 py-2"
              style={{
                background: "var(--button_secondary_back)",
                color: "var(--button_secondary_text)",
                border: "var(--button_secondary_border)",
              }}
            >
              PRE BIDS
            </button>
            <button
              className="px-4 py-2"
              style={{
                background: "var(--button_secondary_back)",
                color: "var(--button_secondary_text)",
                border: "var(--button_secondary_border)",
              }}
            >
              WATCHES
            </button>
            <button
              className="px-4 py-2"
              style={{
                background: "var(--button_secondary_back)",
                color: "var(--button_secondary_text)",
                border: "var(--button_secondary_border)",
              }}
            >
              VIEWERS
            </button>
          </div>

          {/* Rep Chat */}
          <div
            className="flex-1 h-22 mt-[60px]"
            style={{
              background: "var(--main_field_inner, transparent)",
              color: "var(--main_field_text)",
              border: "2px solid var(--button_disabled)",
            }}
          >
            <Text
              className="text-xs p-2"
              style={{ color: "var(--text_secondary)" }}
            >
              REP CHAT
            </Text>
          </div>
        </div>

        {/* Middle Section */}
        <div
          className="flex flex-1 gap-2 p-1 mt-2"
          style={{
            background: "var(--main_field_inner, transparent)",
            color: "var(--main_field_text)",
          }}
        >
          {/* Left Column */}
          <div className="flex flex-col w-2/4 gap-1">
            {/* Vehicle Details */}
            <div
              className="flex-1 rounded p-2 text-sm"
              style={{
                background: "var(--main_field_back)",
                color: "var(--main_field_text)",
                border: "1px solid var(--main_field_hr)",
              }}
            >
              <div className="flex justify-center gap-1">
                <IoMdInformationCircleOutline
                  style={{ color: "var(--button_update_text)" }}
                  className="text-sm"
                />
                <Text
                  className="text-xs mb-2"
                  style={{ color: "var(--table_head_text)" }}
                >
                  VEHICLE DETAILS
                </Text>
              </div>
              <ul className="space-y-1">
                <li>VIN:</li>
                <li>Grade:</li>
                <li>Mileage:</li>
                <li>Engine:</li>
                <li>Drivetrain:</li>
                <li>Fuel:</li>
                <li>Transmission:</li>
                <li>Trim:</li>
                <li>Color:</li>
              </ul>
            </div>

            {/* History */}
            <div
              className="h-28 rounded p-2 text-xs"
              style={{
                background: "var(--main_field_back)",
                color: "var(--main_field_text)",
                border: "1px solid var(--main_field_hr)",
              }}
            >
              <div className="flex justify-center gap-1 items-center">
                <FaHistory style={{ color: "var(--button_update_text)" }} />
                <Text
                  className="text-xs"
                  style={{ color: "var(--table_head_text)" }}
                >
                  HISTORY
                </Text>
              </div>
            </div>
          </div>

          {/* Right Column (Announcements at bottom) */}
          <div className="flex flex-col w-2/3">
            <div
              className="flex-2 rounded"
              style={{
                background: "var(--main_field_back)",
                color: "var(--main_field_text)",
              }}
            ></div>
            <div
              className="flex-1 h-28 rounded p-2 text-xs font-bold mt-1"
              style={{
                background: "var(--button_note_back)",
                color: "var(--button_note_text)",
                border: "1px solid var(--button_note_border)",
              }}
            >
              <div className="flex justify-center gap-1 items-center">
                <TfiAnnouncement
                  className="text-sm"
                  strokeWidth={1}
                  style={{ color: "var(--button_update_text)" }}
                />
                <Text
                  className="text-xs"
                  style={{ color: "var(--table_head_text)" }}
                >
                  ANNOUNCEMENTS
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
