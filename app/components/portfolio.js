import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dadJokes from "../../public/dadJokes.jpg"
import pawMentor from "../../public/pawmentor.png"




function PortfolioCom() {
  return (
    <>
    <div className="bg-amber-200 text-gray-600 sm:text-center md:max-xl:flex p-8 md:p-16 lg:p-20 font-serif">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="p-4 bg-gray-200 rounded shadow-md">
      <p className="text-xl font-bold mb-4">Project 1</p>
      <Link href="http://dadjokesproject.s3-website.us-east-2.amazonaws.com">
        <Image src={dadJokes} width={400} height={400} className="mt-5" />
      </Link>
      <p className="mt-4">
        Created a front-end application that utilizes event listeners and AJAX to pull dad jokes from an API randomly or can be searched. Updated element properties using jQuery for DOM manipulation.
      </p>
    </div>

    <div className="p-4 bg-gray-200 rounded shadow-md">
      <p className="text-xl font-bold mb-4">Project 2</p>
      <Link href="paw-trainers.vercel.app">
        <Image src={pawMentor} width={400} height={400} className="mt-5" />
      </Link>
      <p className="mt-4">
        Contributed to the Paw Trainers app using React, Next.js, S3, HTML, and TailWindCSS.
      </p>
    </div>

    <div className="p-4 bg-gray-200 rounded shadow-md">
      <p className="text-xl font-bold mb-4">Project 3</p>
      <p className="font-bold text-lg self-center py-20">COMING SOON</p>
    </div>
  </div>
</div>
    </>
  )
}
export default PortfolioCom;
