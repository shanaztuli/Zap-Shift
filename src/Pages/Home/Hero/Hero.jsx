import React from 'react';
import pick from "../../../assets/bookingIcon.png";

const Hero = () => {
    return (
      <div className=" ml-7 md:ml-[100px]">
        <h1 className="font-bold text-2xl text-secondary mb-4">How it Works</h1>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>

          <div className="card card-border bg-base-100 rounded-4xl">
            <div className="card-body">

                <img className='h-12 w-12' src={pick} alt="" />
              <h2 className="card-title">Booking Pick & Drop</h2>
              <p>
                From personal packages to business shipments — we deliver on
                time, every time.
              </p>
              
            </div>
          </div>
          <div className="card card-border bg-base-100 rounded-4xl">
            <div className="card-body">

                <img className='h-12 w-12' src={pick} alt="" />
              <h2 className="card-title">Booking Pick & Drop</h2>
              <p>
                From personal packages to business shipments — we deliver on
                time, every time.
              </p>
              
            </div>
          </div>
          <div className="card card-border bg-base-100 rounded-4xl">
            <div className="card-body">

                <img className='h-12 w-12' src={pick} alt="" />
              <h2 className="card-title">Booking Pick & Drop</h2>
              <p>
                From personal packages to business shipments — we deliver on
                time, every time.
              </p>
              
            </div>
          </div>
          <div className="card card-border bg-base-100 rounded-4xl">
            <div className="card-body">

                <img className='h-12 w-12' src={pick} alt="" />
              <h2 className="card-title">Booking Pick & Drop</h2>
              <p>
                From personal packages to business shipments — we deliver on
                time, every time.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;