import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { behance_logo } from '../Data';
import { adobeLogo } from '../Data';

const Header = () => {
  return (
    <>
        <header className='sticky top-0 bg-white z-10'>
            <div className="container-fluid">
                <div className="top-header py-3 lgpy-3 px-5 border-b border">
                    <div className="navbar flex items-center justify-between">
                        <div className="brand-logo flex items-center">
                            <div className='phone-menu pr-3 text-2xl cursor-pointer block lg:hidden'>
                                <CgMenuLeftAlt />
                            </div>
                            <img src={behance_logo} alt={behance_logo} className="w-auto h-4" />
                            <div className="page-links lg:ml-8 hidden lg:block">
                            <ul className='flex items-center'>
                                <li className="mx-3 font-medium text-md active" ><a href="#" target="_blank" rel="noopener noreferrer">Explore</a></li>
                                <li className="mx-3 font-medium text-md active"><a href="#" target="_blank" rel="noopener noreferrer">Assests</a></li>
                                <li className="mx-3 font-medium text-md active"><a href="#" target="_blank" rel="noopener noreferrer">Jobs</a></li>
                                <li className="mx-3 font-medium text-md active"><a href="#" target="_blank" rel="noopener noreferrer">Behance <span className='extra m1-10 rounded-full font-sm text-sm text-white border px-1 py-1 border-[#dee8ff] bg-[#0057ff]'> PRO </span></a></li>
                                <span className='text-gray-300'>|</span>
                                <li className="mx-3 font-medium text-md active"><a href="#" target="_blank" rel="noopener noreferrer">Hire FreeLancers</a></li>
                            </ul>
                    </div>

                        </div>
                    
                    <div className='aciton-area flex items-center'>
                    <div className='mx-4'><IoIosNotifications /></div>
                        <div className='login-btn rounded-full border px-4 py-1 border-[#dee8ff]'>
                            <a href='' className='text-[#0057ff] font-medium text-md'>Log In</a>

                        </div>
                        <div className='login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]'>
                            <a href=''className='text-white font-medium text-md'>Sign Up</a>

                        </div>

                        <div className='adobe-btn mx-4 flex items-center hover:opacity-70'>
                            <img src={adobeLogo} alt={adobeLogo} className='w-6 h-6'/>
                            <a href='' className='pl-1 font-bold text-black text-sm'>Adobe</a>

                        </div>


                    </div>

                    </div>

                </div>
               {/*  <div className='search-area'>
                    <div className='search-box'>
                        <div className='input-box'>
                            <input type='text' name='' placeholder='Search the creative world at work' id=''/>
                            <div>
                                <IoSearch />
                            </div>

                        </div>

                    </div>

                </div> */}
            </div>
        </header>
    </>
  )
}

export default Header