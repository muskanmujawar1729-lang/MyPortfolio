import React from "react"
import img from "./Image/girl.jpg"
import { motion } from "framer-motion"
import About from "./About"

function Home() {
    return (
        <>
            <section className="max-w-7xl mx-auto px-8 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <motion.h1
                            className="text-4xl font-bold"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        >
                            I'm Muskan
                        </motion.h1>

                        <h2 className="font-semibold text-2xl text-blue-700">Mern Stack Developer</h2>

                        <p className="mt-4 max-w-md text-gray-500">
                            Hi! I'm Muskan, a passionate web developer skilled in both **frontend and backend development**.
                            Currently, I work on **MERN stack projects**, building dynamic and responsive web applications.
                            I love turning ideas into interactive, user-friendly experiences on the web.
                        </p>
                        <div className="mt-1 justify-center">
                            <button
                                className="mt-2 flex items-center gap-1 sm:justify-center sm:flex sm:items-center 
                                rounded-md bg-blue-950 px-4 py-2 tracking-wide shadow-md shadow-white/20 md:ml-0 ml-22
                                 outline-blue-800ransition-all duration-300 hover:shadow-blue-500/60 hover:scale-105">
                                Download
                                <span className="font-bold text-blue-400">CV</span>
                            </button>
                        </div>
                        </motion.div>

                    {/* Image Section */}
                    <div>
                        <motion.img
                            src={img}
                            alt="profile"
                            className="md:w-96 md:h-96 rounded-full shadow-md shadow-white"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", }}
                        />
                    </div>
                </div>
            </section>
            <About />
        </>
    )
}

export default Home
