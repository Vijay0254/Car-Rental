import React, { useState } from 'react'
import lightCarImg from "../assets/lightcar.png"
import darkCarImg from "../assets/darkcar.png"
import { AnimatePresence, motion } from 'framer-motion'

const Hero = ({theme}) => {

  return (
    <section className='container dark:bg-black dark:text-white duration-500 md:flex md:justify-between'>
        <div className='flex flex-col gap-5 py-40 pt-80 md:py-40'>
            <motion.h3 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}} className='text-primary font-serif text-2xl'>Effortless</motion.h3>
            <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.4}} className='font-serif text-5xl md:text-7xl font-bold'>Car Rental</motion.h1>
            <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.6}} className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab</motion.p>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.8}}>
                <button className='px-5 py-2 rounded-lg bg-primary hover:bg-primary/50 duration-300'>Get Started</button>
            </motion.div>
        </div>
        <div className='md:relative container'>
            <AnimatePresence>{!theme && <motion.img initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0}} transition={{duration: 1, delay: 0.3}} className='absolute right-0 top-14 md:w-[650px]' src={lightCarImg} alt="lightcar" />}</AnimatePresence>
            <AnimatePresence>{theme && <motion.img initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0}} transition={{duration: 1, delay: 0.3}} className='absolute right-0 top-16 md:top-28' src={darkCarImg} alt="darkcar" />}</AnimatePresence>
        </div>
    </section>
  )
}

export default Hero