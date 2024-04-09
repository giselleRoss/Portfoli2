"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        <div className="sm:col-span-6 lg:col-span-7 xl:col-span-6 place-self-center text-center xl:text-left">
          <div className="lg:flex lg:flex-col lg:items-start lg:mb-8">
            <div className="lg:flex-shrink-0 lg:self-start">
              <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Hi, I'm{" "}
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Giselle",
                    2000,
                    "A Software Engineer",
                    1000,
                    "A Front-End Developer",
                    1000,
                    "A Back-End Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
                I find joy in crafting functional websites and applications,
                meticulously evaluating and testing each line of code to ensure
                optimal performance and user satisfaction.
              </p>
              <div>
                <Link
                  href="/contactMe"
                  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#CDFADB] to-[#CDFADB] hover:bg-slate-200 text-black"
                >
                    Hire Me
                  
                </Link>
                <Link
                  href="/GisellesResume.pdf"
                  target="_blank"
                  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#CDFADB] to-[#CDFADB] text-black mt-3"
                >
                  <span className="block bg-[#57b2d3] hover:bg-slate-800 rounded-full px-5 py-2">
                    Download CV
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-6 xl:col-span-6 mt-4 sm:mt-0 xl:col-start-7">
          <div className="rounded-full bg-[#CDFADB] w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] relative mx-auto sm:mx-0">
            <Image
              src="/minime.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={275}
              height={275}
              alt="Ai image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
