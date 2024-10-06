import { motion } from 'framer-motion'
import React from 'react'

const Banner2 = () => {
  return (
    <section className='dark:bg-black pt-10 pb-20 container'>
        <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1, delay: 0.2}} className='bg-gray-800 text-white px-5 py-10 flex md:flex-row flex-col items-center gap-10 md:gap-44'>
            <div className='md:w-[900px]'>
                <h1 className='text-4xl md:text-5xl font-bold'>Let's collaborate on your upcoming car rental venture</h1>
                <p className='text-slate-500 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque repudiandae accusantium voluptas.</p>
            </div>
            <div>
                <button className='px-5 rounded py-2 uppercase hover:bg-primary/60 duration-300 bg-primary'>Contact</button>
            </div>
        </motion.div>
    </section>
  )
}

export default Banner2