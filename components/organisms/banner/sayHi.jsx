import * as React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai/index'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function sayHi() {
    return (
        <>
            <section className='min-h-screen flex flex-col gap-2 justify-center items-center text-white text-center '>
                <h1 className='text-md lg:text-xl flex flex-row gap-2'>
                    <p>{"Let's"}</p>
                    <p className='text-yellow-300 animate__animated animate__bounce'>Colaboration</p>
                    <p>{"with me >//<"}</p>
                </h1>
                
                <motion.div 
                className='font-banner'
                initial={{ scale: 0, }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration:10
                }}
                >
                    <h1>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <p className='text-2xl lg:text-7xl'>{"Hi, I'm  "}</p>
                            <a href="https://www.instagram.com/rayhanalf__/?hl=cs" className='text-2xl lg:text-7xl text-sky-300 hover:-translate-y-2 duration-300 Rayhan'>Rayhan</a>
                            
                        </div>
                        <div className='flex gap-2 text-sm lg:text-4xl lg:mt-2'>
                            <p className=''>{"A Front-End Developer "}</p>
                            <p className='text-yellow-300'>
                            <Typewriter
                                words={['Website','Aamiin']}
                                loop={true}
                                cursor
                                cursorStyle=''
                                typeSpeed={70}
                                deleteSpeed={100}
                                delaySpeed={1500}
                            />
                            </p>
                        </div>
                    </h1>
                </motion.div>
                <p className='lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet unde error dolorum</p>
                <p className='lg:text-lg'>  cupiditate molestiae nemo.</p>

                    <ul className='flex flex-row gap-10 mt-5'>
                        <li className="hover:-translate-y-3 transition-all duration-300 cursor-pointer">
                            <Link href={"https://github.com/rayhanAlief18?tab=repositories"} className="flex flex-col justify-center items-center">
                                <AiFillGithub size={"3em"} className="hover:shadow-2xl hover:shadow-sky-500 border-2 bg-gray-700/40 border-white p-2 rounded-full    "/>
                                <p className='text-white hover:text-sky-300 font-banner'>Git hub</p>
                            </Link>
                        </li>
                        <li className=" hover:-translate-y-3 transition-all duration-300 cursor-pointer ">
                            <Link href={"https://www.instagram.com/rayhanalf__/?hl=cs"} className="flex flex-col justify-center items-center" >
                                <AiOutlineInstagram size={"3em"} className="hover:shadow-2xl hover:shadow-sky-500 border-2 bg-gray-700/40 border-white p-2 rounded-full    " /> 
                                <p className='text-white hover:text-sky-300 font-banner'>Instagram</p>
                            </Link>
                        </li>
                    </ul>
            </section>
        </>
    )
}
