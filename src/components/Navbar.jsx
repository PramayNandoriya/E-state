import React, { useEffect, useState } from 'react';
import { assets } from "../assets/assets"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        } return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMenu]);

    return (
        <div className='absolute top-0 left-0  w-full z-10 text-white'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt='logo' />
                <ul className='hidden md:flex gap-7'>
                    <a href='#Header' className='cursor-pointer hover:text-gray-500'>Home</a>
                    <a href='#About' className='cursor-pointer hover:text-gray-500'>About</a>
                    <a href='#projects' className='cursor-pointer hover:text-gray-500'>Projects</a>
                    <a href='#testimonials' className='cursor-pointer hover:text-gray-500'>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full text-black cursor-pointer'>Sign Up</button>
                <img onClick={() => { setShowMenu(true) }} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' />
            </div>

            {/* mobile  */}

            <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'}
            right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className="flex justify-end p-6 cursor-pointer">
                    <img onClick={() => { setShowMenu(false) }} src={assets.cross_icon} className="w-6" alt='' />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium text-black'>
                    <a onClick={() => { setShowMenu(false) }} href='#header' className='px-2 py-2 rounded-full inline-block'>Home</a>
                    <a onClick={() => { setShowMenu(false) }} href='#about' className='px-2 py-2 rounded-full inline-block'>About</a>
                    <a onClick={() => { setShowMenu(false) }} href='#projects' className='px-2 py-2 rounded-full inline-block'>Projects</a>
                    <a onClick={() => { setShowMenu(false) }} href='#testimonials' className='px-2 py-2 rounded-full inline-block'>Testimonials</a>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
