import React from "react";
import Image from "next/image";
import pro from "../../public/pro.jpg";

const Aboutme = () => {
  return (
    <>
      <section className="text-gray-600 sm:text-center md:max-xl:flex pb-10 md:pb-20 lg:pb-32 font-serif body-font">
        <div className="container px-5 mx-auto flex flex-wrap items-start justify-center md:justify-between">
          <div className="md:w-2/5 md:pr-6 mt-12 text-left">
            <h2 className="sm:text-3xl text-2xl text-black-900 font-medium title-font text-center mb-4 bg-gradient-to-r  from-purple-400 to-pink-600 bg-[length:75%_6px] bg-no-repeat bg-bottom">
              My Story in Web Development
            </h2>
            <p className="leading-relaxed text-base">
              Hi there! 👋 I'm Giselle, and my journey into web development has
              been quite a ride. Growing up, tech stuff was always around me
              because my dad was a database engineer. He used to teach classes
              on computer things, and I got to tag along.
            </p>
            <p className="leading-relaxed text-base">
              {" "}
              I wanted to create my own path. So, I decided to try something
              different and joined the military as a medic for six years. I
              loved helping people, solving problems, and working in a team.
            </p>
            <p className="leading-relaxed text-base">
              {" "}
              As my time in the military was coming to an end, I had to figure
              out what I wanted to do next. I remembered how much I enjoyed
              tech, so I jumped back into it. Web development caught my eye, and
              I ended up in a 17-week program at Galvanize to learn more.
            </p>
            <p className="leading-relaxed text-base">
              {" "}
              Even though I came from a healthcare background, I found
              similarities in solving problems. I believe that facing challenges
              and learning from mistakes is what will make me a successful
              software engineer.
            </p>
            <p className="leading-relaxed text-base">
              {" "}
              Outside of coding, I like to spend my free time helping out at
              food pantries and hanging out with my two dogs and husband.
              Quality time is super important to me. I also enjoy going to the
              gym, trying new vegan restaurants, and getting lost in a good
              book.
            </p>
            <p className="leading-relaxed text-base"> 
              {" "}
              My journey is all about learning, helping others, and embracing
              challenges. I'm excited about what's next and can't wait to create
              cool things in the world of web development. Let's build something
              awesome together!
            </p>{" "}
          </div>
          <div className="md:w-2/5 md:pl-6 md:top-0 mt-12 flex-shrink-0 sticky top-10">
            <Image priority={true} src={pro} width={300} height={400} placeholder="blur" alt="image"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
