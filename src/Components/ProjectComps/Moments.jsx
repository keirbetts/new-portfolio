import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import './ExpressComp.css'
import cam from '../../camera.jpg'

const Moments = () => {
  return (
    <div>
      <h1 style={{ color: 'navy', fontFamily: 'Arial', textAlign: 'center', marginTop: '-165px', marginBottom: '20px' }}> Moments Team Project </h1>
      <Container fluid className='con'>
        <Row>
          <Col sm={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: 'auto', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Img variant='top' src={cam} style={{ borderRadius: '50px 50px 0px 0px' }} />
              <Card.Body>
                <Card.Title>Moments Photo App</Card.Title>
                <Card.Text>
                  An app built over 8 days as a team of 6. Detailed explanation on Github
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

export default Moments;