import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import Text from "../Reusable/Text";
export default function AuctionLayout() {
  return (
    <div className="w-full h-screen bg-black text-white p-2">
      {/* Container */}
      <div className="relative w-full h-full rounded-lg overflow-hidden flex flex-col p-2">

        {/* Close Button (top right) */}
        <button className="absolute top-2 right-2 text-2xl cursor-pointer">
          <IoCloseCircleOutline />
        </button>

        {/* Top Section */}
        <div className="flex gap-2 bg-black">
          {/* Left big input box */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="bg-neutral-800 h-20 rounded mt-2">

            </div>
            <div className="text-lg font-bold">
              <Text variant="h4" className="text-white">SELLER:</Text>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-white text-black font-semibold px-8 py-2 col-span-2">
              REP
            </button>
            <button className="border border-white px-4">RESERVE <span className="block">$</span></button>
            <button className="border border-white px-4 py-2">PRE BIDS</button>
            <button className="border border-white px-4 py-2">WATCHES</button>
            <button className="border border-white px-4 py-2">VIEWERS</button>
          </div>


          {/* Rep Chat */}
          <div className="flex-1 bg-transparent border border-white h-22 mt-[60px]">
            <Text className="text-xs text-white p-2">REP CHAT</Text>
          </div>
        </div>

        {/* Seller Label */}


        {/* Middle Section */}
        <div className="flex flex-1 gap-2 bg-neutral-600 p-1 mt-2">
          {/* Left Column */}
          <div className="flex flex-col w-2/4 gap-1">
            {/* Vehicle Details */}
            <div className="flex-1 bg-transparent border border-black rounded p-2 text-sm">
              <div className="flex justify-center gap-1">
                <IoMdInformationCircleOutline className="text-sm" />
                <Text className="text-white text-xs mb-2">VEHICLE DETAILS</Text>
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
            <div className="h-28 border border-black rounded p-2 text-xs">
              <div className="flex justify-center gap-1 items-center">
                <FaHistory />
                <Text className="text-white text-xs">HISTORY</Text>
              </div>
            </div>
          </div>

          {/* Right Column (Announcements at bottom) */}
          <div className="flex flex-col w-2/3">
            <div className="flex-2 bg-neutral-800 rounded"></div>
            <div className="flex-1 h-28 bg-gray-300 text-black rounded p-2 text-xs font-bold mt-1">
              <div className="flex justify-center gap-1 items-center">
                <TfiAnnouncement className="text-sm" strokeWidth={1} />
                <Text className="text-xs">ANNOUNCEMENTS</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
