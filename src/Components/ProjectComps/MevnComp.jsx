import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import './mevn.css'

const MevnComp = () => {
  return (
    <div>
      <h1 style={{ color: 'navy', fontFamily: 'Arial', textAlign: 'center', marginTop: '-165px', marginBottom: '20px' }}> MEVN </h1>
      <Container fluid className='con'>
        <Row>
          <Col sm={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '10rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Body>
                <Card.Title>Full Stack RPG</Card.Title>
                <Card.Text>
                  Simple RPG Built With MongoDB, Express, Vue, Node
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/MEVN-project-one" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MevnComp;