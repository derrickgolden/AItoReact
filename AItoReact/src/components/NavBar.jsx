
import { useState } from 'react'

import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai'

export const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div className="flex flex-row  absolute bottom-0 w-full sm:w-[70%] 
        px-4 justify-between items-end ">
            <li className="text-[#003049] font-bold text-lg flex items-center px-2 h-12
            list-none ">
                AI
            </li>
            
            <div className={`${isOpen? "grid-rows-1 " : "grid-rows-0 "} grid w-full overflow-hidden
            transition-gridRow duration-500 `}>
                <nav className={`${isOpen? " visible ": "invisible "} md:visible bg-slate-100 
                min-h-0 transition-visibility duration-500 md:bg-white
                md:flex md:flex-row list-none justify-between h-auto md:h-12 w-full
                p-4 md:p-0 text-base xs:text-xl md:text-base tracking-wide rounded-t-md`}>
                    <div className='flex justify-end md:hidden'>
                        <AiOutlineClose size={32} 
                        onClick={() => toggleMenu()}
                        className='cursor-pointer '/>
                    </div>
                    <li className="text-[#003049] hover:bg-[#003049] hover:text-white 
                    md:h-full rounded-t-md flex items-center px-2 py-2 md:py-0 cursor-pointer">
                        Home
                    </li>
                    <li className="text-[#003049] hover:bg-[#003049] hover:text-white 
                    md:h-full rounded-t-md flex items-center px-2 py-2 md:py-0 cursor-pointer">
                        About
                    </li>
                    <li className="text-[#003049] hover:bg-[#003049] hover:text-white 
                    md:h-full rounded-t-md flex items-center px-2 py-2 md:py-0 cursor-pointer">
                        Our Service
                    </li>
                    <li className="text-[#003049] hover:bg-[#003049] hover:text-white 
                    md:h-full rounded-t-md flex items-center px-2 py-2 md:py-0 cursor-pointer">
                        Portfolio
                    </li>
                    <li className="text-[#003049] hover:bg-[#003049] hover:text-white 
                    md:h-full rounded-t-md flex items-center px-2 py-2 md:py-0 cursor-pointer">
                        Contact Us
                    </li>
                </nav>
            </div>
            <div onClick={() => toggleMenu()}
            className={`${isOpen? " invisible ": "visible "} transition-visibility duration-500
            md:hidden text-[#003049] cursor-pointer px-2 h-12 w-8 `}>
                < AiOutlineMenuFold size={32} /> 
            </div>
        </div>
    )
}
