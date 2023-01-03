import React from 'react'
import"./Contact.css"
import {MdOutlineMail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {ImWhatsapp} from 'react-icons/im'



const Contact = () => {
  




  return (
    <section id='contact'>
      <h5>Get IN Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>alisadiq1314@gmail.com</h5>
            <a href="mailto:alisadiq1314@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Ali Sadiq</h5>
            <a href="https://m.me/profile.php?id=100010615179574" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <ImWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+923481729782</h5>
            <a href="https://api.whatsapp.com/send?phone+923481729782" target="_blank">Send a message</a>
          </article>
        </div>
      
      
      </div> 
    </section>
  )
}

export default Contact