import React from "react";
import gradientImg from "../../../assets/be-a-merchant-bg.png";
import bannerImg from "../../../assets/location-merchant.png";
const HeroBanner = () => {
  return (
    <div className="w-full px-5 md:px-10 py-10">
      <div className="relative bg-[#003B45] text-white rounded-[30px] overflow-hidden p-10 md:p-16 flex flex-col md:flex-row items-center justify-between">
        <img
          src={gradientImg} 
          className="absolute top-0 left-0 w-full opacity-70 pointer-events-none"
          alt=""
        />

        {/* Left Text Side */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Merchant and Customer Satisfaction <br />
            is Our First Priority
          </h1>

          <p className="mt-4 text-gray-200 text-base md:text-lg">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Our courier delivers your parcels
            in every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-6 py-3 rounded-full bg-lime-400 text-[#003B45] font-semibold shadow-md hover:bg-lime-300 transition">
              Become a Merchant
            </button>

            <button className="px-6 py-3 rounded-full border border-lime-400 text-lime-400 font-semibold hover:bg-lime-400 hover:text-[#003B45] transition">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative mt-10 md:mt-0 z-10">
          <img
            src={bannerImg}
            alt="Parcel Illustration"
            className="w-[260px] md:w-[350px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
