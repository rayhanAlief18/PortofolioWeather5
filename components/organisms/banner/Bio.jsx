import React from 'react'

export default function Bio() {
    return (
        <div className='text-white'>    
                {/* <h1 className='md:text-3xl font-rubbik'>Bio</h1> */}
                <p className='md:text-md mt-2 text-blue-500 font-rubbik font-bold text-xl'>Ini adalah perjalanan saya dalam belajar</p>
                <div className='relative'>
                    <ul className='text-white list-track'>
                        <li className='flex gap-5 items-center'>
                            <h1 className='font-bold text-xl'>2004</h1>
                            <p>Born in Sidoarjo, Jawa Timur, Indonesia</p>
                        </li>
                        <li className='flex gap-5'>
                            <h1 className='font-bold text-xl'>2010 - 2016</h1>
                            <p>School in SDN Tebel</p>
                        </li>
                        <li className='flex gap-5'>
                            <h1 className='font-bold text-xl'>2016 - 2019</h1>
                            <p>School in SMPN 2 Sedati.</p>
                        </li>
                        <li className='flex gap-5'>
                            <h1 className='font-bold text-xl'>2019 - 2022</h1>
                            <p>School in SMK Antartika 2 Sidoarjo</p>
                        </li>
                        <li className='flex gap-5'>
                            <h1 className='font-bold text-xl'>2023 - now</h1>
                            <p>Study In Institut Teknologi Telkom Surabaya</p>
                        </li>
                        
                    </ul>    
                </div>
            </div> 

    )
}
