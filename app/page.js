import Image from "next/image";

// Your other import statements here...

export default function Home() {
  return (
    <>
      <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Giselle Ross</h1>
        <p style={{ textAlign: 'center' }}>Software Developer</p>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p>Email: gisellerosstech@gmail.com</p>
          <p>Phone: 951-483-9111</p>
          <p>Location: Tampa, FL</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/gisellerosstech" target="_blank" rel="noopener noreferrer">linkedin.com/in/gisellerosstech</a></p>
          <p>GitHub: <a href="https://github.com/giselleRoss" target="_blank" rel="noopener noreferrer">github.com/giselleRoss</a></p>
        </div>

        <h3 style={{ color: 'navy' }}>Technical Skills:</h3>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
          <li>Programming Languages: JavaScript</li>
          <li>Cloud Deployment and Technologies: DevOps, CircleCI, Docker, Git, Feature branch workflow</li>
          <li>Database Concepts and Technologies: Entity relationship diagrams, Database scaling</li>
          <li>Server-Side Concepts and Technologies: Node.js, Express.js, Next.js, MVC, Stress testing & scalability</li>
          <li>Client-Side Concepts and Technologies: HTML5/CSS3, DOM & DOM API, Event listeners, AJAX / Fetch, Component-based architecture, TailWind CSS</li>
          <li>Fundamentals of Computer Science: Data Structures, Algorithms</li>
        </ul>

        <h3 style={{ color: 'navy' }}>Relevant Projects:</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Dad Jokes | Full Stack Engineer | <a href="https://github.com/giselleRoss/frontend-project.git" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          {/* Add more project details as needed */}
        </ul>

        <h3 style={{ color: 'navy' }}>Professional Experience:</h3>
        <div>
          <h4 style={{ color: 'darkgreen' }}>US Army | Healthcare Specialist - Jan '24</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {/* Your list of achievements and responsibilities */}
          </ul>
        </div>

        {/* Add more professional experiences as needed */}

        <h3 style={{ color: 'navy' }}>Education:</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Operation Level-Up | Advanced Software Engineering Immersive Program - Dec '23 Apr '24</li>
          <li>California State University, East Bay | Computer Science - Sep '16 Jun '17 (Completed 90 credits)</li>
        </ul>

        <h3 style={{ color: 'navy' }}>Certifications:</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Security+ Certificate</li>
          <li>AWS Cloud Practitioner</li>
        </ul>
      </div>
    </>
  );
}