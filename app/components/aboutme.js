import React from "react";
import Image from "next/image";
import pro from "../../public/pro.jpg";
const Aboutme = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-black-900 font-medium title-font mb-2 md:w-2/5">
            About Me
          </h2>
          <Image src={pro} width={150} height={150} />
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              I am a full stack developer with a passion for learning and
              creating. I am currently enrolled in the University of Arizona
              Coding Bootcamp and will be graduating in August 2021. I have a
              background in the medical field and have been working in the
              medical field for the past 10 years. I am looking forward to a new
              career in the tech industry and am excited to see where this new
              journey takes me.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
