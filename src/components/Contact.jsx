import React, { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "All fields are required!" });
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        "service_5io9r85",  // Replace with your EmailJS Service ID
        "template_pxaaof4",  // Replace with your EmailJS Template ID
        templateParams,
        "iHNyG74FRlxEqxYN-"    // Replace with your EmailJS Public Key
      );

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Try again later!" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Feel free to reach out! I’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-300 font-medium">Your Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 p-2.5 bg-[#2D2D2D] text-white border-none rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 font-medium">Email Address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 p-2.5 bg-[#2D2D2D] text-white border-none rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 font-medium">Message</label>
            <div className="relative mt-1">
              <MessageSquare className="absolute left-3 top-4 text-gray-500" size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 p-2.5 bg-[#2D2D2D] text-white border-none rounded-lg focus:ring-2 focus:ring-purple-500 h-32 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>

          {status.message && (
            <div className={`text-sm text-center p-2.5 rounded-md mb-4 ${status.type === "error" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`}>
              {status.message}
            </div>
          )}

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-white hover:opacity-80 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
