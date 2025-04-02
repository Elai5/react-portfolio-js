/** @format */

import { motion } from "framer-motion";
export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <section className="flex flex-col items-center justify-center text-center py-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-500">My Projects</h2>
        </motion.h1>
        <motion.p
          className="text-lg- mt-4 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-white-800">
            {" "}
            Here are some of the amazing projects I've worked on.
          </p>
        </motion.p>
      </section>
    </div>
  );
}
