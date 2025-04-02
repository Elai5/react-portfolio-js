/** @format */

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";


export default function LandingPage() {
  const [dots, setDots] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const newDots = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
      delay: Math.random() * 5,
    }));
    setDots(newDots);
  }, []);

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

      {/* moving background animate */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, delay: dot.delay }}
            style={{ left: dot.x, top: dot.y }}
          />
        ))}
      </div>
    </div>
  );
}
