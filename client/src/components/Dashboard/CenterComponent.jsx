export default function CenterComponent() {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg text-white w-full max-w-2xl mx-auto">
            <div className="grid grid-cols-4 gap-1 text-center"> 
                <p className="bg-black rounded-l-lg">Q1</p>
                <p className="bg-black">Grade</p>
                <div className="bg-black">
                    <p>Mileage</p>
                    <p>143,253</p>
                </div>
                <p className="bg-black rounded-lg">ACTUAL</p>
                </div>


            <div className="items-center justify-center text-center">
                <p className="text-xl">2012 Grand Cherokee</p>
                <p>1C4RJFAGOCC297969</p>
            </div>

           <div className="grid grid-cols-4 gap-1 text-center p-4">
                <div className="border-[3px] border-black">
                    <p>Reserve</p>
                    <p>0.00</p>
                </div>
                <div className="border-[3px] border-black">
                    <p>Est Value</p>
                </div>
                <div className="border-[3px] border-black">
                    <p>Prox Bids</p>
                    <p>0</p>
                </div>
                <div className="border-[3px] border-black">
                    <p>Rep Online</p>
                    <p>No</p>
                </div>
                </div>

                <div className="grid grid-cols-4 gap-2 p-2">
                    <div className="h-10 border-2 border-green-500 bg-gray-700"></div>
                    <div className="h-10 border-2 border-red-600 bg-red-500"></div>
                    <div className="h-10 border-2 border-yellow-500 bg-gray-900"></div>
                    <div className="h-10 border-2 border-[#211DA6] bg-[#211DA6]"></div>
                </div>

                <div className="grid grid-cols-6  text-center items-center p-2">
                    <div className="bg-gray-900 px-2 py-0 border-1">$3800</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$3900</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4000</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4100</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4200</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4300</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4400</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4500</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4600</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4700</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4800</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$4900</div>
                    <div className="bg-white text-black px-2 py-0 ">$5000</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$5100</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$5200</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$5300</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$5400</div>
                    <div className="bg-gray-900 px-2 py-0 border-1">$5500</div>
                </div>

                <div className="flex justify-center gap-2">
                    <button className="bg-gray-900 px-3 py-1 rounded">$25</button>
                    <button className="bg-gray-900 px-3 py-1 rounded">$50</button>
                    <button className="bg-gray-900 px-3 py-1 rounded border-1">$100</button>
                    <button className="bg-gray-900 px-3 py-1 rounded">$200</button>
                    <button className="bg-gray-900 px-3 py-1 rounded">$250</button>
                    <button className="bg-gray-900 px-3 py-1 rounded">$500</button>
                </div>

                <div className="grid grid-cols-2 gap-2 items-center text-center py-1 px-2 rounded mt-2">
                    <p className="font-bold bg-gray-900 p-2">$5000</p>
                    <p className="bg-gray-900 p-2">
                        <span className="text-xl">⟵</span> Q1 <span className="text-xl">⟶</span>
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="bg-white text-black text-center p-4 font-bold text-lg rounded">Start Vehicle <br/> $5000</div>
                        <div className="grid grid-cols-3 gap-2">

                            <div className="col-span-3 grid grid-cols-2 gap-2">
                                <button className="bg-gray-700 py-2 rounded w-full">Reset</button>
                                <button className="bg-gray-700 py-2 rounded w-full">Undo</button>
                            </div>
                                <button className="bg-gray-700 py-2 rounded col-span-2">Online Override</button>
                                <button className="bg-red-600 py-2 rounded font-bold">X</button>
                            
                        </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center font-bold p-2">
                    <button className="bg-gray-700 py-3 rounded">NO SALE</button>
                    <button className="bg-gray-700 py-3 rounded">OFFER</button>
                    <button className="bg-gray-700 py-3 rounded">SOLD</button>
                </div>


        </div>
    )
}