import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";



const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems=[
        {path:"/",title:"Start a search"},
        {path:"/my-job",title:"My Jobs"},
        {path:"/post-job",title:"Post a Job"},
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
            <a className='flex items-center gap-2 text-2xl text-black' href='/'>
                <FaUserPlus className=' text-3xl' />
                <span>JobKart</span>
            </a>

            <ul className='hidden md:flex gap-12'>
                {
                    navItems.map(item => {
                        return <li className="text-base text-primary " key={item.path}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    })
                }
            </ul>

            <div className='text-base text-primary font space-x-5 hidden lg:block'>
            <Link to="https://drive.google.com/file/d/1-9oAu2wgfRBma-xJpUWBKg-kw4I5b05I/view?usp=sharing" className='py-2 px-5 border rounded bg-green-500 text-white'>Hire Me</Link>

            </div>

            {/* For Mobile */}
            <div className='md:hidden block'>
                <button onClick={handleMenuToggler}>
                {
                    isMenuOpen ? <IoClose className='w-5 h-5 text-primary'/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                }
                </button>
            </div>
        </nav>

        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden" }`}>
        <ul>
                {
                    navItems.map(item => {
                        return <li className="text-base text-white first:text-white py-1 " key={item.path}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    })
                }
            <li className='py-1 text-white bg-green-500'><Link to="https://drive.google.com/drive/u/0/folders/1EZZymv146ZgAbYITcQawZqxuOBNyRAeL">Hire Me</Link></li>
            
            </ul>
        </div>
    </header>
  )
}

export default Navbar