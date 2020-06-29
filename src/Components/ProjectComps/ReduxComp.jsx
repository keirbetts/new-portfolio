import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import './redux.css'


const ReduxComp = () => {
  return (
    <div>
      <h1 style={{ color: 'navy', fontFamily: 'Arial', textAlign: 'center', marginTop: '-165px', marginBottom: '20px' }}> Redux </h1>
      <Container fluid className='con'>
        <Row>
          <Col sm={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Img variant='top' src='https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' />
              <Card.Body>
                <Card.Title>Redux Project One</Card.Title>
                <Card.Text>
                  My First Redux Project
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/Redux-first-steps" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReduxComp;