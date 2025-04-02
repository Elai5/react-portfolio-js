/** @format */

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

// const LandingPage = () => {
//   return <div>LandingPage</div>;
// };

export default function LandingPage() {
  return (
    <div className="relative min-h screen bg-gray-900 text-white overflow-hidden">
      <Navbar />
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-400">Elaine Yvette</span>
        </motion.h1>
        <motion.p
          className="text-lg mt-4 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Front-End Developer | UI/UX Enthusiast | Web Animator
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          View My Work
        </motion.a>
      </section>
    </div>
  );
}
