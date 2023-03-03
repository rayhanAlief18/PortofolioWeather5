import React from 'react'
import Image from 'next/image'
import Experience from './experience'
// import {SiPhotobucket} from 'react-icons/si'
import Lottie from "lottie-react";
import Koala from '../../../public/lottie/polar-bear.json'
export default function DescMe() {

    return (
        <>
        <div id={"descMe"} className='bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-stone-900 to-gray-900 min-h-screen '>
                {/* <h1 className='text-center underline underline-offset-8 decoration-4 decoration-[#c0c0c0] lg:text-4xl font-bold font-sans text-sky-200'>About</h1> */}
                <div className="lg:flex lg:flex-row justify-center">
                <div className='lg:w-1/2 lg:min-h-screen  border overflow-hidden relative'>
                    <div className='hover:border-sky-300 duration-300 hover:shadow-2xl rounded-lg hover:shadow-sky-300'>
                        <Image 
                            src="/image/person.jpg" 
                            width={1000} 
                            height={500} 
                            alt="image : from freepik" 
                            className='bg-cover rounded-lg scale-125 hover:scale-150 duration-500  w-full'/>
                        <div className='absolute inset-0 opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out bg-gradient-to-r from-blue-500  text-center lg:px-32'>
                            {/* <div className='overflow-hidden absolute border rounded-lg bg-slate-200 md:top-[6.5rem] lg:top-32 left-20 right-1/4 p-3 flex flex-col justify-center items-center w-1/3 shadow-xl shadow-yellow-200'>
                                <Lottie animationData={Koala} className="w-3/4"/>
                                <div className="flex flex-row justify-center items-center">
                                    <h1 className='-mt-8 mb-2 font-semibold'>Wanna See My</h1>
                                    <h1 className='-mt-8 mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-sans text-lg ml-1'> Gallery</h1>
                                </div>
                                <button type="button" className="overflow-hidden inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:shadow-yellow-200 shadow-md">
                                    Click To See 
                                    <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-sm font-semibold rounded-full animate__animated animate__bounce animate__infinite animate__slow">
                                    </span>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 md:pr-28 md:pl-14 text-white mt-16'>
                        <h2 className='text-white font-rubbik lg:text-6xl text-center md:text-left'>Rayhan Alief Febryan</h2>
                        <p className='md:text-lg mt-4 mb-4 text-center md:text-left'>- Front End Developer</p>
                        <p className='leading-loose mt-4 text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur, cupiditate tempore esse ex harum ullam unde voluptas adipisci quae veritatis quidem, ipsam reprehenderit accusamus eveniet modi quis dolores debitis? Suscipit molestias quasi quia iure earum provident. Quam, quae quos ipsum animi itaque voluptas omnis magni harum doloremque ipsa perferendis.</p>
                    
                    <p className='md:text-lg -mb-8 ml-2 mt-12 text-center md:text-left'>Experience And Activities</p>
                    <div className='ml-2 mt-10 border border-gray-800 bg-gray-800 p-7 rounded-lg' data-aos="zoom-in">
                        {/* <Bio /> */}
                        <h1 className='text-blue-300 font-rubbik lg:text-xl text-center md:text-left'>Beyond The Inspiration</h1>
                        <p className='leading-loose mt-4 text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae reiciendis, minus vel, corporis eligendi qui ea, nostrum eius esse sequi. Deleniti odio dolorum, velit ea mollitia quidem. Mollitia, consectetur?</p>
                    </div>
                    
                    <Experience />
                </div>
            </div>
        </div>
        </>
    )
    }
