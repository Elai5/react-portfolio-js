/** @format */

import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols 2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={assets.hellen}
            alt="my photo"
            className="rounded-full shadow-xl w-56 h-56 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
