/** @format */
import React, { useState } from "react";
import { nav } from "framer-motion/client";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpenText,
  FaBlog,
} from "react-icons/fa";

// const Navbar = () => {
//   return <div></div>;
// };

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-lg shadow-lg p-4 flex justify-between items-center z-50">
      <div className="text-xl font-bold">cest_Elaine</div>
      {/* for mobile tofggle */}
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* desktop navbar */}
      <ul className="hidden md:flex gap-6">
        <li className="flex flex-col items-center group">
          <a href="#home">
            <FaHome size={24} className="group-hover:text-gray-300" />
            <span className="text-xs opacity-0 group-hover:opacity-100">
              Home
            </span>
          </a>
        </li>
        <li className="flex flex-col items-center group">
          <a href="#about">
            <FaUser size={24} className="group-hover:text-gray-300" />
            <span className="text-xs opacity-0 group-hover:opacity-100">
              About
            </span>
          </a>
        </li>
        <li className="flex flex-col items-center group">
          <a href="#projects">
            <FaBriefcase size={24} className="group-hover:text-gray-300" />
            <span className="text-xs opacity-0 group-hover:opacity-100">
              Projects
            </span>
          </a>
        </li>
        <li className="flex flex-col items-center group">
          <a href="#contact">
            {" "}
            <FaEnvelopeOpenText
              size={24}
              className="group-hover:text-gray-300"
            />
            <span className="text-xs opacity-0 group-hover:opacity-100">
              {" "}
              Contact
            </span>
          </a>
        </li>
        <li className="flex flex-col items-center group">
          <a href="#blog">
            <FaBlog size={24} className="group-hover:text-gray-300" />
            <span className="text-xs opacity-0 group-hover:opacity-100">
              Blog
            </span>
          </a>
        </li>
      </ul>
      {/* second navbar for mobile */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <ul className="space-y-6 text-center">
            <li
              className=" flex items-center gap-2 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              <a href="#home">
                <FaHome /> <span>Home</span>
              </a>
            </li>
            <li
              className=" flex items-center gap-2 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              <a href="#about">
                {" "}
                <FaUser /> <span>About</span>
              </a>
            </li>
            <li
              className=" flex items-center gap-2 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              <a href="#projects">
                {" "}
                <FaBriefcase /> <span>Projects</span>
              </a>
            </li>
            <li
              className=" flex items-center gap-2 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              <a href="#contact">
                {" "}
                <FaEnvelopeOpenText /> <span>Contact</span>
              </a>
            </li>
            <li
              className=" flex items-center gap-2 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              <a href="#blog">
                <FaBlog /> <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
