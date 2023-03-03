import React from 'react'
import { Link } from 'react-scroll'

export default function ResponsiveLink({link,title}) {
    return (
        <Link href={link}  className="block px-4 py-2 text-sm hover:bg-gray-100">
                {title}
        </Link>
        )
}
