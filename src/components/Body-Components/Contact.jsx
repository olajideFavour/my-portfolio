import './Contact.css'
import github from '../../assets/Github.jpeg'
import linkedn from '../../assets/linkedn.jpeg'
import instagram from '../../assets/instagram.jpeg'
import whatsapp from '../../assets/whatsapp.jpeg'
import mail from '../../assets/mail.jpeg'

export function Contact(){

  return(
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p className="prose">I'm open to front-end roles and internships. Send me a message.</p>
      <ul>
        <li><a href="mailto:omoladefavour61@gmail.com"><img src={mail}></img></a></li>
        <li><a><img src={github} alt="GitHub"></img></a></li>
        <li><a href="https://www.linkedin.com/in/OlajideFavour" target="_blank" rel="noopener"><img src={linkedn} alt="LinkedIn"></img></a></li>
        <li><a href="https://www.instagram.com/j1d3x?stkn=MW9va2podHlscWdnNA%3D%3D&utm_source=qr" target='_blank' rel='noopener'><img src={instagram} alt="Instagram"></img> </a></li>
        <li><a  href="https://wa.me/2348103311542" target="_blank" rel="noopener"><img src={whatsapp}></img></a></li>
      </ul>
    </section>
  )
}