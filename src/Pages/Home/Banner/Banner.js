import React from 'react';
import './Banner.css';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">


            <div className="carousel w-full">
                <div id="slide1" className=" carousel-item relative w-full">
                    <div className='img-gradient'>
                    <img alt='img' src={img1} className="w-full" />
                    </div>
                    <div className="absolute transform -translate-y-1/2 w-2/3 left-16 top-1/2">
                        <h1 className='text-white font-bold text-4xl'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className='mt-5'>
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-warning ml-2 ">Latest Project</button>
                        </div>
                    </div>
                    <div className=" transform -translate-y-1/2  absolute flex justify-end left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;