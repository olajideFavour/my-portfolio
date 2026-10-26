import { Home } from './Body-Components/Home'
import { About } from './Body-Components/About'
import { Skills } from './Body-Components/Skills'
import { Experience } from './Body-Components/Experience'
import { Projects } from './Body-Components/Projects'
import { Contact } from './Body-Components/Contact'
import {Education} from './Body-Components/Education'
import './Body.css'

export function Body(){
  return(
    <div className='body'>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  )
}