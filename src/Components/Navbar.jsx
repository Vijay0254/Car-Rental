import React, { useState } from 'react'
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = ({theme,settheme,menu,setmenu}) => {
    const items = [
        {
            id: 1,
            name: "home",
            link: "/"
        },
        {
            id: 2,
            name: "cars",
            link: "#cars"
        },
        {
            id: 3,
            name: "about",
            link: "#about"
        },
        {
            id: 4,
            name: "booking",
            link: "#booking"
        }
    ]
    
    
    const element = document.documentElement
    function changeLight(){
        settheme(!theme)
        element.classList.add("dark")
    }
    function changeDark(){
        settheme(!theme)
        element.classList.remove("dark")
    }
  return (
    <header className='container dark:bg-dark dark:text-white duration-500 py-3 flex justify-between items-center shadow-lg'>
        <h1 className='font-bold text-3xl font-serif'>Car Rental</h1>
        <ul className='flex gap-7 pr-10 md:pr-14 items-center relative'>
            {
                items.map((element) =>(
                    <li key={element.id} className='uppercase hover:text-primary hover:border-b-2 border-primary duration-500 hidden md:block text-lg font-medium'><a href={element.link}>{element.name}</a></li>
                ))
            }
            {!menu && <HiMenuAlt3 className='md:hidden block text-2xl cursor-pointer' onClick={() =>setmenu(!menu)} />}
            {menu && <HiMenuAlt1 className='md:hidden block text-2xl cursor-pointer' onClick={() =>setmenu(!menu)} />}
            {!theme && <BiSolidMoon className='text-2xl cursor-pointer absolute right-0' onClick={() =>changeLight()} />}
            {theme && <BiSolidSun className='text-3xl cursor-pointer absolute right-0' onClick={() =>changeDark()} />}
        </ul>
        <AnimatePresence >
            {menu && <motion.nav initial={{opacity: 0, x: -100}} exit={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.2}} className='fixed top-0 dark:bg-dark dark:text-white bg-white py-20 px-10 pr-20 left-0 bottom-0 shadow-lg shadow-slate-400'>
                <div className='flex gap-2 items-center'>
                    <FaUserCircle className='text-6xl' />
                    <div className='flex flex-col gap-2'>
                        <p>Hello User</p>
                        <p>Premium user</p>
                    </div>
                </div>
                <ul className='flex flex-col pt-14 gap-6'>
                    {
                        items.map((element) =>(
                            <li key={element.id} className='uppercase text-xl font-medium'><a href={element.link}>{element.name}</a></li>
                        ))
                    }
                </ul>
            </motion.nav>}
        </AnimatePresence>
    </header>
  )
}

export default Navbar