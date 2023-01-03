import React from 'react'
import "./About.css"
import ME from '../../images/ali.jpg'
 import{RiAwardFill}from "react-icons/ri"
 import {VscProject} from "react-icons/vsc"
const About = () => {
  return (
    <section id='about'>
<h5> Get to Know</h5>
<h2>About Me</h2>
<div className="container about__container">
  <div className="about__me">
    <div className="about__me-image">
      <img src={ME} alt="PIC" />
      </div>
</div>
      
    
  

  <div className="about__container">
    <div className="about__cards">
      <article className='about__card'>
        <RiAwardFill className='about__icon'/>
        <h5>Experience</h5>
        <small>1 years  Working</small>
      </article>
      </div>
      <div>
      <article className='about__card'>
        <VscProject className='about__icon'/>
        <h5 cl>Projects</h5>
        <small>"Form Validation"</small>
        <small>"To Do List"</small>
        <small>"Guess Number Game"</small>
        <small>+++</small>
      </article>
      </div>
   
    
      
    
    <p>
    A Professional Software Developer with over a year of experience developing web applications with React.js, Node.js/Express.js and Mongodb.
    </p>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    
    
    </div>
</div> 

    </section>
  )
}

export default About