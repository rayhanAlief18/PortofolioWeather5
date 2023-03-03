import React from 'react'
import Image from 'next/image'
import {BsWhatsapp,BsInstagram,BsGithub} from 'react-icons/bs'
import 'animate.css'
export default function index() {
    return (  
        <div id='Contact' className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-stone-900 to-gray-900 py-4">
        <footer classNameName="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-stone-900 to-gray-900 sm:p-6 dark:bg-gray-900">
            <div className="md:flex md:justify-between lg:px-72 container justify-center items-center">
                <div className="mb-6 md:mb-0">
                    <a href="https://flowbite.com/" className="flex items-center ">
                        <Image src="/icon/contacts.png" width="35" height="35" className="h-8 mr-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap  dark:text-white animate__animated animate__tada animate__slower animate__infinite">Contact Me</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">WhatsApp</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4 flex justify-center items-center gap-2 hover:text:white">
                                <BsWhatsapp />
                                <a href="https://wa.me/6282340161097" className="hover:underline hover:text-blue-400">0823-4016-1097</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Instagram</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4 flex justify-center items-center gap-2 hover:text:white">
                                <BsInstagram />
                                <a href="https://www.instagram.com/rayhanalf__/?hl=cs" className="hover:underline hover:text-blue-400 ">@rayhanalf_</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Github</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4 flex justify-center items-center gap-2 hover:text:white">
                                <BsGithub />
                                <a href="https://github.com/rayhanAlief18?tab=repositories" className="hover:underline hover:text-blue-400">Github</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            
        </footer>
        </div>
    )
    }
