"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/GithubIcon.png";
import LinkedinIcon from "../../public/LinkedinIcon.png";


export default function Contact() {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    console.log(await response.json());

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <>
      <section className="bg-amber-200 grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
        <div className="mr-16">
          <h5 className="text-xl font-bold text-black my-4">Let's Connect!</h5>
          <p className="text-black mb-4 max-w-md">
            {" "}
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have any questions or just trying to connect, I
            will do my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-4">
            <Link href="https://www.linkedin.com/in/gisellerosstech">
              <Image
                src={GithubIcon}
                alt="Github Icon"
                height={50}
                width={50}
              />
            </Link>
            <Link href="https://github.com/giselleRoss">
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                height={50}
                width={50}
              />
            </Link>
          </div>
        </div>
        <div>
        {emailSubmitted ? (
          <p className="text-green-800 text-xlg mt-2">
            Email sent successfully!
          </p>
        ) : (<form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-6">
              <label
                htmlFor="name"
                className="text-black block mb-2 text-sm font-medium"
              >
                First Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-red-300 hover:bg-red-400  text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>)}
        </div>
      </section>
    </>
  );
};
