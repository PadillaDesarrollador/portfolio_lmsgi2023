import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import './HomePage.css'
import pablo from '../../media/pablo.jpg'




export const HomePage = () => {
  return (
    <div>
         <nav className='hola'>
      <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Welcome to my portfolio, my name is Pablo. I'm studying the Associate Degree of Network Computer System Administration.

      </p>
      <hr />
      <p className="mb-0">
        I hope you like it
      </p>
    </Alert>
    </nav>
    <nav>
    <Button className='git' variant="primary" size="lg" href='https://github.com/PadillaDesarrollador/portfolio_lmsgi2023/tree/master'>
        Click here to see the code of this page
      </Button>
    </nav>
    <div className='yo'>
    <nav className='nombre'>
      <h3>Pablo Padilla</h3>
      <h4>( Developer / DevOps )</h4>
    </nav>
    <nav className='imagen'>
      <figure>
        <img src={pablo}/>
      </figure>
    </nav>

    </div>
    
    
    
    </div>
  )
}
