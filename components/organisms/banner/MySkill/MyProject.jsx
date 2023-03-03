import React from 'react'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'
import Image from 'next/image'


export default function MyProject(props) {
    const router = useRouter()
    const GoToApp = (namaApp)=>{
        router.push(namaApp)
    }

    return (
    <>
    <div className='hover:scale-105 cursor-pointer duration-200 snap-center flex flex-col rounded-lg p-7 items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] lg:w[900px] hover:hover:bg-gray-800 '>
        <motion.div
        className='relative'
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{ duration: 1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
            <Image
            src={`/image/${props.image}`}
            width={1000} 
            height={1000} 
            alt="Photo Profile" 
            className='rounded-md border-2 p-1 border-gray-100'/>

            <div className='absolute flex items-center justify-center font-rubbik inset-0 opacity-0 hover:opacity-80 transition-opacity duration-500 ease-in-out bg-black '>
                {props.judul}
            </div>
        </motion.div>

        <div className='-mt-5'>
            <h4 className='text-center font-rubbik'>{props.judul}</h4>
            <p className='text-sm md:text-lg'>{props.desc}</p>
        </div>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 hover:scale-110 duration-300" onClick={()=>GoToApp(`${props.namaApp}`)}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Open App
            </span>
        </button>

    </div>
    </>
    )
}
