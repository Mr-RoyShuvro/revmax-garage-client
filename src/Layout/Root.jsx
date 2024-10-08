import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <div className='bg-white'>
                <div className='max-w-7xl mx-auto'>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;