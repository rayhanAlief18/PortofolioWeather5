import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import Line from './Line'


export default function NavMobile() {
    const [open,setOpen] = useState(false)
    return ( 
        <div 
        className='fixed bg-transparent z-10 w-full backdrop-blur-sm md:hidden flex justify-between py-5 px-5 items-center'>
            <div className='flex gap-1 justify-center items-end'>
                <Image
                    src="/icon/paw.png"
                    alt="Logo Me"
                    width={30}
                    height={30}
                    className="paw"
                    />
                <a href="#" 
                    className="text-white font-medium text-md uppercase mr-6">
                        Rayhan Alief Febryan
                </a>
            </div>
                    
                <button onClick={()=>setOpen((open)=>!open)} className="border p-1 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>

                
                        <div className={`${open ? "block" : "hidden"} bg-white overflow-hidden absolute right-0 mr-20 top-0 mt-5 w-56 py-1 rounded-lg z-10`}>
                            {/* <ResponsiveLink link={`/`} title={`${"Home"}`} />
                            <ResponsiveLink link={`#DescMe`} title={`${"DescMe"}`} />
                            <ResponsiveLink link={`#Experience`} title={`${"Experience"}`} />
                            <Line />
                            <ResponsiveLink link={`#Contact`} title={`${"Contact"}`} /> */}
                            <Link href={"/"}  className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Home
                            </Link>
                            <Link href={"#descMe"}  className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    DescMe
                            </Link>
                            <Link href={"#Experience"}  className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Experience
                            </Link> 
                            <Line />
                            <Link href={"#Contact"}  className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Contact
                            </Link> 
                        </div>
                
                </div>

    )
}