/** @format */

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelopeOpenText } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "80cf046d-5987-477d-98c6-56ed9f12b9a0",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: "You just got a mail genius!!",
        from_name: "Cest_Elaine",
      }),
    });

    const result = await res.json();

    if (result.success) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Oops! Something went wrong, please refresh and try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-500">Contact Me</h2>
        <p className="text-center italic text-gray-400 mb-10">
          Let’s connect — whether it’s collaboration, curiosity, or coffee ☕
        </p>

        {isSubmitted ? (
          <p className="text-green-400 text-center text-xl">
            ✅ Message sent successfully. I’ll be in touch soon!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-10 flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/elaine-yvette-74921524a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-500">
            <FaLinkedin size={32} /> 
          </a>
          <a href="https://github.com/Elai5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-500">
            <FaGithub size={32} /> 
          </a>
          <a href="mailto:yvettelaine007@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-500">
            <FaEnvelopeOpenText size={32} /> 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
