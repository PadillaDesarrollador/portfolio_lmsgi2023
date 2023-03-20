import React from 'react'
import { Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { AiFillCrown } from "react-icons/ai";

export const NavBar = () => {
  return (
    <nav className='bar'>
        <a  href=""><AiFillCrown className='willy'/></a>
        <Button href='aboutme'>About Me</Button>
        <Button href='works'>Works</Button>
        <Button href='contact'>Contact</Button>
    </nav>
  )
}
