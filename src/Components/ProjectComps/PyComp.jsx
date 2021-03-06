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
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '28rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Img variant='top' src='https://cdn.clipart.email/bae8bcf9673ca907cdd470bfd973940d_python-logo-clipart-transparent-background-png-download-full-_982-982.png' />
              <Card.Body>
                <Card.Title>Python Space Invaders</Card.Title>
                <Card.Text>
                  Space Invaders With A Topical Twist
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/python-coronavirus-space-invaders" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '28rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Img variant='top' src='https://cdn.clipart.email/bae8bcf9673ca907cdd470bfd973940d_python-logo-clipart-transparent-background-png-download-full-_982-982.png' />
              <Card.Body>
                <Card.Title>Python Pong Game</Card.Title>
                <Card.Text>
                  Retro Pong Game built with Python
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/python-pong-game" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '28rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Img variant='top' src='https://cdn.clipart.email/bae8bcf9673ca907cdd470bfd973940d_python-logo-clipart-transparent-background-png-download-full-_982-982.png' />
              <Card.Body>
                <Card.Title>Automated Web Search</Card.Title>
                <Card.Text>
                  Runs an Automated Google Seach using Python
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