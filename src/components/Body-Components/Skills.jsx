import './Skills.css'

export function Skills(){
  return(
    <section className='skills' id='skills'>
      <h2>Skills</h2>
      <div className='skillsContainer grid'>
        <div className='front-end card'>
          <h3>Front-End</h3>
          <ul className='tags'>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
            <li>UI Development</li>
          </ul>
        </div>
        <div className='web-development card'>
          <h3>Web Development</h3>
          <ul className='tags'>
            <li>JavaScript Frameworks</li>
            <li>Web Application Development</li>
            <li>API Integration</li>
            <li>Cross-Browser DEvelopment</li>    
          </ul>      
        </div>  
        <div className='technical-skills card'>
          <h3>Technical Skills</h3>
          <ul className='tags'>
            <li>Debugging</li>
            <li>Problem Solving</li>
            <li>Perfomance Optimization</li>
            <li>Code Testing</li>
          </ul>
        </div>  
        <div className='soft-skills card'>
          <h3>Soft Skills</h3>
          <ul className='tags'>
          <li>Team Collaboration</li>
          <li>Agile Workflows</li>
          <li>Project Participation</li>
          <li>Technical Communication</li>
          <li>Time Management</li>
          </ul>
        </div>  
        <div className='tools card'>
          <h3>Tools</h3>
          <ul className='tags'>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Chrome Developer Tools</li>
            <li>npm</li>
          </ul>
        </div>         
      </div>
    </section>
  )
}