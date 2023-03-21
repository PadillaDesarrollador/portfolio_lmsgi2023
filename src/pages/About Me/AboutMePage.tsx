import React from 'react'
import { Alert, Button, Card, Figure, Table, Image } from 'react-bootstrap'
import './AboutMePage.css'
import { tecnologias } from '../../commons/TechList'


export const AboutMePage = () => {
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
    <nav className='me'>
        <Alert variant="danger" >
        <Alert.Heading>Me</Alert.Heading>
        <p>
        I like to discover new things and learn from them. For now I am 
        focused on web programming, although I would like to investigate cybersecurity, machine learning and other programming languages
        </p>
        </Alert>
        <h3> - Tech Stack</h3>
        <p>Those are technologies I have used and those I want to learn:</p>
    </nav>
    <nav className='tabla'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Logo</th>
          <th>Tech</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        {
          tecnologias.map ( (tecnologia) => (
            <tr>
              <td><Image className='logo'  src={tecnologia.logo} /></td>
              <td className='nombre'>{tecnologia.tech}</td>
              <td>{tecnologia.nivel}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    </nav>
    <nav className='mylastyears'>
      <h3> -  My last years</h3>
      <p>
        - Between 2020 and 2021 I studied the social bachelor at <a href="https://iescuravalera.es/">I.E.S Cura Valera</a>
      </p>
      <p>
      - In 2022 I started study History of art. I abandoned those studies
        - Now I' m focused studying my Associate Degree of Network Computer System Administration
      </p>
      <p>
      - Now I' m focused studying my Associate Degree of Network Computer System Administration
      </p>
    </nav>

    </div>
    

  )
}
