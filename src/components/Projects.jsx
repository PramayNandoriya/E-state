import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';


const Projects = () => {
    const [btnIndex, setBtnIndex] = useState(0);
    const [cardShow, setCardShow] = useState(1);


    useEffect(() => {
        const updateCards = () => {
            if (window.innerWidth >= 1024) {
                setCardShow(projectsData.length)
            } else {
                setCardShow(1)
            }
        };
        updateCards();
        window.addEventListener('resize', updateCards)
        return () => window.removeEventListener('resize', updateCards)

    }, [])

    const nextProject = () => {
        setBtnIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const preProject = () => {
        setBtnIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }


    return (
        <div id='projects' className='container mx-auto py-4 pt-20 px-6 mb:px-20 lg:px-32 my-20 w-full overflow-hidden'>
            <motion.div 
             initial={{opacity:0 , y:100}}
             transition={{duration:1.2 }}
             whileInView={{opacity:1, y:0}}
             viewport={{once:false}}>
                <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-center '>Projects <span className='font-light underline underline-offset-4 decoration-1 under pl-2'>Completed</span></h1>
                <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto '>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
            </motion.div>

            <div className='flex justify-end items-center mb-8'>
                <button onClick={preProject} className='p-3 bg-gray-300 rounded mr-2 cursor-pointer' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt=''></img>
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-300 rounded mr-2 cursor-pointer' aria-label='Previous Project'>
                    <img src={assets.right_arrow} alt=''></img>
                </button>
            </div>

            <motion.div
            initial={{opacity:0 , y:100}}
            transition={{duration:1.2 }}
            whileInView={{opacity:1, y:0}}
            viewport={{once:false}}
            className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(btnIndex * 100 / cardShow)}%)` }}>
                    {projectsData.map((items, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={items.image} alt={items.title} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='bg-white inline-block w-3/4 px-3 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{items.title}</h2>
                                    <p className='text-gray-600'>{items.price} <span> |</span> {items.location}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

export default Projects;
