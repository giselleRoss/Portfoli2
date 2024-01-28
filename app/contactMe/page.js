import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Header />

      

      <div className="bg-gray-800 py-4 px-6 flex flex-col items-center justify-center">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p>Email: gisellerosstech@gmail.com</p>
          <p>Phone: 951-483-9111</p>
          <p>Location: Tampa, FL</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/gisellerosstech" target="_blank" rel="noopener noreferrer">linkedin.com/in/gisellerosstech</a></p>
          <p>GitHub: <a href="https://github.com/giselleRoss" target="_blank" rel="noopener noreferrer">github.com/giselleRoss</a></p>
        </div>
        {/* Contact Form (Example) */}
        <form className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-gray-800 text-lg font-semibold mb-4">
            Contact Us
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600 block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600 block">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-gray-600 block">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
