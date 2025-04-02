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
      </section>
    </div>
  );
}
