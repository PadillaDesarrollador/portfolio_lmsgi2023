import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'


export const NavBar = () => {
  return (
    <nav className='bar'>
        <Spinner animation="border" variant='success'/>
        <Link to='aboutme'>About Me</Link>
        <Link to='works'>Works</Link>
        <Link to='contact'>Contact</Link>
    </nav>
  )
}
