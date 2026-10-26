import './Header.css'
import profilePic from '../assets/profilePic.png'
import { useState , useRef } from 'react'

export function Header() {
  const [navstate , setNavState] = useState(false)
  const navref = useRef(null);
  const mediaQuery = window.matchMedia('(max-width: 651px)');

  function toglenav() {
    if (mediaQuery.matches && navstate) {
      navref.current.style.height = "0px";
      navref.current.style.borderBottom = 'solid 0px var(--line)';
      setNavState(false);
    } else {
      navref.current.style.height = "16rem";
      navref.current.style.borderBottom = 'solid 1px var(--line)';
      setNavState(true);
    }
  }

  return (
    <div className='header'>
      <div className='header-title'>
        <img src={profilePic}/>
        <p>My Portfolio</p>
      </div>  
      <div 
      className='togleNav'
      onClick={toglenav}
      >
        open
      </div>
      <div className='nav' ref={navref}>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}