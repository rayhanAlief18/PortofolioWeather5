import React from 'react'
import Linku from 'next/link'
export default function navLink({title,link}) {
    return ( 
        <Linku href ={link}
            className ="rounded-lg text-cyan-50 hover:text-white hover:bg-gray-700/40  px-4 py-2" scroll={false}>
            {title}
        </Linku>
    )
}