import React, { useState } from "react";
import { motion } from "framer-motion";
import contact from "./Image/c.jpg"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Console me message
    console.log("Contact Message:", formData);

    // ✅ Screen pe success message
    setSuccess(true);

    // form clear
    setFormData({ name: "", email: "", message: "" });

    // success text hide after 3 sec
    setTimeout(() => setSuccess(false), 3000);
  };
  const msgSend = () =>{
    alert("✅ Message sent successfully!");

  }

  return (
    <section className="bg-gray-950 text-white md:h-[80vh] h-[70vh] mt-32 px-6">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 justify-center flex "
      >
               <img src={contact} className="w-80 h-30 rounded-b-4xl rounded-s-4xl shadow-lg shadow-blue-900 "/>

      </motion.h2>

      <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded font-medium" onClick={msgSend}
          >
            Send Message
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-green-500 text-center mt-3" >
              
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
