/** @format */

import { motion } from "framer-motion";
import { assets, projects } from "../assets/assets";
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 pl-15 pr-15 bg-gray-950 text-blue-500"
    >
      <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
      <h3 className="text-gray-600 text-center mb-8 text-xl italic">
        "Each project begins with a problem, and I craft solution by translating
        ideas into powerful, intutive design".{" "}
      </h3>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-75 "
            />
            <div className="p-6 rounded-lg shadow-lg transition-transform duration--300 ease-in-out hover::scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 test-xs px-2 py-1 rounded-md text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                >
                  Live Demo
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gray-700 hover:bg-blue-700 text-white rounded-md"
                >
                  Github Link
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    // <div className="min-h-screen bg-gray-900 text-white relative">
    //   <section className="flex flex-col items-center justify-center text-center py-16">
    //     <motion.h1
    //       className="text-4xl md:text-6xl font-bold"
    //       initial={{ opacity: 0, y: -50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1 }}
    //     >
    //       <h2 className="text-3xl font-bold mb-4 text-blue-500">My Projects</h2>
    //     </motion.h1>
    //     <motion.p
    //       className="text-lg- mt-4 text-gray-400"
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1, delay: 0.5 }}
    //     >
    //       <p className="text-white-800">
    //         {" "}
    //         Here are some of the amazing projects I've worked on.
    //       </p>
    //     </motion.p>
    //   </section>
    //   <div
    //     className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-30"
    //     initial={{ opacity: 0, scale: 0 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 5 }}
    //     style={{ left: "20vw", top: "30vh" }}
    //   ></div>

    //   <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    //     <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
    //       <img
    //         src={assets.homekq}
    //         alt="KenyaAirways Website"
    //         className="w-full h-48 object-cover rounded-lg"
    //       />
    //       <h3 className="text-xl font-semibold mt-4">Project Title</h3>
    //       <p className="text-gray-300 mt-2">
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
    //         illo voluptate corrupti ad.
    //       </p>
    //       <div className="mt-4">
    //         <span className="bg-blue-500 text-white p-2 rounded-lg mr-2">
    //           Django
    //         </span>
    //         <span className="bg-blue-500 text-white p-2 rounded-lg mr-2">
    //           APIs
    //         </span>
    //       </div>
    //     </div>
    //     <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
    //       <img
    //         src={assets.homekq}
    //         alt="KenyaAirways Website"
    //         className="w-full h-48 object-cover rounded-lg"
    //       />
    //       <h3 className="text-xl font-semibold mt-4">Project Title</h3>
    //       <p className="text-gray-300 mt-2">
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
    //         illo voluptate corrupti ad.
    //       </p>
    //       <div className="mt-4">
    //         <span className="bg-blue-500 text-white p-2 rounded-lg mr-2">
    //           Django
    //         </span>
    //         <span className="bg-blue-500 text-white p-2 rounded-lg mr-2">
    //           APIs
    //         </span>
    //       </div>
    //     </div>
    //     <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
    //       <img
    //         src={assets.homekq}
    //         alt="KenyaAirways Website"
    //         className="w-full h-48 object-cover rounded-lg"
    //       />
    //       <h3 className="text-xl font-semibold mt-4">Project Title</h3>
    //       <p className="text-gray-300 mt-2">
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
    //         illo voluptate corrupti ad.
    //       </p>
    //       <div className="mt-4">
    //         <span className="bg-blue-500 text-white p-2 rounded-lg mr-2">
    //           Django
    //         </span>
    //         <span className="bg-blue-500 text-white p-2 rounded-lg mr-2">
    //           APIs
    //         </span>
    //       </div>
    //     </div>
    //     <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
    //       <img
    //         src={assets.homekq}
    //         alt="KenyaAirways Website"
    //         className="w-full h-48 object-cover rounded-lg"
    //       />
    //       <h3 className="text-xl font-semibold mt-4">Project Title</h3>
    //       <p className="text-gray-300 mt-2">
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
    //         illo voluptate corrupti ad.
    //       </p>
    //       <div className="mt-4">
    //         <span className="bg-blue-500 text-white p-2 rounded-lg mr-2">
    //           Django
    //         </span>
    //         <span className="bg-blue-500 text-white p-2 rounded-lg mr-2">
    //           APIs
    //         </span>
    //       </div>
    //     </div>

    //   </section>
    // </div>
  );
}
