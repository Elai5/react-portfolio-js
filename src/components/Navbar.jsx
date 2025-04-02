/** @format */

import { nav } from "framer-motion/client";
import React from "react";
import { useState } from "react";
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
          <FaHome size={24} className="group-hover:text-gray-300" />
          <span className="text-xs opacity-0 group-hover:opacity-100">
            Home
          </span>
        </li>
        <li className="flex flex-col items-center group">
          <FaUser size={24} className="group-hover:text-gray-300" />
          <span className="text-xs opacity-0 group-hover:opacity-100">
            About
          </span>
        </li>
        <li className="flex flex-col items-center group">
          <FaBriefcase size={24} className="group-hover:text-gray-300" />
          <span className="text-xs opacity-0 group-hover:opacity-100">
            Projects
          </span>
        </li>
        <li className="flex flex-col items-center group">
          <FaEnvelopeOpenText size={24} className="group-hover:text-gray-300" />
          <span className="text-xs opacity-0 group-hover:opacity-100">
            {" "}
            Contact
          </span>
        </li>
        <li className="flex flex-col items-center group">
          <FaBlog size={24} className="group-hover:text-gray-300" />
          <span className="text-xs opacity-0 group-hover:opacity-100">
            Blog
          </span>
        </li>
      </ul>
    </nav>
  );
}
