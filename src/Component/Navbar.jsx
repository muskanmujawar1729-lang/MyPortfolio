import React, { useState } from "react";
import logo from "./Image/logo.jpg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 border-b border-gray-700 px-4 py-2">
        {/* Top Navbar */}
        <div className="flex items-center justify-between max-w-7xl mx-auto">

          {/* Logo */}
          <motion.img
            src={logo}
            className="w-14 h-14 rounded-full shadow-md shadow-gray-700"
            animate={{ rotate: 360 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              },
              scale: { duration: 0.3 },
            }}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-white font-medium">
            <Link className="hover:text-blue-500 transition" to="/">Home</Link>
            <Link className="hover:text-blue-500 transition" to="/about">About</Link>
            <Link className="hover:text-blue-500 transition" to="/skill">Skills</Link>
            <Link className="hover:text-blue-500 transition" to="/project">Project</Link>
            <Link className="hover:text-blue-500 transition" to="/contact">Contact</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 py-4 text-white text-center bg-gray-950 border-t border-gray-700"
          >
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <Link onClick={() => setOpen(false)} to="/skill">Skills</Link>
            <Link onClick={() => setOpen(false)} to="/project">Project</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          </motion.div>
        )}
      </nav>

      {/* Spacer (important for fixed navbar) */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
