import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import  banner1 from '../../../assets/banner/banner1.png'
import  banner2 from '../../../assets/banner/banner2.png'
import  banner3 from '../../../assets/banner/banner3.png'
import { IoArrowRedoCircleSharp } from "react-icons/io5";

const Banner = () => {
    return (
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="relative">
          <img src={banner1} />
          <div className="flex gap-4 absolute bottom-2 left-4 md:bottom-13 md:left-16">
            <div className="">
              <button className="btn btn-soft rounded-lg bg-primary text-black font-bold  ">
                Track Your Parcel <IoArrowRedoCircleSharp size={20} />
              </button>
            </div>
            <button className="btn font-bold  outline-red-950">
              Be A Rider
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner2} />
          <div className="flex gap-4 absolute bottom-2 left-4 md:bottom-13 md:left-16">
            <div className="">
              <button className="btn btn-soft rounded-lg bg-primary text-black font-bold  ">
                Track Your Parcel <IoArrowRedoCircleSharp size={20} />
              </button>
            </div>
            <button className="btn font-bold  outline-red-950">
              Be A Rider
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner3} />
          <div className="flex gap-4 absolute bottom-2 left-4 md:bottom-13 md:left-16">
            <div className="">
              <button className="btn btn-soft rounded-lg bg-primary text-black font-bold  ">
                Track Your Parcel <IoArrowRedoCircleSharp size={20} />
              </button>
            </div>
            <button className="btn font-bold  outline-red-950">
              Be A Rider
            </button>
          </div>
        </div>
      </Carousel>
    );
};

export default Banner;