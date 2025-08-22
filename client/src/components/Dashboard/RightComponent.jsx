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
        <div className="flex flex-col h-full bg-neutral-800 rounded-2xl text-black">
            {/* Cars List */}
            <div className=" overflow-y-auto h-70 rounded-t-2xl">
                {cars.map((car, index) => (
                    <div
                        key={car.id}
                        className={`flex justify-between px-4 py-1 ${index % 2 === 0 ? "bg-neutral-300" : "bg-neutral-500"
                            }`}
                    >
                        <Text className="font-bold text-lg">{car.id} </Text>
                        <Text className="text-xs text-center font-semibold">{car.model}</Text>
                        <Text className="text-xs text-center font-semibold">{car.color} <span className="block">{car.miles}</span></Text>
                    </div>
                ))}
            </div>

            {/* History + Chat */}
            <div className="grid grid-cols-2 divide-x divide-neutral-700 bg-neutral-800 h-49 rounded-b-2xl ">
                {/* History */}
                <div className="flex flex-col h-[50%]">
                    {/* History Header */}
                    <div className="flex items-center justify-center gap-2 bg-neutral-500 py-1">
                        <MdHistory className="text-white text-xs" />
                        <Text className="text-white uppercase text-xs">History</Text>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-scroll text-gray-400 px-2 ">
                        <Text className="text-white text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ut, voluptatum? Excepturi temporibus eveniet, minima commodi id neque?
                            Possimus corrupti nulla id, doloremque, ut similique minus inventore quos exercitationem voluptatum quaerat!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Text>
                    </div>
                </div>

                {/* Chat */}
                <div className="flex flex-col h-[50%]">
                    {/* Chat Header */}
                    <div className="flex items-center justify-center gap-2 bg-neutral-500">
                        <IoChatbubble className="text-white text-xs" />
                        <Text className="text-white uppercase text-xs">Chat</Text>
                    </div>

                    {/* Chat Messages Header */}
                    <div className="text-gray-300 text-center border-b border-gray-700 py-1">
                        <Text className="font-semibold text-center text-white text-xs">Global Message</Text>
                    </div>

                    {/* Scrollable Messages */}
                    <div className="flex-1 overflow-y-auto px-2">
                        <Text className="text-white text-xs">
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

                    {/* Input Box (always bottom) */}
                    <div className="flex border-t border-neutral-700">
                        <input
                            type="text"
                            placeholder="Enter your message here"
                            className="flex-1 px-1 py-1 text-black bg-neutral-500 text-xs outline-none"
                        />
                        <button className="px-1 bg-neutral-600 text-white text-xs rounded-br-1xl">Submit</button>
                    </div>
                </div>
            </div>


        </div>
    );
}
