import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavBar = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center flex-shrink-0'>
                        <img className='h-10 w-10 mr-2' src= "https://github.com/kushald/virtualr/blob/main/src/assets/logo.png?raw=true" alt="" />
                        <span className='text-xl tracking-tight'>NeuroVerse</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {["Features", "Workflow", "Pricing", "Testimonials"].map((item,index)=>{
                            return <li key={index}>
                                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                                </li>  
                        })}
                    </ul>
                    <div className='hidden lg:flex jsutify-center space-x-12 items-center'>
                        <a className='py-2 px-3 border rounded-md'>
                            Sign In
                        </a>
                        <a className='bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md ' href="">
                            Create an account
                        </a>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className='fixed right-0 lg:hidden bg-zinc-900 w-full p-12 flex flex-col justify-center items-center'>
                        <ul>
                        {["Features", "Workflow", "Pricing", "Testimonials"].map((item,index)=>{
                            return <li className='py-5' key={index}>
                                    <a href="">{item}</a>
                                </li>  
                        })}
                        </ul>
                        <div className='flex space-x-6'>
                        <a className='py-2 px-3 border rounded-md'>
                            Sign In
                        </a>
                        <a className='bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md ' href="">
                            Create an account
                        </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
