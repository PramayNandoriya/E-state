import React from 'react';
import Navbar from './Navbar';
import HomeText from './HomeText';

const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-center bg-cover flex items-center w-full overflow-hidden' 
        style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
            <Navbar/>
            <HomeText/>
        </div>
        
    );
}

export default Header;
