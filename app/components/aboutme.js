import React from "react";
import Image from "next/image";
import pro from "../../public/pro.jpg";

const Aboutme = () => {
  return (
    <>
      <section className="bg-amber-200 text-gray-600 sm:text-center md:max-xl:flex p-50 font-serif body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-black-900 font-medium title-font mb-2 md:w-2/5">
            My Story in Web Development
          </h2>
          <Image src={pro} width={150} height={150} />
          <div className="md:w-3/5 md:pl-6 mt-12">
            <p className="leading-relaxed text-base"> 
Hi there! 👋 I'm Giselle, and my journey into web development has been quite a ride. Growing up, tech stuff was always around me because my dad was a database engineer. He used to teach classes on computer things, and I got to tag along.</p>

<p> I wanted to create my own path. So, I decided to try something different and joined the military as a medic for six years. I loved helping people, solving problems, and working in a team.</p>

<p> As my time in the military was coming to an end, I had to figure out what I wanted to do next. I remembered how much I enjoyed tech, so I jumped back into it. Web development caught my eye, and I ended up in a 17-week program at Galvanize to learn more.</p>

<p> Even though I came from a healthcare background, I found similarities in solving problems. I believe that facing challenges and learning from mistakes is what will make me a successful software engineer.</p>

<p> Outside of coding, I like to spend my free time helping out at food pantries and hanging out with my two dogs and husband. Quality time is super important to me. I also enjoy going to the gym, trying new vegan restaurants, and getting lost in a good book.</p>

<p> My journey is all about learning, helping others, and embracing challenges. I'm excited about what's next and can't wait to create cool things in the world of web development. Let's build something awesome together!</p>
{" "}
            
          </div>
        </div>
      </section>

    </>
  );
};

export default Aboutme;
