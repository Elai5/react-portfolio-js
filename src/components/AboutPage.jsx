/** @format */

import React from "react";
import { assets } from "../assets/assets";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* About Section */}
      <section className="about py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          I'm a passionate developer with a strong background in web
          development. I enjoy creating dynamic, user-friendly websites and
          apps.
        </p>

        {/* div1 (Image and Text side by side) */}
        <div className="about-container flex flex-col md:flex-row items-center md:gap-8 py-6">
          {/* Image */}
          <div className="about-image md:w-1/2">
            <img
              src={assets.hellen}
              alt="Your Image"
              className="w-full rounded-md"
            />
          </div>

          {/* Text */}
          <div className="about-text md:w-1/2 mt-4 md:mt-0">
            <p className="text-lg text-gray-300">
              I'm a passionate front-end developer specializing in creating
              interactive and visually appealing websites. I thrive on
              problem-solving and learning new technologies.
            </p>
            <div className="cta-buttons mt-6">
              <button className="cta-btn bg-blue-500 text-white px-6 py-3 rounded-lg mr-4">
                Contact Me
              </button>
              <button className="cta-btn bg-gray-800 text-white px-6 py-3 rounded-lg">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* div2 (Tech Stack Section) */}
      <section className="tech-stack py-16 px-6 bg-gray-900 text-white">
        <h3 className="text-3xl font-semibold mb-6">Tech Stack</h3>
        <p className="text-lg mb-4 text-gray-300">
          These are the technologies I use and love working with:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="tech-logo">
            <img
              src="/path-to-logos/react-logo.svg"
              alt="React"
              className="h-12 w-12"
            />
            <p className="text-center mt-2">React</p>
          </div>
          <div className="tech-logo">
            <img
              src="/path-to-logos/nodejs-logo.svg"
              alt="Node.js"
              className="h-12 w-12"
            />
            <p className="text-center mt-2">Node.js</p>
          </div>
          <div className="tech-logo">
            <img
              src="/path-to-logos/tailwindcss-logo.svg"
              alt="TailwindCSS"
              className="h-12 w-12"
            />
            <p className="text-center mt-2">TailwindCSS</p>
          </div>
          {/* Add more logos here */}
        </div>
      </section>
    </div>
  );
}
