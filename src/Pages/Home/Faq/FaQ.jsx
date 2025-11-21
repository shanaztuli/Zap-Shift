import React from 'react';
import { IoArrowRedoCircleSharp } from 'react-icons/io5';

const FaQ = () => {
    return (
      <div>
        <div className="space-y-3">
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border hover:bg-green-200"
          >
            <div className="collapse-title font-semibold">
              How does this posture corrector work?{" "}
            </div>
            <div className="collapse-content text-sm">
              A posture corrector works by providing support and gentle
              alignment to your shoulders, back, and spine, encouraging you to
              maintain proper posture throughout the day. Here’s how it
              typically functions: A posture corrector works by providing
              support and gentle alignment to your shoulders.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border hover:bg-green-200"
          >
            <div className="collapse-title font-semibold">
              Is it suitable for all ages and body types?{" "}
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border hover:bg-green-200"
          >
            <div className="collapse-title font-semibold">
              Does it really help with back pain and posture improvement?{" "}
            </div>
            <div className="collapse-content text-sm">
              A posture corrector works by providing support and gentle
              alignment to your shoulders, back, and spine, encouraging you to
              maintain proper posture throughout the day. Here's how it
              typically functions: A posture corrector works by providing
              support and gentle alignment to your shoulders.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border hover:bg-green-200"
          >
            <div className="collapse-title font-semibold">
              Does it have smart features like vibration alerts?{" "}
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border hover:bg-green-200"
          >
            <div className="collapse-title font-semibold">
              How will I be notified when the product is back in stock?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="btn  flex my-5 rounded-lg bg-primary text-black font-bold  ">
            See More FAQs
            <IoArrowRedoCircleSharp size={20} />
          </button>
        </div>
      </div>
    );
};

export default FaQ;