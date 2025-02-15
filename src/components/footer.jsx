import React from 'react';
import { assets } from '../assets/assets';


const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className="w-full md:w-1/3 mb-8 md:mb-8">
                    <img src={assets.logo_dark} alt='' />
                    <p className='text-gray-500 font-bold mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut temporibus veniam? Distinctio voluptate hic excepturi nesciunt nam qui soluta aspernatur possimus consequatur dicta illum temporibus, sunt explicabo eaque optio!</p>
                </div>

                <div className='text-white mb-8'>
                    <h1 className='font-bold text-lg mb-4 mt-3' >Company</h1>
                    <ul className='flex flex-col text-gray-500 mt-3 gap-3'>
                        <a href='#Header' className='cursor-pointer hover:text-gray-500'>Home</a>
                        <a href='#About' className='cursor-pointer hover:text-gray-500'>About</a>
                        <a href='#projects' className='cursor-pointer hover:text-gray-500'>Projects</a>
                        <a href='#testimonials' className='cursor-pointer hover:text-gray-500'>Testimonials</a>

                    </ul>
                </div>

                <div className='mt-3 mb-5'>
                    <h1 className='font-bold text-white text-lg mb-4'>Subscribe to our newsletter</h1>
                    <p className='text-gray-500 mt-3 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='flex gap-3 mt-5' >
                        <input type='email' placeholder='Enter Your Email' className='text-gray-400 rounded focus:outline p-2 border-none bg-gray-800' />
                        <button className='text-white bg-blue-500  px-4  border-none rounded cursor-pointer'>Submit</button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-600 py-6' >
            <p className='text-gray-500 text-center'>Copyright 2024 © GreatStack. All Right Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
