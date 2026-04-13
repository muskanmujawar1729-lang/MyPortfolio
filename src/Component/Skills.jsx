import React from "react"
import { motion } from "framer-motion"
import Projects from "./Projects"

const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Operating System", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },

]

function Skills() {
    return (
        <>
            <section className="min-h-screen bg-gray-950 text-white px-6 py-20">
                <motion.h1
                    className="text-2xl font-semibold bg-gradient-to-r from-blue-900 via-yellow-700 to-purple-800 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    Skills are something no one can ever take away from you.
                </motion.h1>

                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-12 m-6"
                    >
                        My <span className="text-blue-500">Skills</span>
                    </motion.h2>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ scale: 1.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900 rounded-xl p-4 flex flex-col items-center
                         shadow-md shadow-blue-900/40 border border-blue-900   border-b-2"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-14 h-14 mb-3"
                                />
                                <p className="text-sm font-medium text-gray-200">
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
            <Projects/>
        </>
    )
}

export default Skills
