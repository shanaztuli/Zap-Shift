import React from "react";
import img from "../../../assets/live-tracking.png";
import img2 from "../../../assets/safe-delivery.png";
const ParcelTrack = () => {
  return (
    <div className="w-full space-y-6 py-10">
      {/* --- CARD 1 --- */}
      <div className="flex items-center bg-white p-8 rounded-xl shadow-sm border gap-6">
        <img
          src={img}
          alt="Live tracking illustration"
          className="w-28 h-28 object-contain"
        />

        {/* vertical line */}
        <div className="divider divider-horizontal"></div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Live Parcel Tracking
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for peace of mind.
          </p>
        </div>
      </div>   

      {/* --- CARD 2 --- */}
      <div className="flex items-center bg-gray-50 p-8 rounded-xl shadow-sm border gap-6">
        <img
          src={img2}
          alt="Safe Delivery illustration"
          className="w-28 h-28 object-contain"
        />

        <div className="divider divider-horizontal"></div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            100% Safe Delivery
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            We ensure your parcels are handled with care and delivered securely
            to their destination. Guaranteed safe and damage-free delivery.
          </p>
        </div>
      </div>

      {/* --- CARD 3 --- */}
      <div className="flex items-center bg-gray-50 p-8 rounded-xl shadow-sm border gap-6">
        <img
          src={img2}
          alt="Call center support illustration"
          className="w-28 h-28 object-contain"
        />

        <div className="divider divider-horizontal"></div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            24/7 Call Center Support
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Our support team is available 24/7 to assist with any questions,
            delivery updates, or concerns you may have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParcelTrack;
