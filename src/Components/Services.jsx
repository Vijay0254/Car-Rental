import { delay, motion } from 'framer-motion';
import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const Services = () => {
    const items = [
        {
            id: 1,
            icon: <FaCameraRetro />,
            title: "Best Price",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            btn: "Learn More",
            delay: 0.2
        },
        {
            id: 2,
            icon: <GiNotebook />,
            title: "Fast and Safe",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            btn: "Learn More",
            delay: 0.4
        },
        {
            id: 3,
            icon: <SlNote />,
            title: "Experience Drivers",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            btn: "Learn More",
            delay: 0.6
        }
    ]
  return (
    <section className='dark:bg-black py-10 dark:text-white'>
        <h1 className='text-5xl pb-14 text-center font-serif font-bold'>Why Choose Us</h1>
        <div className='container flex md:flex-row flex-col gap-10'>
            {
                items.map((element) =>(
                    <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: element.delay}} key={element.id} className='flex items-center dark:bg-dark flex-col text-white hover:bg-primary hover:text-black duration-500 group gap-4 px-3 bg-black py-10 rounded-lg md:w-[500px]'>
                        <span className='text-5xl group-hover:text-black duration-500 text-primary'>{element.icon}</span>
                        <h1>{element.title}</h1>
                        <p className='text-center'>{element.desc}</p>
                        <div>
                            <button>{element.btn}</button>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default Services