import React from 'react';
import Long from '../Components/Logo/Long';
import { Outlet } from 'react-router';
import authImg from "../assets/authImage.png";
const AuthLayout = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <Long></Long>
        <div className="flex max-h-min flex-col md:flex-row p-5 mt-9  ">
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <div className="flex-1">
            <img src={authImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default AuthLayout;