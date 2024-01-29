import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";


// Your other import statements here...

export default function Home() {
  return (
    <>
      <div className="bg-amber-200">
        <Header />
        <div className="sm:text-center md:max-xl:flex p-60 font-serif ">
          <h1 className="text-6xl mb-6">Hi! I'm Giselle.</h1>
          <h1 className="text-6xl hover:animate-bounce mb-6">
            A Software Engineer
          </h1>
          <h2>
            I find joy in crafting functional websites and applications,
            meticulously evaluating and testing each line of code to ensure
            optimal performance and user satisfaction.
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
// }
// <h3 className="text-navy">Technical Skills:</h3>
//           <ul className="list-circle pl-20">
//             <li>Programming Languages: JavaScript</li>
//             <li>
//               Cloud Deployment and Technologies: DevOps, CircleCI, Docker, Git,
//               Feature branch workflow
//             </li>
//             <li>
//               Database Concepts and Technologies: Entity relationship diagrams,
//               Database scaling
//             </li>
//             <li>
//               Server-Side Concepts and Technologies: Node.js, Express.js,
//               Next.js, MVC, Stress testing & scalability
//             </li>
//             <li>
//               Client-Side Concepts and Technologies: HTML5/CSS3, DOM & DOM API,
//               Event listeners, AJAX / Fetch, Component-based architecture,
//               TailWind CSS
//             </li>
//             <li>
//               Fundamentals of Computer Science: Data Structures, Algorithms
//             </li>
//           </ul>

//           <h3 className="text-navy">Relevant Projects:</h3>
//           <ul className="list-disk pl-20">
//             <li>
//               Dad Jokes | Full Stack Engineer |
//                 <Link href="https://github.com/giselleRoss/frontend-project.git"> Github</Link>
//                 <ul>
//                   <li>Created a front-end application that utilizes AJAX to pull dad jokes from an API randomly or can be searched</li>
//                   <li>Implemented event listeners for clicks, keypress, & play events in order to hear laughter & populate jokes when the image or search button is clicked, & when the Enter key is pressed</li>
//                   <li>Updated element properties using jQuery for DOM manipulation</li>
//                 </ul>
//             </li>
//             <li>
//               Paw Trainers | Full Stack Engineer |
//                 <Link href="https://github.com/JacobR96/PawTrainers.git"> Github</Link>
//                 <ul>
//                   <li>Improved efficiency & scalability by utilizing AWS backend with PostgreSQL for the database, incorporating S3 for additional functionality</li>
//                   <li>Drove a 30% increase in user engagement by building & optimizing the articles component & HTML using HTML, CSS, JavaScript, & React</li>
//                   <li>Improved website navigation by implementing a responsive design carousel with auto-scrolling & dynamic content display</li>
//                 </ul>
//             </li>
//           </ul>

//           <h3 className="text-navy">Professional Experience:</h3>
//           <div>
//             <h4 className="text-darkgreen">
//               US Army | Healthcare Specialist - Jan '24
//             </h4>
//             <ul className="list-disk pl-20">
//               <li>Supported 1,000 Department of Defense (DoD) employees and developed team dynamics with other medical personnel, resulting in a 20% increase in productivity</li>
//               <li>Effectively collaborated with medics, doctors, & nurses to evacuate 6 emergency patients, showcasing adaptability & effective communication skills in high-pressure scenarios</li>
//               <li>Enhanced medication management through proactive collaboration with pharmacists & doctors, resulting in a 60% increase in patient satisfaction within a span of 3 months</li>
//             </ul>
//           </div>
//           <h3 className="text-navy">Education:</h3>
//           <ul className="list-disk pl-20">
//             <li>
//               Operation Level-Up | Advanced Software Engineering Immersive
//               Program - Dec '23 Apr '24
//             </li>
//             <li>
//               California State University, East Bay | Computer Science - Sep '16
//               Jun '17 (Completed 90 credits)
//             </li>
//           </ul>
//           <h3 className="text-navy">Certifications:</h3>
//           <ul className="list-disk pl-20">
//             <li>Security+ Certificate</li>
//             <li>AWS Cloud Practitioner</li>
//           </ul>
//         </div>
