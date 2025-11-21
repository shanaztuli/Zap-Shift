import React from 'react';
import pick from "../../../assets/service.png";
const Hero2 = () => {
    return (
      <div className="bg-secondary mt-6 p-7 md:p-[100px] rounded-3xl">
        <h1 className="text-center  text-white py font-bold text-3xl ">
          Our Services
        </h1>
        <p className="text-center my-3 text-white">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <div className="mt-7 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="card card-border bg-base-100 rounded-4xl p-4 hover:bg-primary">
            <div className="card-body flex flex-col justify-center items-center">
              <img className="h-12 w-12" src={pick} alt="" />
              <h2 className="card-title">Express & Standard Delivery</h2>
              <p>
                We deliver parcels within 24-72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4-6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
          <div className="card p-4 card-border bg-base-100 rounded-4xl hover:bg-primary">
            <div className="card-body flex flex-col justify-center items-center">
              <img className="h-12 w-12" src={pick} alt="" />
              <h2 className="card-title">Nationwide Delivery</h2>
              <p>
                We deliver parcels nationwide with home delivery in every
                district, ensuring your products reach customers within 48–72
                hours.
              </p>
            </div>
          </div>
          <div className="card p-4 card-border bg-base-100 rounded-4xl hover:bg-primary">
            <div className="card-body flex flex-col justify-center items-center">
              <img className="h-12 w-12" src={pick} alt="" />
              <h2 className="card-title">Fulfillment Solution</h2>
              <p>
                We also offer customized service with inventory management
                support, online order processing, packaging, and after sales
                support..
              </p>
            </div>
          </div>
          <div className="card p-4 card-border bg-base-100 rounded-4xl hover:bg-primary">
            <div className="card-body flex flex-col justify-center items-center">
              <img className="h-12 w-12" src={pick} alt="" />
              <h2 className="card-title">Cash on Home Delivery</h2>
              <p>
                100% cash on delivery anywhere in Bangladesh with guaranteed
                safety of your product.
              </p>
            </div>
          </div>
          <div className="card p-4 card-border bg-base-100 rounded-4xl hover:bg-primary">
            <div className="card-body flex flex-col justify-center items-center">
              <img className="h-12 w-12" src={pick} alt="" />
              <h2 className="card-title">
                Corporate Service / Contract In Logistics
              </h2>
              <p>
                Customized corporate services which includes warehouse and
                inventory management support.
              </p>
            </div>
          </div>
          <div className="card p-4 card-border bg-base-100 rounded-4xl hover:bg-primary">
            <div className="card-body flex flex-col justify-center items-center">
              <img className="h-12 w-12" src={pick} alt="" />
              <h2 className="card-title">Parcel Return</h2>
              <p>
                Through our reverse logistics facility we allow end customers to
                return or exchange their products with online business
                merchants.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero2;