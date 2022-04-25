import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/me_bg_rm.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dasun Sucharith</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header