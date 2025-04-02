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

        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            Hello, I'm Elaine Yvette, a passionate Front-end Developer with a
            keen intrest in UI/UX Design and web animation. I specialize in
            creating websites that provide seamless user experience. With a love
            for creative problem-solving, I am to bring innovative
            digitalsolutions to life.
          </p>
          <p className="text-lg text-gray-300  mb-6">
            Throughout my career, I've worked on several projects where I've
            contributed my skills web automation,React,Airtable and many more.
            I'm constantly exploring new technologies and methodologies to stay
            ahead in this rapidily evolving field.
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block px-8 py-3 bg-blue-500 text-white rounded-lg text-xl shadow-lg hover:bg-blue-600 transition duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
