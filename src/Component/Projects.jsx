import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Contact from "./Contact";

const projects = [
  {
    title: "AI Chatbot",
    img: "https://i.pinimg.com/736x/ce/a8/77/cea87721f78f58179112bae31c6bc8b3.jpg",
    initial: { x: -80, opacity: 0 },
  },
  {
    title: "E-Commerce",
    img: "https://i.pinimg.com/736x/f8/82/bd/f882bd2d5ead41a09966ad81c292f1e5.jpg",
    initial: { y: 80, opacity: 0 },
  },
  {
    title: "Jewellery Shopping",
    img: "https://i.pinimg.com/736x/e8/9c/3e/e89c3e9bc37b78dcb6e6ae9c811c0bc6.jpg",
    initial: { scale: 0.8, opacity: 0 },
  },
  {
    title: "MERN Stack",
    img: "https://i.pinimg.com/1200x/52/19/d9/5219d9b3f4606ed553479e91b2b9b8d2.jpg",
    initial: { x: 80, opacity: 0 },
  },
];

function Projects() {
  return (
    <>
    <section className="bg-gray-950 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-blue-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto place-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={project.initial}
            whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-gray-900 rounded-xl p-5 shadow-lg max-w-sm w-full"
          >
            {/* Like */}
            <FaHeart className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:scale-110 transition cursor-pointer" />

            {/* Image */}
            <div className="bg-gray-800 rounded-lg overflow-hidden mb-5 h-40">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-fill"
              />
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold mb-5 text-center">
              {project.title}
            </h3>

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 rounded-md text-sm hover:bg-blue-700 transition">
                Live <FaExternalLinkAlt />
              </button>

              <button className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-md text-sm hover:bg-gray-800 transition">
                Code <FaGithub />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <Contact/>
    </>
  );
}

export default Projects;
