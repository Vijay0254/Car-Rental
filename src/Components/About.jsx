import { motion } from 'framer-motion'
import React from 'react'
import car1Img from "../assets/cars/car1.png"

const About = () => {
  return (
    <section className='container dark:bg-dark dark:text-white md:py-20 md:pb-0 pb-20 flex md:flex-row flex-col items-center justify-around'>
        <div>
            <motion.img initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.2}} className='md:w-[400px]' src={car1Img} alt="car1" />
        </div>
        <div className='md:w-[600px] flex flex-col gap-5'>
            <motion.h1 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}} className='font-serif font-bold text-5xl'>About us</motion.h1>
            <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.4}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore atque ut doloremque est.</motion.p>
            <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.6}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, ratione.</motion.p>
            <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.8}}>
                <button className='px-5 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-black duration-300'>Get Started</button>
            </motion.div>
        </div>
    </section>
  )
}

export default About