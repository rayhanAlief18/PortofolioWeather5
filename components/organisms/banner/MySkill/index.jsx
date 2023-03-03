import React from 'react'
import {motion} from 'framer-motion'
import MyProject from './MyProject'


export default function index() {
    return (
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className=' flex mt-16 flex-col justify-center items-center text-white'
            >
            <h3 className='font-rubbik underline underline-offset-4 lg:text-3xl'>My Project</h3>
        <div className='w-full flex space-x-5 overflow-scroll p-16 snap-x snap-mandatory overflow-y-hidden'>
            <MyProject image="WheaterApp.png" judul="Wheater App" namaApp={"WheaterApp"} desc="Berada dalam portofolio ini, dibuat menggunakan next js dan tailwind css serta mengambil API dari Openweather"/>
            <MyProject image="Episod1.png" judul="Latihan 1" namaApp={"https://rayhanalief18.github.io/Latihan-bs1/"} desc="Latihan ini dibuat saat saya duduk di bangku smk dengan menggunakan boostrap"/>
            <MyProject image="Episod2.png" judul="Latihan 2" namaApp={"https://github.com/rayhanAlief18/Latihan-bs2"} desc="Latihan ini dibuat saat saya duduk di bangku smk dengan menggunakan boostrap"/>
            <MyProject image="Episod3.png" judul="Latihan 3" namaApp={"https://github.com/rayhanAlief18/Latihan-bs3"} desc="Latihan ini dibuat saat saya duduk di bangku smk dengan menggunakan boostrap"/>
            
        </div>
        </motion.div>
    )
    }
