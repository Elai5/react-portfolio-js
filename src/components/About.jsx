/** @format */

import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="about-page">
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-16 px-6">
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-around gap-2 pl-10 pr-10 ">
          {/* <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            Hello! I'm Elaine Yvette, a passionate Front-end Developer with a
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
          <div className="flex gap-4">
            <a
              href="#projects"
              className="mt-6 inline-block px-8 py-3 bg-blue-500 text-white rounded-lg text-xl shadow-lg hover:bg-blue-600 transition duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="mt-6 inline-block px-8 py-3 bg-gray-700 text-white rounded-lg text-xl shadow-lg hover:bg-gray-600 transition duration-300"
            >
              View My Work
            </a>
          </div>
        </div> */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <img
              src={assets.hellen}
              alt="my photo"
              className=" w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              Hello! I'm Elaine Yvette, a passionate Front-end Developer with a
              keen intrest in UI/UX Design and web animation. I specialize in
              creating websites that provide seamless user experience. With a
              love for creative problem-solving, I am to bring innovative
              digitalsolutions to life.
            </p>
            <p className="text-lg text-gray-300  mb-6">
              Throughout my career, I've worked on several projects where I've
              contributed my skills web automation,React,Airtable and many more.
              I'm constantly exploring new technologies and methodologies to
              stay ahead in this rapidily evolving field.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="mt-6 inline-block px-8 py-3 bg-blue-500 text-white rounded-lg text-xl shadow-lg hover:bg-blue-600 transition duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="mt-6 inline-block px-8 py-3 bg-gray-700 text-white rounded-lg text-xl shadow-lg hover:bg-gray-600 transition duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="tech-stack py-16 px-6 bg-gray-900 text-white">
        <h3 className="text-3xl font-semibold mb-6">Tech Stack</h3>
        <p className="text-lg mb-4 text-gray-300">
          These are the technologies I use and love working with:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="tech-logo">
            <img src={assets.html5} alt="html5 logO" className="h-12 w-12" />
            <p className="text-center mt-2">HTML 5</p>
          </div>
          <div className="tech-logo">
            <img src={assets.css} alt="css" className="h-12 w-12" />
            <p className="text-center mt-2">Css 3</p>
          </div>
          <div className="tech-logo">
            <img src={assets.js} alt="Javascript" className="h-12 w-12" />
            <p className="text-center mt-2">Javascript</p>
          </div>
          <div className="tech-logo">
            <img src={assets.react} alt="React" className="h-12 w-12" />
            <p className="text-center mt-2">React</p>
          </div>
          <div className="tech-logo">
            <img src={assets.django} alt="React" className="h-12 w-12" />
            <p className="text-center mt-2">Django</p>
          </div>
          <div className="tech-logo">
            <img src={assets.python} alt="React" className="h-12 w-12" />
            <p className="text-center mt-2">Tailwind</p>
          </div>
          <div className="tech-logo">
            <img src={assets.wordpress} alt="React" className="h-12 w-12" />
            <p className="text-center mt-2">Wordpress</p>
          </div>
          <div className="tech-logo">
            <img src={assets.canva} alt="Canva" className="h-12 w-12" />
            <p className="text-center mt-2">Canva</p>
          </div>
          <div className="tech-logo">
            <img src={assets.figma} alt="Figma" className="h-12 w-12" />
            <p className="text-center mt-2">Figma</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
