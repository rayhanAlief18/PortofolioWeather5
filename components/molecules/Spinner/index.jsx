import React from 'react'
import Image from 'next/image'
export default function index() {
    return (
        <>
        
       
            <div className='flex justify-center mt-72'>
                <Image
                className='' 
                src={"/icon/loading.svg"}
                width={100}
                height={300}
                alt="Loading..."
                />
            </div>
        
        </>
    )
    }
