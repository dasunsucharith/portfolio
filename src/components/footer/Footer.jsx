import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <a href="#home" className='footer__logo'>DSP</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about"></a></li>
        <li><a href="#experience"></a></li>
        <li><a href="#services"></a></li>
        <li><a href="#portfolio"></a></li>
        <li><a href="#testimonials"></a></li>
        <li><a href="#contact"></a></li>
      </ul>
    </footer>
  )
}

export default Footer