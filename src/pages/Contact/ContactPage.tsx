import React from 'react'
import { Button } from 'react-bootstrap'
import './ContactPage.css'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const ContactPage = () => {
  return (
    <>
    <h1 className='intro'>On the Web</h1>
    <div className='links'>
      <nav><a href="https://www.linkedin.com/in/pablo-padilla-rojas-351240257/"><BsLinkedin className='icon' /></a><a href="">@Pablo Padilla Rojas</a></nav>
      <nav><a href="https://twitter.com/pablopadillaro"><BsTwitter  className='icon'/></a><a href="">@pablopadillaro</a></nav>
      <nav><a href="https://www.instagram.com/_pablo.padilla/"><BsInstagram  className='icon'/></a><a href="">@_pablo.padilla</a></nav>
      <nav><a href="https://github.com/PadillaDesarrollador"><BsGithub  className='icon'/></a><a href="">@PadillaDesarrolador</a></nav>
      <nav className='gmail'>
      </nav>
    </div>
    </>
  )
}
