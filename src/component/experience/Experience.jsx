import React from 'react'
import './Experience.css'

import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
  
    <section id='experience'>
      <h5>What Skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontened Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillCheckCircleFill className='experience_details-icon'/>
             <div>
             <h4>HTML</h4>
              <small className='text-light'> Experienced</small>
             </div>
            </article> 
            <article className='experience__details'>
            <BsFillCheckCircleFill className='experience_details-icon'/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'> Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
            <BsFillCheckCircleFill/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsFillCheckCircleFill/>
              <div><h4>Tailwind Css</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
            <BsFillCheckCircleFill/>
             <div> <h4>Javascript</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
            <BsFillCheckCircleFill/>
              <div>
              <h4>React Js</h4>
              <small className='text-light'> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsFillCheckCircleFill/>
              <div><h4>Node Js</h4>
              <small className='text-light'> Experienced</small></div>
            </article>
            <article className='experience__details'>
            <BsFillCheckCircleFill/>
              <div>
              <h4>Mongodb</h4>
              <small className='text-light'> Experienced</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience