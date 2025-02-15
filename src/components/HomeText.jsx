import React from 'react';
import { motion } from 'framer-motion';

const HomeText = () => {
    return (
        <motion.div 
            initial={{opacity:0 , y:100}}
            transition={{duration:1.5   }}
            whileInView={{opacity:1, y:0}}
            viewport={{once:false}}
        className='flex flex-col w-full justify-center items-center text-white text-center'>
            <h1 className='font-bold font-sans flex flex-col text-4xl md:text-6xl '>Explore Homes <span> That Fit Your Dreams</span> </h1>
       
            <div className='flex gap-8 mt-10'>
                <a href='#projects'  className='bg-transparent p-2 border-1 w-35 rounded cursor-pointer text-center'>Projects</a>
                <a href='#Contact' className='bg-blue-400  p-2  w-35 rounded cursor-pointer text-center'>Contact Us</a>
            </div>

        </motion.div>
    );
}

export default HomeText;
