import React from 'react'
import './Service.css'
import{GiCheckMark}from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
        <h5> What i offer</h5>
        <h2>services</h2>
        <div className="container serivces_container">
            <article className='service'>
                <div className='service_head'>
                    <h3>Frontened Web Development</h3>
                </div>
                <ul className='service_list'>
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p> HTML&HTML5</p>
                    </li>
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p> Developing user interface with Bootstrap & Tailwind Css</p>
                    </li>
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p> Developing user interface with React js</p>
                    </li>
                    
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p> React Hooks</p>
                    </li>
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p> Global state management using modern Redux with Redux Toolkit </p>
                    </li>
                    
                    
                </ul>
            </article>
            <article className='service'>
                <div className='service_head'>
                    <h3> Backend Web Development</h3>
                </div>
                <ul className='service_list'>
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p> REST APIs using Express</p>
                    </li>
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p> JWT Authorization and Authentication</p>
                    </li>
                   
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p> Database management</p>
                    </li>
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p>MongoDB with Mongoose (queries handling)</p>
                    </li>
                    <li>
                        <GiCheckMark className='service_list-icon'/>
                        <p> Server Side Development Using Node Js</p>
                        
                    </li>
                    
                    
                    
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services