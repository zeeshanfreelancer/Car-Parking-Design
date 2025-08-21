import Text from "../Reusable/Text";
import { MdHistory } from "react-icons/md";
import { IoChatbubble } from "react-icons/io5";

export default function RightComponent() {
    const cars = [
        { id: "Q1", model: "2012 Grand Cherokee", color: "Gray", miles: "143,253" },
        { id: "Q2", model: "2014 Outback", color: "Gray", miles: "140,141" },
        { id: "Q3", model: "2014 328i", color: "White", miles: "114,510" },
        { id: "Q4", model: "2011 CR-V", color: "Black", miles: "220,475" },
        { id: "Q5", model: "2013 Rogue", color: "Purple", miles: "80,408" },
        { id: "Q6", model: "2017 Jetta", color: "Red", miles: "162,358" },
        { id: "Q7", model: "2008 Camry", color: "Gray", miles: "119,244" },
        { id: "Q8", model: "2014 328i", color: "Black", miles: "166,866" },
        { id: "Q9", model: "2018 Explorer", color: "Silver", miles: "130,614" },
        { id: "Q10", model: "2017 Grand Cherokee", color: "Black", miles: "129,331" },
        { id: "Q11", model: "2018 F-150", color: "White", miles: "148,193" },
    ];

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white">
            {/* Cars List */}
            <div className="flex-1 overflow-y-auto">
                {cars.map((car, index) => (
                    <div
                        key={car.id}
                        className={`flex justify-between px-4 py-2 ${index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                            }`}
                    >
                        <span className="font-semibold">{car.id} {car.model}</span>
                        <span>{car.color} {car.miles}</span>
                    </div>
                ))}
            </div>

            {/* History + Chat */}
            <div className="grid grid-cols-2 divide-x divide-gray-700 bg-gray-800 h-65">
                {/* History */}
                <div className="flex flex-col h-[33%]">
                    <div className="flex items-center gap-2 bg-gray-500 py-1">
                        <MdHistory />
                        <Text variant="small" className="text-white uppercase">
                            History
                        </Text>
                    </div>
                    <div className="flex-1 overflow-y-auto text-gray-400 ps-2 pe-2">
                        {/* History Content */}
                        <Text variant="small" className="text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, voluptatum? Excepturi temporibus eveniet, minima commodi id neque? Possimus corrupti nulla id, doloremque, ut similique minus inventore quos exercitationem voluptatum quaerat!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, voluptatum? Excepturi temporibus eveniet, minima commodi id neque? Possimus corrupti nulla id, doloremque, ut similique minus inventore quos exercitationem voluptatum quaerat!

                        </Text>
                    </div>
                </div>

                {/* Chat */}
                <div className="flex flex-col">
                    {/* Chat Header */}
                    <div className="flex items-center gap-2 bg-gray-500 px-3 py-1">
                        <IoChatbubble />
                        <Text variant="small" className="text-white uppercase">
                            Chat
                        </Text>
                    </div>

                    {/* Chat Messages (scrollable) */}
                    <div className="text-gray-300 text-center border-b border-gray-300">
                        <Text variant="small" className="font-semibold text-center text-white">Global Message</Text>
                    </div>
                    <div className="overflow-y-auto h-[23%] ps-2 pe-2">
                        <Text variant="small" className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                        </Text>
                    </div>
                    {/* Chat Input (fixed at bottom) */}
                    <div>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Enter your message here"
                                className="flex-1 px-2 py-1 text-black bg-gray-400 text-xs outline-none"
                            />
                            <button className="px-2 bg-gray-600 text-white text-xs">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
