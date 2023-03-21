import React from 'react'
import { Button } from 'react-bootstrap'
import './ContactPage.css'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const ContactPage = () => {
  return (
    <>
    <h1 className='intro'>On the Web</h1>
    <nav className='links'>
      <a href="https://www.linkedin.com/in/pablo-padilla-rojas-351240257/"><BsLinkedin className='icon' />@Pablo Padilla Rojas</a>
      <a href="https://twitter.com/pablopadillaro"><BsTwitter  className='icon'/>@pablopadillaro</a>
      <a href="https://www.instagram.com/_pablo.padilla/"><BsInstagram  className='icon'/>@_pablo.padilla</a>
      <a href="https://github.com/PadillaDesarrollador"><BsGithub  className='icon'/>@PadillaDesarrolador</a>
      </nav>
      <nav className='gmail'>
        <h5>I you want, you can send me an email <Button> pablopadillarojas03@gmail.com</Button></h5>
      </nav>
    </>
  )
}
