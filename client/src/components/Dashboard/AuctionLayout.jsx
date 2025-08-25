import { IoIosClose } from "react-icons/io";

export default function AuctionLayout() {
  return (
    <div className="w-full h-screen bg-black text-white p-2">
      {/* Container */}
      <div className="relative w-full h-full bg-neutral-900 rounded-lg overflow-hidden flex flex-col p-2">
        
        {/* Close Button (top right) */}
        <button className="absolute top-2 right-2 text-2xl">
          <IoIosClose />
        </button>

        {/* Top Section */}
        <div className="flex items-center gap-2 mb-2">
          {/* Left big input box */}
          <div className="flex-1 bg-neutral-800 h-12 rounded"></div>

          {/* REP button */}
          <button className="bg-white text-black font-bold px-8 py-2 rounded">
            REP
          </button>

          {/* Reserve, Pre Bids, Watches, Viewers */}
          <div className="flex gap-2">
            <button className="border border-white px-4 py-2">RESERVE $</button>
            <button className="border border-white px-4 py-2">PRE BIDS</button>
            <button className="border border-white px-4 py-2">WATCHES</button>
            <button className="border border-white px-4 py-2">VIEWERS</button>
          </div>

          {/* Rep Chat */}
          <div className="flex-1 bg-neutral-800 h-12 rounded"></div>
        </div>

        {/* Seller Label */}
        <div className="text-lg font-bold mb-2">SELLER:</div>

        {/* Middle Section */}
        <div className="flex flex-1 gap-2">
          {/* Left Column */}
          <div className="flex flex-col w-1/3 gap-2">
            {/* Vehicle Details */}
            <div className="flex-1 bg-neutral-800 rounded p-2 text-sm">
              <h2 className="text-center text-gray-300 text-xs mb-2">ⓘ VEHICLE DETAILS</h2>
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
            <div className="h-28 bg-neutral-800 rounded p-2 text-xs">
              <h2 className="text-center text-gray-300">ⓘ HISTORY</h2>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex-1 bg-neutral-800 rounded"></div>

          {/* Right Column (Announcements at bottom) */}
          <div className="flex flex-col w-1/3">
            <div className="flex-1 bg-neutral-800 rounded"></div>
            <div className="h-28 bg-gray-300 text-black rounded p-2 text-xs font-bold mt-2">
              ◄ ANNOUNCEMENTS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
