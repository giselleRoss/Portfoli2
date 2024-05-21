"use client";
import React, { useState } from "react";
import Image from "next/image";
import EmailIcon from "@/public/email.svg";
import SubmitButton from "./SubmitButton";


const ContactForm = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  let capitalizedFirstName = "";
  let capitalizedLastName = "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formSubmit) return; // Prevent multiple submissions
    setFormSubmit(true);

    const fullName = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    if (subject.length > 100) {
      setSubjectError("Subject length must be less than 100 characters");
      setFormSubmit(false);
      return;
    }
    setSubjectError("");
    //handle an empty field
    if (fullName === "" || email === "" || subject === "" || message === "") {
      setError(`Please fill out the field`);
      setFormSubmit(false);
      return;
    }
    setError("");

    //handle single name or lowercase names
    const spaceIndex = fullName.indexOf(" ");

    if (spaceIndex === -1) {
      capitalizedFirstName =
        fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase();
      capitalizedLastName = "!";
    } else {
      const firstName = fullName.slice(0, spaceIndex).trim();
      const lastName = fullName.slice(spaceIndex + 1).trim();
      capitalizedFirstName =
        firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
      capitalizedLastName =
        lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    }

    const data = {
      firstName: capitalizedFirstName,
      lastName: capitalizedLastName,
      email,
      subject,
      message,
    };
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      // Clear form fields after successful submission
      e.target.reset();
      setEmailSubmitted(true);
    } catch (error) {
      setError("Failed to send email. Please try again.");
    } finally {
      setFormSubmit(false);
    }
  };
  return (
    <div>
      {emailSubmitted ? (
        <div className="shadow border-solid border-4 border-y-emerald-400 bg-gradient-to-r from-white/50 to-emerald-500/50 text-center p-6">
        <p className="text-black text-md font-bold tracking-wide mt-2">
            Email sent successfully!{" "}
            <Image
              src={EmailIcon}
              className="w-12 h-12 inline-block"
              alt="email icon"
            />
          </p>
        </div>
      ) : (
        <form className="flex flex-col p-6" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="text-black mb-2 text-sm font-medium">
            Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              required
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg w-full py-2.5 px-5"
              placeholder="Enter your name"
            />
            {error && (
              <p id="name-error" className="text-red-500 text-sm mt-1">
                {error}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-black mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              title="Please enter a valid email address"
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg w-full py-2.5 px-5"
              placeholder="Enter your email"
            />
            {error && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {error}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-black mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg w-full py-2.5 px-5"
              placeholder="Enter the subject"
            />
            {subjectError && (
              <p id="subject-error" className="text-red-500 text-sm mt-1">
                {subjectError}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-black mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg w-full py-2.5 px-5"
              placeholder="Let's talk about..."
            />
            {error && (
              <p id="message-error" className="text-red-500 text-sm mt-1">
                {error}
              </p>
            )}
          </div>
          <SubmitButton formSubmit={formSubmit} />
        </form>
      )}
    </div>
  );
};
export default ContactForm;
