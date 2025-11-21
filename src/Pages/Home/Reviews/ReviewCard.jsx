import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
const ReviewCard = ({ review }) => {
    const {
      review: reviewText,
      userName,
      ratings,
      user_photoURL,
      date,
    } = review; 
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 flex flex-col gap-4 border border-gray-200">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-2xl text-primary  " />

      {/* Review Text */}
      <p className=" mb-4">{reviewText}</p>

      {/* Divider */}
      <div className="w-full border-t border-dashed border-gray-300 my-2"></div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={user_photoURL}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{userName}</h3>
          <p className="text-sm text-gray-500">Rated: {ratings} ⭐</p>
        </div>
      </div>

      {/* Date */}
      <p className="text-xs text-gray-400 mt-1">
        {new Date(date).toDateString()}
      </p>
    </div>
  );
};

export default ReviewCard;