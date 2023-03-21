import React from 'react'
import { Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { AiFillCrown } from "react-icons/ai";

export const NavBar = () => {
  return (
    <nav className='bar'>
        <a  href="https://esports.as.com/2020/01/07/Willyrex.png?hash=aa6efb4b2031c04d442cbc9ca6391b4790ad0130"><AiFillCrown className='willy'/></a>
        <Button href='/'>Home</Button>
        <Button href='aboutme'>About Me</Button>
        <Button href='works'>Works</Button>
        <Button href='contact'>Contact</Button>
    </nav>
  )
}
