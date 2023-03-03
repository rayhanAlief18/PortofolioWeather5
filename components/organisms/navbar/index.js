import React from 'react'
import NavLink from './NavLink'
import NavMobile from './NavMobile'

import Image from 'next/image'

export default function index() {
    const auth = {
        login : true,
        user :{
            name : "Rayhan Alief Febryan"

        }
    }
    return (
    <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-stone-900 to-gray-900">
        <NavMobile />
        <div className="hidden md:block bg-transparent -z-10 border-b border-white/10 py-3">
            <div className="container lg:px-72">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-x-10 md:gap-x-2">
                        <div className='flex gap-1 justify-center items-end'>
                            <Image
                                src="/icon/paw.png"
                                alt="Logo Me"
                                width={30}
                                height={30}
                                className="paw"
                                />
                            <a href="#" 
                                className="text-white font-medium text-xl uppercase mr-6">
                                    Rayhan Alief Febryan
                            </a>
                        </div>
                    </div>
                    <div>
                        <NavLink link={`${"/"}`} title={`${"Home"}`} />
                        <NavLink link={`${"#descMe"}`} title={`${"DescMe"}`} />
                        <NavLink link={`${"#Experience"}`} title={`${"Experience"}`} />
                        <NavLink link={`${"#Contact"}`} title={`${"Contact"}`} />
                    </div>
                    {auth.login ? (
                    <div className="hidden dis-name  text-gray-300 hover:text-white hover:bg-gray-700/40 px-4 py-2 gap-x-2 rounded-lg">
                        <a href ={"#"}
                            className ="rounded-lg name" >
                            {`${auth.user.name}`}
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow w-6 h-6 transition-all duration-700 cursor-pointer ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                        
                    ) : (
                    <div className="flex items-center gap-x-2">
                        <NavLink link={`${"#"}`} title={`${"SignIn"}`} />
                        <NavLink link={`${"#"}`} title={`${"SignUp"}`} />
                    </div>
                    )} 
                    
                </nav>
            </div>
        </div>
    </div>
    )
}
