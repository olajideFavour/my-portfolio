import './Projects.css'

export function Projects(){
  return(
    <section className='projects' id='projects'>
      <h2>Projects</h2>
      <div className='projects-container'>
        <a href='https://olajidefavour.github.io/whether-application/' target='_blank'>
          <div className='card'>
            <div>
            <h3>Whether Application</h3>
            <p className='progress'>Work Completed</p>
            </div>
          </div>
        </a>
        <a href='https://olajidefavour.github.io/Big-Jids-HealthCare/' target='_blank'>
          <div className='card'>
            <div>
              <h3> Heatlh Application UI</h3>
              <p className='progress'>Work in Progress</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}