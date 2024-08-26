import React from 'react';
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-[#151515]'>
            <footer className="footer text-base-content py-10 px-5 md:px-0 max-w-7xl mx-auto">
                <aside>
                    <img className='h-12 w-16 ml-10' src={logo} alt="" />
                    <p>
                        <span className='text-base font-medium text-white mt-2'><span className='text-xl font-bold mr-1'>Rev<span className='text-[#FF3811]'>Max</span></span> Garage</span>
                        <br />
                        <span className='text-gray-100'>Providing reliable services since 1992</span>
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#FF3811] font-bold">Services</h6>
                    <a className="link link-hover text-gray-300">Branding</a>
                    <a className="link link-hover text-gray-300">Design</a>
                    <a className="link link-hover text-gray-300">Marketing</a>
                    <a className="link link-hover text-gray-300">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FF3811] font-bold">Company</h6>
                    <a className="link link-hover text-gray-300">About us</a>
                    <a className="link link-hover text-gray-300">Contact</a>
                    <a className="link link-hover text-gray-300">Jobs</a>
                    <a className="link link-hover text-gray-300">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FF3811] font-bold">Legal</h6>
                    <a className="link link-hover text-gray-300">Terms of use</a>
                    <a className="link link-hover text-gray-300">Privacy policy</a>
                    <a className="link link-hover text-gray-300">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;