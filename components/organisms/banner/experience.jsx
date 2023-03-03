import React from 'react'
import Image from 'next/image'

export default function experience() {
    return (
        <>
        <div id='Experience' className='mt-10'>
                        <p className='md:text-lg  text-center md:text-left'>Experience And Activities</p>
                        <section className="mt-3">    
                            <div className="flex gap-3 justify-center items-center">
                                <div className='w-[48%] bg-gray-800 p-7 rounded-lg hover:shadow-yellow-200 shadow-md' data-aos="fade-down">
                                    <div className="gap-3 items-center  flex rounded-lg ">
                                                    <Image 
                                                    src="/Skill/bootstrap.png" 
                                                    width={1000} 
                                                    height={1000} 
                                                    alt="image : from freepik" 
                                                    className='rounded-lg scale-125 hover:scale-150 duration-500  w-7 animate__animated animate__tada animate__infinite animate__slow'/>
                                                    <p className="font-bold">Bootsrap</p>
                                    </div>
                                    <p className='mt-4'>Have Experience editing Admin Lte</p>
                                </div>
                                <div className='w-[48%] bg-gray-800 p-7 rounded-lg hover:shadow-yellow-200 shadow-md' data-aos="fade-down">
                                    <div className="gap-3 items-center  flex rounded-lg ">
                                                    <Image 
                                                    src="/Skill/tailwind.jpg" 
                                                    width={1000} 
                                                    height={1000} 
                                                    alt="image : from freepik" 
                                                    className='rounded-lg scale-125 hover:scale-150 duration-500  w-7 animate__animated animate__tada animate__infinite animate__slow'/>
                                                    <p className="font-bold">Tailwind</p>
                                    </div>
                                    <p className='mt-4'>This Web Made With Tailwind</p>
                                </div>                                
                            </div>

                            <div className="flex gap-3 mt-3 justify-center items-center">
                                <div className='w-[48%] bg-gray-800 p-7 rounded-lg hover:shadow-yellow-200 shadow-md' data-aos="fade-up">
                                    <div className="gap-3 items-center  flex rounded-lg ">
                                                    <Image 
                                                    src="/Skill/react-tr.png" 
                                                    width={1000} 
                                                    height={1000} 
                                                    alt="image : from freepik" 
                                                    className='rounded-lg scale-125 hover:scale-150 duration-500  w-7 animate__animated animate__tada animate__infinite animate__slow'/>
                                                    <p className="font-bold">React Js</p>
                                    </div>
                                    <p className='mt-4'>This Web Made with Next & React Js</p>
                                </div>
                                <div className='w-[48%] bg-gray-800 p-7 rounded-lg hover:shadow-yellow-200 shadow-md' data-aos="fade-up">
                                    <div className="gap-3 items-center  flex rounded-lg ">
                                                    <Image 
                                                    src="/Skill/ci-3.png" 
                                                    width={1000} 
                                                    height={1000} 
                                                    alt="image : from freepik" 
                                                    className='rounded-lg scale-125 hover:scale-150 duration-500  w-7 animate__animated animate__tada animate__infinite animate__slow'/>
                                                    <p className="font-bold">CodeIgniter 3</p>
                                    </div>
                                    <p className='mt-4'>Familiar with this Framework</p>
                                </div>                                
                            </div>
                        </section>
                    </div>
        </>
    )
}
