import React from 'react'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt }from "react-icons/bi"
import {RiServiceFill} from 'react-icons/ri'
import {TbMessageCircle2} from 'react-icons/tb'
import "./Nav.css"
import { useState } from 'react'



const Nav = () => {
  const [activeNav,setactiveNav]=useState('#')
  return (
<nav>
<a href="#" onClick={()=> setactiveNav('#')} className={activeNav==='#' ? 'active':''}><AiTwotoneHome/></a>
    <a href="#about" onClick={()=> setactiveNav('#')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
    <a href="#experience" onClick={()=> setactiveNav('#')} className={activeNav==='#experience' ? 'active':''}><BiBookAlt/></a>
    <a href="#services" onClick={()=> setactiveNav('#')} className={activeNav==='#services' ? 'active':''}><RiServiceFill/></a>
    <a href="#contact" onClick={()=> setactiveNav('#')} className={activeNav==='#contact' ? 'active':''}><TbMessageCircle2/></a>
  
</nav>
  )
}

export default Nav;
