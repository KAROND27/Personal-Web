import React from 'react'
import "./Header.css"
//import "../../index.css"
import CT from './CT'
import ME from '../../images/ali.jpg'
import Headersocial from './Headersocial'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello, I'm</h5>
        <h1>Ali Sadiq</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <CT/>
        <Headersocial/>
      <div className="me ali">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
      
    
    
    </header>
  )
}

export default Header