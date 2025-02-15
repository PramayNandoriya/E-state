import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Reviews = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            
        id='testimonials' className='container mx-auto py-4 pt-20 px-6 mb:px-20 lg:px-32 my-20 w-full overflow-hidden'>
             <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-center '>Customer  <span className='font-light underline underline-offset-4 decoration-1 under pl-2'>Testimonials</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto '>Real Stories from Those Who Found Home with Us</p>

        <div className='flex flex-wrap justify-center items-center gap-8'>
            {testimonialsData.map((reviews,index)=>(
                <div key={index} className='max-w-[340px]  shadow-lg rounded px-8 py-12 text-center'>
                    <img className="w-20 h-20 rounded-full mx-auto mb-4" src={reviews.image} alt={reviews.title}/>
                    <h2 className=''>{reviews.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{reviews.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>{Array.from({length: reviews.rating},(items,index)=>(
                        <img key={index} src={assets.star_icon} alt=""/>
                    ))}</div>
                    <p className='text-gray-600'>{reviews.text}</p>
                </div>
            ))}
        </div>
            
        </motion.div>
    );
}

export default Reviews;
