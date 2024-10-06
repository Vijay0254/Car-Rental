import { motion } from 'framer-motion';
import React from 'react'

const Testimonials = () => {
    const testimonialData = [
        {
          name: "Dilshad",
          image: "https://picsum.photos/200",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          delay: 0.2
        },
        {
          name: "Satya",
          image: "https://picsum.photos/200",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          delay: 0.4
        },
        {
          name: "Sabir",
          image: "https://picsum.photos/200",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          delay: 0.6
        },
      ];
  return (
    <section className='pb-20 dark:bg-black dark:text-white'>
        <motion.h1 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}} className='text-center font-serif font-bold text-4xl md:text-5xl pt-20 pb-10'>What Our Clients Say About Us</motion.h1>
        <div className='flex md:flex-row flex-col container gap-14'>
            {
                testimonialData.map((element,index) =>(
                    <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: element.delay}} key={index} className='md:w-[500px] flex flex-col dark:bg-dark dark:shadow-dark items-center gap-5 p-3 py-10 rounded-lg shadow-xl shadow-slate-300'>
                        <img className='rounded-full size-20' src={element.image} alt="profile" />
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <p>{element.description}</p>
                        <h1 className='text-lg font-semibold'>{element.name}</h1>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default Testimonials