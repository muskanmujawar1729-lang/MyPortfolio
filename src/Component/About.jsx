import React from "react"
import { motion } from "framer-motion"
import ab from './Image/abt.jpg'
import Skills from "./Skills"

function About() {
  return (
    <>
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg shadow-blue-900/40"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>
        <div className="justify-center flex p-2">
          <motion.img
            src={ab}
            className="w-60 h-60 rounded-full outline-blue-700 outline-2 border-b-2 border-blue-400 shadow-lg shadow-blue-800"
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-300 leading-relaxed md:text-lg text-sm mt-4 "
        >
          Hi, I’m <span className="text-white font-semibold">Muskan Mujawar</span>,
          a passionate <span className="text-blue-400">MERN Stack Developer</span> who loves
          building modern, responsive and interactive web applications.
          I enjoy working with React, Node.js, Express.js, MongoDB, Tailwind CSS, and animations to create
          smooth user experiences. I actively work on MERN stack projects to sharpen my skills.

          I focus on writing clean, scalable, and maintainable code following best practices.
          I enjoy learning new technologies and improving my problem-solving abilities every day.
          My goal is to build meaningful digital products that provide real value to users.
          I’m always excited to collaborate, learn, and grow as a developer.

        </motion.p>

       
      </motion.div>
    </section>
    <Skills/>
    </>
  )
}

export default About
