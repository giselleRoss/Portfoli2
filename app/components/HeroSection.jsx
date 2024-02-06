"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cold-1 lg:grids-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-black mb-4 text-4xl sm;text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Giselle",
                2000,
                "A Software Engineer",
                1000,
                "A Software Developer",
                1000,
                "A Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl ">
            I find joy in crafting functional websites and applications,
            meticulously evaluating and testing each line of code to ensure
            optimal performance and user satisfaction.
          </p>
          <div>
            <Link
              href="/contactMe"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/Giselle'sResume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#CDFADB] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/minime.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
