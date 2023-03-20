import React from 'react'
import Marquee from "react-fast-marquee";
import '../Footer/Footer.css'


export const Footer = () => {
  return (
    <nav className='fot'>
            <Marquee speed={100} pauseOnHover className='mensaje'>
        This page is under constant development
    </Marquee>
    <p className='copy'>©2023 Pablo Padilla Rojas. All rights reserved</p>
    </nav>
  )
}
