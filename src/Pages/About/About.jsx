import React from "react";
import { NavLink, Outlet } from "react-router";

const About = () => {
  const tabs = [
    { name: "Story", path: "story" },
    { name: "Mission", path: "mission" },
    { name: "Success", path: "success" },
    { name: "Team & Others", path: "team" },
  ];
  return (
    <div className="bg-white rounded-3xl p-5">
      <h1 className="font-bold text-secondary text-4xl ">About Us</h1>

      <p className="pb-4 border-b-1 border-gray-300">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* tab */}

      <div className="flex gap-6 my-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `text-lg font-medium pb-1 ${
                isActive
                  ? "text-secondary font-bold border-b-2 border-secondary"
                  : "text-gray-600"
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      <div className="mt-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default About;
