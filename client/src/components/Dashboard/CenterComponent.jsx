export default function CenterComponent() {
    return (
        <div className="bg-gray-800 rounded-lg shadow-md text-white">
            <div className="grid grid-cols-4 gap-1 text-center "> 
                <p className="bg-red-800 rounded-lg">Q1</p>
                <p className="bg-red-800">Grade</p>
                <div className="bg-red-800">
                    <p>Mileage</p>
                    <p>143,253</p>
                </div>
                <p className="bg-red-800 rounded-lg">ACTUAL</p>
            </div>

            <div className="items-center justify-center text-center p-4">
                <p className="text-xl">2012 Grand Cherokee</p>
                <p>1C4RJFAGOCC297969</p>
            </div>

           <div className="grid grid-cols-4 gap-1 text-center p-4">
                <div className="border-[5px] border-black">
                    <p>Reserve</p>
                    <p>0.00</p>
                </div>
                <div className="border-[5px] border-black">
                    <p>Est Value</p>
                </div>
                <div className="border-[5px] border-black">
                    <p>Prox Bids</p>
                    <p>0</p>
                </div>
                <div className="border-[5px] border-black">
                    <p>Rep Online</p>
                    <p>No</p>
                </div>
                </div>


        </div>
    )
}