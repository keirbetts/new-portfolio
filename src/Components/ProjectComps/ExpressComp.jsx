import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import './ExpressComp.css'

//Finish styling so responsicve behaviour is more desirable


const ExpressComp = () => {
  return (
    <div>
      <h1 style={{ color: 'navy', fontFamily: 'Arial', textAlign: 'center', marginTop: '-165px', marginBottom: '20px' }}> Express </h1>
      <Container fluid className='con'>
        <Row>
          <Col sm={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '10rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Body>
                <Card.Title>NC News Back-End</Card.Title>
                <Card.Text>
                  An Express Back-end Built to serve the React Front-End
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/keir-betts-nc-news-be" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExpressComp;