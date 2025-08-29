import React, { useState } from "react";
import Text from "../Reusable/Text";
import { MdHistory } from "react-icons/md";
import { IoChatbubble } from "react-icons/io5";
export default function RightComponent({ theme }) {
    const [selectedCarId, setSelectedCarId] = useState("Q1");
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
        { id: "Q12", model: "2018 F-150", color: "White", miles: "148,193" },
        { id: "Q13", model: "2018 F-150", color: "White", miles: "148,193" },
        { id: "Q14", model: "2018 F-150", color: "White", miles: "148,193" },
    ];
    return (
        <div
            className="flex flex-col rounded-lg h-[80vh]"
            style={{
                background: "var(--main_field_back)",
                color: "var(--text_main)",
            }}
        >
            {/* Cars List (60%) */}
            <div className="flex-1 basis-[60%] overflow-y-auto rounded-lg">
                {cars.map((car, index) => {
                    const isSelected = selectedCarId === car.id;
                    return (
                        <div
                            key={car.id + index}
                            className="flex justify-between px-4 py-1 cursor-pointer"
                            onClick={() => setSelectedCarId(car.id)}
                            style={{
                                background: isSelected
                                    ? "var(--button_back)"
                                    : index % 2 === 0
                                        ? "var(--main_field_back)"
                                        : "var(--main_field_inner)",
                                color: isSelected ? "var(--button_text)" : "var(--text_main)",
                                transition: "background 0.2s, color 0.2s",
                            }}
                        >
                            <Text className="font-bold text-lg lg:text-xl xl:text-xl 2xl:text-3xl">{car.id} </Text>
                            <Text className="text-xs lg:text-xs xl-text-lg 2xl:text-2xl flex justify-center items-center font-semibold">
                                {car.model}
                            </Text>
                            <Text className="text-xs lg:text-xs xl-text-lg 2xl:text-2xl text-center font-semibold">
                                {car.color} <span className="block">{car.miles}</span>
                            </Text>
                        </div>
                    );
                })}
            </div>

            {/* History + Chat (40%) */}
            <div
                className="flex h-[40%] rounded-b-2xl border-t"
                style={{ borderColor: "var(--top_nav_border)" }}
            >
                {/* History (50%) */}
                <div className="flex flex-col w-1/2 border-r"
                    style={{ borderColor: "var(--top_nav_border)" }}>
                    {/* Header */}
                    <div className="flex items-center justify-center gap-2 py-1"
                        style={{ background: "var(--button_disabled)" }}>
                        <MdHistory style={{ color: "var(--top_nav_text)" }} className="text-xs lg:text-xs xl:text-xs 2xl:text-lg" />
                        <Text className="uppercase text-xs lg:text-xs xl:text-xs 2xl:text-lg" style={{ color: "var(--top_nav_text)" }}>
                            History
                        </Text>
                    </div>
                    {/* Scrollable Content */}
                    <div className="overflow-y-scroll px-2">
                        <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-xl" style={{ color: "var(--text_main)" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ut, voluptatum? Excepturi temporibus eveniet, minima commodi id neque?
                            Possimus corrupti nulla id, doloremque, ut similique minus inventore
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            quos exercitationem voluptatum quaerat! 
                            (repeat more text to test scrolling…)
                        </Text>
                    </div>
                </div>

                {/* Chat (50%) */}
                <div className="flex flex-col w-1/2">
                    {/* Chat Header */}
                    <div className="flex items-center justify-center gap-2 py-1"
                        style={{ background: "var(--button_disabled)" }}>
                        <IoChatbubble style={{ color: "var(--top_nav_text)" }} className="text-xs lg:text-xs xl:text-xs 2xl:text-lg" />
                        <Text className="uppercase text-xs lg:text-xs xl:text-xs 2xl:text-lg" style={{ color: "var(--top_nav_text)" }}>
                            Chat
                        </Text>
                    </div>
                    {/* Messages Header */}
                    <div className=" flex  justify-center items-center border-b py-1"
                        style={{ borderColor: "var(--top_nav_border)" }}>
                        <Text className="font-semibold text-xs lg:text-xs xl:text-xs 2xl:text-lg"
                            style={{ color: "var(--top_nav_text)" }}>
                            Global Message
                        </Text>
                    </div>
                    {/* Scrollable Messages */}
                    <div className="flex-1 overflow-y-scroll px-2">
                        <Text className="text-xs lg:text-xs xl:text-sm 2xl:text-xl" style={{ color: "var(--text_main)" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            Facilis a reprehenderit, dolores quibusdam veniam possimus officiis.
                            (repeat more text to test scrolling…)
                        </Text>
                    </div>
                    {/* Input Box */}
                    <div className="flex border-t h-[10%]"
                        style={{ borderColor: "var(--top_nav_border)" }}>
                        <input
                            type="text"
                            placeholder="Enter your message here"
                            className="flex-1 px-1 py-1 text-xs lg:text-xs xl:text-xs 2xl:text-xl outline-none"
                            style={{
                                background: "var(--input_background)",
                                color: "var(--text_main)",
                            }}
                        />
                        <button
                            className="px-1 text-xs lg:text-xs xl:text-xs 2xl:text-xl"
                            style={{
                                background: "var(--button_update_back)",
                                color: "var(--button_update_text)",
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}