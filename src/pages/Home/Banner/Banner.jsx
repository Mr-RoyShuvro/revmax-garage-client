import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[630px]">

            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img5}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full">
                    <div className='space-y-7 pl-24'>
                        <h3 className='text-6xl font-semibold max-w-sm text-white'>Affordable Price For Car Servicing</h3>
                        <p className='max-w-md text-white text-lg font-normal'>There are many variations of passages of  available, But The majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn mr-5 bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Discover More</button>
                            <button className="btn btn-outline text-white text-base font-semibold hover:bg-[#FF3811] hover:text-white hover:border-none">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide6" className="btn rounded-full border-none text-2xl text-white bg-gray-700 h-14 w-14 hover:bg-[rgb(56,55,54)]">
                        <GoArrowLeft></GoArrowLeft>
                    </a>
                    <a href="#slide2" className="btn rounded-full border-none text-2xl text-white bg-[#FF3811] h-14 w-14 hover:bg-[rgb(199,49,19)]">
                        <GoArrowRight className=''></GoArrowRight>
                    </a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full">
                    <div className='space-y-7 pl-24'>
                        <h3 className='text-6xl font-semibold max-w-sm text-white'>Affordable Price For Car Servicing</h3>
                        <p className='max-w-md text-white text-lg font-normal'>There are many variations of passages of  available, But The majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn mr-5 bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Discover More</button>
                            <button className="btn btn-outline text-white text-base font-semibold hover:bg-[#FF3811] hover:text-white hover:border-none">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide1" className="btn rounded-full border-none text-2xl text-white bg-gray-700 h-14 w-14 hover:bg-[rgb(56,55,54)]">
                        <GoArrowLeft></GoArrowLeft>
                    </a>
                    <a href="#slide3" className="btn rounded-full border-none text-2xl text-white bg-[#FF3811] h-14 w-14 hover:bg-[rgb(199,49,19)]">
                        <GoArrowRight className=''></GoArrowRight>
                    </a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full">
                    <div className='space-y-7 pl-24'>
                        <h3 className='text-6xl font-semibold max-w-sm text-white'>Affordable Price For Car Servicing</h3>
                        <p className='max-w-md text-white text-lg font-normal'>There are many variations of passages of  available, But The majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn mr-5 bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Discover More</button>
                            <button className="btn btn-outline text-white text-base font-semibold hover:bg-[#FF3811] hover:text-white hover:border-none">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide2" className="btn rounded-full border-none text-2xl text-white bg-gray-700 h-14 w-14 hover:bg-[rgb(56,55,54)]">
                        <GoArrowLeft></GoArrowLeft>
                    </a>
                    <a href="#slide4" className="btn rounded-full border-none text-2xl text-white bg-[#FF3811] h-14 w-14 hover:bg-[rgb(199,49,19)]">
                        <GoArrowRight className=''></GoArrowRight>
                    </a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full">
                    <div className='space-y-7 pl-24'>
                        <h3 className='text-6xl font-semibold max-w-sm text-white'>Affordable Price For Car Servicing</h3>
                        <p className='max-w-md text-white text-lg font-normal'>There are many variations of passages of  available, But The majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn mr-5 bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Discover More</button>
                            <button className="btn btn-outline text-white text-base font-semibold hover:bg-[#FF3811] hover:text-white hover:border-none">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide3" className="btn rounded-full border-none text-2xl text-white bg-gray-700 h-14 w-14 hover:bg-[rgb(56,55,54)]">
                        <GoArrowLeft></GoArrowLeft>
                    </a>
                    <a href="#slide5" className="btn rounded-full border-none text-2xl text-white bg-[#FF3811] h-14 w-14 hover:bg-[rgb(199,49,19)]">
                        <GoArrowRight className=''></GoArrowRight>
                    </a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full">
                    <div className='space-y-7 pl-24'>
                        <h3 className='text-6xl font-semibold max-w-sm text-white'>Affordable Price For Car Servicing</h3>
                        <p className='max-w-md text-white text-lg font-normal'>There are many variations of passages of  available, But The majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn mr-5 bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Discover More</button>
                            <button className="btn btn-outline text-white text-base font-semibold hover:bg-[#FF3811] hover:text-white hover:border-none">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide4" className="btn rounded-full border-none text-2xl text-white bg-gray-700 h-14 w-14 hover:bg-[rgb(56,55,54)]">
                        <GoArrowLeft></GoArrowLeft>
                    </a>
                    <a href="#slide6" className="btn rounded-full border-none text-2xl text-white bg-[#FF3811] h-14 w-14 hover:bg-[rgb(199,49,19)]">
                        <GoArrowRight className=''></GoArrowRight>
                    </a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={img6}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full">
                    <div className='space-y-7 pl-24'>
                        <h3 className='text-6xl font-semibold max-w-sm text-white'>Affordable Price For Car Servicing</h3>
                        <p className='max-w-md text-white text-lg font-normal'>There are many variations of passages of  available, But The majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn mr-5 bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Discover More</button>
                            <button className="btn btn-outline text-white text-base font-semibold hover:bg-[#FF3811] hover:text-white hover:border-none">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide5" className="btn rounded-full border-none text-2xl text-white bg-gray-700 h-14 w-14 hover:bg-[rgb(56,55,54)]">
                        <GoArrowLeft></GoArrowLeft>
                    </a>
                    <a href="#slide1" className="btn rounded-full border-none text-2xl text-white bg-[#FF3811] h-14 w-14 hover:bg-[rgb(199,49,19)]">
                        <GoArrowRight className=''></GoArrowRight>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;