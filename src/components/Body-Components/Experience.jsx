import './Experience.css'

export function Experience(){
  return(
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <ul className="experience-container">
        <li >
          <h3>Front-End Development Intern</h3>
          <p className='meta'>Sidmach Technologies, Lagos, Nigeria</p>
          <p className='meta'>September 2025 - October 2025</p>
          <ul>
            <li>Assisted in front-end web development tasks using HTML, CSS, React and JavaScript.</li>
            <li>Supported UI testing and deployment of web applications.</li>
            <li>Collaborated with senior developers on debugging and optimization.</li>
            <li>Gained exposure to modern frameworks and corporate project workflows.</li>
          </ul>
        </li>
        <li >
          <h3>Web Development Intern</h3>
          <p className='meta'>JM Tech Center, Ekiti, Nigeria</p>
          <p className='meta'>July 2024 - September 2024</p>
          <ul>
            <li>Built and styled responsive web pages with HTML, CSS, and JavaScript.</li>
            <li>Participated in team-based project planning and agile practices.</li>
            <li>Developed problem-solving and time management skills through real-world projects.</li>
            <li>Contributed to a World Bank-partnered Learning Program project.</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}