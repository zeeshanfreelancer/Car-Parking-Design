import Navbar from './Navbar';
import LeftComponent from './LeftComponent';
import CenterComponent from './CenterComponent';
import RightComponent from './RightComponent';

export default function Dashboard({ theme, handleThemeChange }) {
    return (
        <div 
            style=
                {{ 
                    backgroundImage: "var(--background_image)",
                    minHeight: "100vh" 
                 }}>

            <Navbar theme={theme} onThemeChange={handleThemeChange} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-14 py-2 h-auto lg-[90vh]'>
                    <LeftComponent theme={theme} />
                    <CenterComponent theme={theme} />
                    <RightComponent theme={theme} />
                </div>
        </div>
    );
}