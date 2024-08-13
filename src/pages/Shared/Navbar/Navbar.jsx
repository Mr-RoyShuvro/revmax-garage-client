import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Navbar = () => {

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>

    return (
        <div className="navbar h-16 mb-10 pt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-600 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#444] text-base font-semibold">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost h-20">
                    <div className='flex flex-col items-center'>
                        <img className='h-11 w-16' src={logo} alt="" />
                        <h3 className='text-[#444] font-bold text-lg'>RevMax Garage</h3>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#444] text-base font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline text-[#FF3811] text-base font-normal hover:bg-[#FF3811] hover:text-white hover:border-none">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;