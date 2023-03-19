import React from 'react'
import { Alert, Button, Card, Figure } from 'react-bootstrap'

export const AboutMePage = () => {
  return (
    <div>
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
    <nav className='foto'>
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4D03AQHa_bYsfXgZDQ/profile-displayphoto-shrink_100_100/0/1671643899815?e=1684368000&v=beta&t=NldKY3DBOg3DZkqsArD20rM7fSoWws_wMM_K8OkHkBo" />
      <Card.Body>
        <Card.Title>This is me</Card.Title>
        <Card.Text>
          I studied the social-artistic bachelor on I.E.S Cura Valera
        </Card.Text>
        <Button href='https://iescuravalera.es/' variant="primary">Go Cura Valera page</Button>
      </Card.Body>
    </Card>
    </nav>
    </div>

  )
}
