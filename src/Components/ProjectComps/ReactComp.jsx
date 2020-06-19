import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import './reactComp.css'


const ReactComp = () => {
  return (
    <div>
      <h1 style={{ color: 'navy', fontFamily: 'Arial', textAlign: 'center', marginTop: '-165px', marginBottom: '20px' }}>React</h1>
      <Container fluid='true' className='con' style={{ marginLeft: '110px' }}>
        <Row>
          <Col lg={true} >
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '12rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Body>
                <Card.Title>NC News Front-End</Card.Title>
                <Card.Text>
                  A project built over five days designed to showcase functionality
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/keir-betts-nc-news-fe" target='_blank'>Github</Card.Link>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://keir-betts-nc-news.netlify.app/" target='_blank'>Hosted</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '12rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }}>
              <Card.Body>
                <Card.Title>React Student Tracker</Card.Title>
                <Card.Text>
                  Made when I first began learning React. This project was
                  completed using pair programming
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/student-tracker" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={true}>
            <Card border="primary" bg='info' text='white' style={{ width: '18rem', height: '12rem', borderRadius: '50px 50px 50px 50px', textAlign: 'center', fontFamily: 'Arial' }} >
              <Card.Body>
                <Card.Title>React Videos</Card.Title>
                <Card.Text>
                  A React project built to search and watch Youtube with ease
    </Card.Text>
                <Card.Link style={{ fontFamily: 'Arial' }} href="https://github.com/keirbetts/react-vidoes" target='_blank'>Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div >

  );
};

export default ReactComp;