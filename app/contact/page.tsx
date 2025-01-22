 'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Mail, Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import Header from "../components/Header/Header";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000); // Hide thank you message after 3 seconds
  };

  return (
    <> 
      <Header />
      <div className="p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                {isFormSubmitted ? "Thank you! I'll get back to you soon." : "Submit"}
              </button>
            </form>
          </div>

          {/* Contact Details and Social Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Details</h2>
            <div className="mb-4">
              <p className="flex items-center text-gray-600">
                <Mail className="mr-3 text-blue-500" /> 
                <strong className="text-gray-800">Email us at:</strong> <span className="ml-2">contact@blogsite.com</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="flex items-center text-gray-600">
                <Phone className="mr-3 text-blue-500" /> 
                <strong className="text-gray-800">Call us at:</strong> <span className="ml-2">+91 958 9516 678</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="flex items-center text-gray-600">
                <MapPin className="mr-3 text-blue-500" />
                <strong className="text-gray-800">Office Location:</strong> <span className="ml-2">71 Blog St, Blog City</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-700">Follow Us:</p>
              <div className="flex space-x-4 mt-3">
                <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
                  <Twitter size={24} />
                </a>
                <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
