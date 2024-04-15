'use client'
import React, {useState} from 'react'
import {useFormState, useFormStatus} from 'react-dom';

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
              type="submit"
              aria-disabled={pending}
              className="bg-red-300 hover:bg-red-400  text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
  )
}

const ContactForm = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    const resData = await res.json();
    if (res.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
    console.log(resData)
  }
  return (
    <div>
      {emailSubmitted ? (
        <p className="text-green-500 text-sm mt-2">
        Email sent successfully!
      </p>
      ) : (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="text-black, block, mb-2, text-sm, font-medium, p-6">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                required
                className="bg-white, border, border-[#33353F], placeholder-[#9CA2A9], text-black, text-sm, block, rounded-lg, w-full, py-2.5, px-5"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-black, block, mb-2, text-sm, font-medium, p-6">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-white, border, border-[#33353F], placeholder-[#9CA2A9], text-black, text-sm, block, rounded-lg, w-full, py-2.5, px-5"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-black, block, mb-2, text-sm, font-medium, p-6">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="bg-white, border, border-[#33353F], placeholder-[#9CA2A9], text-black, text-sm, block, rounded-lg, w-full, py-2.5, px-5"
                placeholder="Enter the subject"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-black, block, mb-2, text-sm, font-medium, p-6">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="bg-white, border, border-[#33353F], placeholder-[#9CA2A9], text-black, text-sm, block, rounded-lg, w-full, py-2.5, px-5"
                placeholder="Let's talk about..."
              />
            </div>
            <SubmitButton/>
          </form>
      )
      }    
        </div>
  )
}
export default ContactForm;