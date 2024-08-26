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
                        Providing reliable services since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#FF3811] font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FF3811] font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FF3811] font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;