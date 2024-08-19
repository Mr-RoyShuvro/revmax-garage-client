import React from 'react';
import img from '../../assets/images/checkout/checkout.png'


const CheckOutBanner = ({title}) => {
    return (
        <div className='relative flex'>
            <img className='w-full' src={img} alt="" />
            <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full rounded-xl'>
                <h3 className='text-3xl md:text-5xl font-bold text-white pl-3 md:pl-28 pt-1 md:pt-32'>{title}</h3>
                <div
                    className="text-base border-none text-white font-semibold relative mx-auto pt-3 md:pt-[101px]"
                    style={{
                        borderBottom: "60px solid #FF3811",
                        borderLeft: "50px solid transparent",
                        borderRight: "50px solid transparent",
                        height: "0",
                        width: "250px",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "12px",  // Adjust this value to vertically align the text
                            left: "0",
                            right: "0",
                            textAlign: "center",
                            color: "white",
                        }}
                    >
                        <h2 className='text-xl font-medium pt-3 md:pt-[101px]'>Checkout</h2>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default CheckOutBanner;