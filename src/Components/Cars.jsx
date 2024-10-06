import React from 'react'
import car1Img from "../assets/cars/car1.png"
import car2Img from "../assets/cars/car2.png"
import car3Img from "../assets/cars/car3.png"
import { motion } from 'framer-motion'

const Cars = () => {
    const carList = [
        {
          name: "BMW UX",
          price: "$100/Day",
          image: car1Img,
          delay: 0.2,
        },
        {
          name: "KIA UX",
          price: "$140/Day",
          image: car2Img,
          delay: 0.4,
        },
        {
          name: "BMW UX",
          price: "$160/Day",
          image: car3Img,
          delay: 0.6,
        },
      ];
  return (
    <section className='container py-20 dark:bg-dark dark:text-white'>
        <motion.h1 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}} className='text-5xl font-bold pb-10'>Cars</motion.h1>
        <div className='flex md:flex-row flex-col gap-14'>
            {
                carList.map((element,index) =>(
                    <motion.div key={index} initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: element.delay}} className='p-2 border-2 hover:border-primary group flex flex-col justify-between dark:border-white border-slate-300 md:w-[500px] rounded-xl'>
                        <p className='font-semibold text-xl'>12Km</p>
                        <div className='flex justify-center'>
                            <img className='w-[200px] group-hover:translate-x-10 duration-500' src={element.image} alt="cars" />
                        </div>
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-primary uppercase'>{element.name}</h1>
                                <p className='font-semibold text-xl'>{element.price}</p>
                            </div>
                            <p className='cursor-pointer font-semibold text-xl'>Details</p>
                        </div>
                    </motion.div>
                ))
            }
        </div>
        <div className='flex justify-center pt-7'>
            <motion.button initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}} className='border-2 border-primary text-primary px-5 py-2 rounded-lg hover:text-black hover:bg-primary duration-300 '>Get Started</motion.button>
        </div>
    </section>
  )
}

export default Cars