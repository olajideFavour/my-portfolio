import { useState } from 'react';
import'./Home.css'

export function Home(){

  const [accent, setAccent] = useState("blue");



  // document.getElementById('sw').addEventListener('click',function(e){
  // const b=e.target.closest('button'); if(!b) return;
  // document.documentElement.style.setProperty('--accent', b.dataset.c);
  // this.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
  // });

  function blueAccent (){
    setAccent("blue");
    document.documentElement.style.setProperty('--accent','#3D5AFE' );

  }
  function greenAccent (){
    setAccent("green");
    document.documentElement.style.setProperty('--accent','#0A8A5F' );
  }
  function redAccent (){
    setAccent("red");
    document.documentElement.style.setProperty('--accent','#D93F1F' );
  }
  function purpleAccent (){
    setAccent("purple");
    document.documentElement.style.setProperty('--accent','#7C4DFF' );
  }


  return(
    <div className='home' id='home'>
      <div className='home-text'>
        <h1>Olajide Favour</h1>
        <p>Front-end developer in Lagos, Nigeria. I build responsive, easy-to-use web apps with React, JavaScript, HTML and CSS.</p>
        <div className="socials">
          <a className="btn pri" 
            href="mailto:omoladefavour61@gmail.com">
            Email Me
          </a>
          <a className="btn sec" href="https://www.linkedin.com/in/OlajideFavour" target="_blank" rel="noopener">LinkedIn</a>
        </div>

        <div className="picker">
          <span>Try it: <code>--accent</code> is</span>
          <div className="sw" id="sw">
            <button onClick={blueAccent} className={ accent === 'blue' ? 'check blue-picker' :'blue-picker notcheck'} ></button>
            <button onClick={greenAccent} className={ accent === 'green' ? 'check green-picker' :'green-picker notcheck'} ></button>
            <button onClick={redAccent} className={ accent === 'red' ? 'check red-picker' :'red-picker notcheck'}  ></button>
            <button onClick={purpleAccent} className={ accent === 'purple' ? 'check purple-picker' :'purple-picker notcheck'}></button>
          </div>
        </div>
      </div>  
    </div>
  )
}