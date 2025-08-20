export default function LeftComponent() {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div>
                <img 
                    src="/car.PNG" 
                    alt="" 
                    className = "w-70 h-50 mx-auto"
                />
            </div>
            <div className='text-center mt-4 bg-gray-300 p-4'>
                <p className="text-white text-sm">ANNOUNCEMENTS</p>
                <p className="text-left text-sm">NO Announcements</p>
                <div>
                    <p className="bg-gray-500 text-white text-sm">VEHICLE DETAILS</p>
                </div>
            </div>

            <div className="bg-gray-900 text-white max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
                <div className="border-b border-gray-700 px-4 py-1">
                    <p>Seller: Loehmann Blasius Chevrolet Inc</p>
                </div>
                <div className="border-b border-gray-700 grid grid-cols-2 px-4 py-2">
                    <p>Title: No</p>
                    <p>Color: Gray</p>
                </div>
                <div className="border-b border-gray-700 grid grid-cols-2 px-4 py-2">
                    <p>Drivetrain: 4WD</p>
                    <p>Interior: Leather</p>
                </div>
                <div className="border-b border-gray-700 grid grid-cols-2 px-4 py-2">
                    <p>Fuel: Gasoline</p>
                    <p>Sunroof: No</p>
                </div>
                <div className="border-b border-gray-700 px-4 py-2">
                    <p>Engine: 3.60L</p>
                </div>
                <div className="border-b border-gray-700 px-4 py-2">
                    <p>Trans: Automatic</p>
                </div>
                <div className="px-4 py-2">
                    <p>Trim: Laredo</p>
                </div>
                </div>
        </div>
    )
}