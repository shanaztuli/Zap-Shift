import React from 'react';
import Navbar from '../../Shared/Footer/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import errorImg from "../../../assets/error.png";
const Error = () => {
    return (
      <div className="max-w-7xl mx-auto ">
        <Navbar></Navbar>
        <div className="bg-gray-100 flex  p-10 my-9 justify-center items-center flex-col gap-7 rounded-3xl">
          <img className='block h-[400px] w-[400px] ' src={errorImg} alt="" />
          

          <button className="px-6 py-3 rounded-full bg-lime-400 text-[#003B45] font-semibold shadow-md hover:bg-lime-300 transition">
           Back to Home
          </button>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Error;