import Navbar from './Navbar'
import LeftComponent from './LeftComponent'
import CenterComponent from './CenterComponent'
import RightComponent from './RightComponent'
export default function Dashboard() {
    return (
        <div className='bg-[#39393B]'>
            <Navbar />
            <div className='grid grid-cols-3 gap-4 px-14 py-2'>
                <LeftComponent />
                <CenterComponent />
                <RightComponent />
            </div>

        </div>
    )
}