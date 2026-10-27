import './Header.css'
import profilePic from '../assets/profilePic.png'
import whiteMenu from '../assets/whiteMenu.png'
import menu from '../assets/menu.png'
import { useState , useRef } from 'react'

export function Header() {
  const [navstate , setNavState] = useState(false)
  const navref = useRef(null);
  const mediaQuery = window.matchMedia('(max-width: 651px)');
  const mediaTheme = window.matchMedia('(prefers-color-scheme: dark)');

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
        <img src={mediaTheme.matches ? whiteMenu : menu}></img>
      </div>
      <div className='nav' ref={navref}>
        <ul>
          <li><a href='#' onClick={toglenav}>Home</a></li>
          <li><a href='#about' onClick={toglenav}>About</a></li>
          <li><a href='#skills' onClick={toglenav}>Skills</a></li>
          <li><a href='#experience' onClick={toglenav}>Experience</a></li>
          <li><a href='#projects' onClick={toglenav}>Projects</a></li>
          <li><a href='#contact' onClick={toglenav}>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}