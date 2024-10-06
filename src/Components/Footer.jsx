import React from 'react'
import { FaDumbbell } from 'react-icons/fa'
import { MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const items = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "Cars"
        },
        {
            id: 3,
            name: "About"
        },
        {
            id: 4,
            name: "Booking"
        }
    ]
    const items2 = [
        {
            id: 1,
            name: "Our Services"
        },
        {
            id: 2,
            name: "Contact"
        },
        {
            id: 3,
            name: "Privacy Policy"
        }
    ]
  return (
    <footer className='container py-20 bg-gray-300 dark:bg-dark dark:text-white'>
        <section className='flex md:gap-y-0 gap-y-12 md:flex-row flex-col container md:items-center justify-between'>
            <div className='w-[300px] flex flex-col gap-5'>
                <h1 className='uppercase font-serif text-3xl font-bold'>Car Rental</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.</p>
                <div className='flex gap-4 text-3xl'>
                    <MdLocationOn className='cursor-pointer hover:text-primary' />
                    <FaInstagram className='cursor-pointer hover:text-primary'  />
                    <FaFacebook className='cursor-pointer hover:text-primary'  />
                    <FaLinkedin className='cursor-pointer hover:text-primary'  />
                </div>
            </div>
            <div className='flex gap-10 md:gap-32'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl md:text-2xl font-bold'>Important Links</h1>
                    <ul className='flex flex-col gap-4'>
                        {
                            items.map((element) =>(
                                <li className='font-medium' key={element.id}><a href="#">{element.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl md:text-2xl font-bold'>Company Links</h1>
                    <ul className='flex flex-col gap-4'>
                        {
                            items2.map((element) =>(
                                <li className='font-medium' key={element.id}><a href="#">{element.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-xl md:text-2xl font-bold'>Resources</h1>
                <ul className='flex flex-col gap-4'>
                    {
                        items.map((element) =>(
                            <li className='font-medium' key={element.id}><a href="#">{element.name}</a></li>
                        ))
                    }
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer