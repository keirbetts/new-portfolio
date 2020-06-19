import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import './py.css'


const PyComp = () => {
  return (
    <div>
      <h1 style={{ color: 'navy', fontFamily: 'Arial', textAlign: 'center', marginTop: '-165px', marginBottom: '20px' }}>Python</h1>
      <Container fluid className='con2'>
        <Row>
          <Col lg={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '12rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Body>
                <Card.Title>Python Space Invaders</Card.Title>
                <Card.Text>
                  A project built over five days designed to showcase functionality
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/python-coronavirus-space-invaders" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '12rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Body>
                <Card.Title>Python Pong Game</Card.Title>
                <Card.Text>
                  Made when I first began learning React. This project was
                  completed using pair programming
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/python-pong-game" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '12rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Body>
                <Card.Title>Automated Web Search</Card.Title>
                <Card.Text>
                  A React project built to search and watch Youtube with ease
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/python-web-search" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PyComp;