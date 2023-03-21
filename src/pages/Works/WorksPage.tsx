import React from 'react'
import { Alert, Card } from 'react-bootstrap'
import caronte from '../../media/caronte.png'
import hd from '../../media/hd.png'
import './WorksPage.css'


export const WorksPage = () => {
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
    <h2 className='mensaje'>Those are class projects and things I 've made</h2>
    <nav className='cards'>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={caronte} />
      <Card.Body>
        <Card.Title>Caronte Sistemas</Card.Title>
        <Card.Text>
          This was my first attempt to make a web page. Made with HTML and CSS
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={hd} />
      <Card.Body>
        <Card.Title>Hidrodiseño</Card.Title>
        <Card.Text>
          This is one of my last projects, is a copy of a web page, not finished yet. Made with React
        </Card.Text>
      </Card.Body>
    </Card>
    </nav>
    <h5 className='now'>Now I'm focused on new technologies, mostly interested on learn linux and cybersecurity  </h5>

    
    </div>

  )
}
