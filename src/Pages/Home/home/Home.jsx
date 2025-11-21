import React from 'react';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Hero2 from '../Hero/Hero2';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import FaQ from '../Faq/FaQ';
import ParcelTrack from '../Parcel/ParcelTrack';
import HeroBanner from '../Parcel/HeroBanner';

const reviewsPromise = fetch('/reviews.json').then(res=>res.json());
const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Hero></Hero>
        <Hero2></Hero2>
        <div className="mt-7">
          <h1 className="text-3xl my-[60px] font-bold text-secondary text-center">
            We've helped thousands of sales teams
          </h1>
          <Brands></Brands>
          <ParcelTrack></ParcelTrack>
          <HeroBanner></HeroBanner>
          <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
        <div>
          <h1 className="text-center   py font-bold text-3xl ">
            Frequently Asked Question (FAQ)
          </h1>
          <p className="text-center my-3 ">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
          <FaQ></FaQ>
        </div>
      </div>
    );
};

export default Home;