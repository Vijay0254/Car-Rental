import React from 'react'
import appstoreImg from "../assets/appstore.png"
import playstoreImg from "../assets/playstore.png"
import { motion } from 'framer-motion'

const Banner1 = () => {
  return (
    <section className='container dark:bg-black py-20'>
        <div className='flex w-[340px] md:w-auto py-14 md:py-20 rounded-xl bg-pay flex-col gap-5 justify-center items-center'>
            <motion.h1 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}} className='font-serif font-bold text-2xl md:text-4xl'>Get Started with our app</motion.h1>
            <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}} className='text-sm text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi neque nam sed quia!</motion.p>
            <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}} className='flex justify-center gap-7'>
                <img className='w-[40%] cursor-pointer md:w-[200px]' src={playstoreImg} alt="playstore" />
                <img className='w-[40%] cursor-pointer md:w-[200px]' src={appstoreImg} alt="appstore" />
            </motion.div>
        </div>
    </section>
  )
}

export default Banner1