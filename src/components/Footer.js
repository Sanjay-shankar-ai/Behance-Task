import React from 'react';
import { adobeLogo } from '../Data';

const Footer = () => {
    return (
        <section className='px-4 fixed w-full bottom-0 bg-white'>
            <div className="container-fluid">
                <div className="grid lg:grid-cols-2 items-center">
                    {/* Left side */}
                    <div className="left-foot">
                        <ul className='flex items-center list-none p-0'>
                            <li className='mx-3 font-medium text-sm'>
                                <a href="http://" target="_blank" rel="noopener noreferrer">More Behance</a>
                            </li>
                            <li className='mx-3 font-medium text-sm'>
                                <a href="http://" target="_blank" rel="noopener noreferrer">English</a>
                            </li>
                            <li className='mx-3 font-medium text-sm'>
                                <a href="http://" target="_blank" rel="noopener noreferrer">BehancePRO</a>
                            </li>
                            <li className='mx-3 font-medium text-sm'>
                                <a href="http://" target="_blank" rel="noopener noreferrer">TOU Privacy Community Help Cookie preference</a>
                            </li>
                            <li className='mx-3 font-medium text-sm'>
                                <a href="http://" target="_blank" rel="noopener noreferrer">Do Not sell or share any personal information</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right side */}
                    <div className="adobe-right flex justify-end">
                        <div className="adobe-btn flex items-center hover:opacity-70">
                            <img src={adobeLogo} alt="Adobe Logo" className="w-5 h-5" />
                            <a href="/" className='pl-1 font-bold text-black text-sm'>Adobe</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
