import React from 'react';
import './Projects.css'
import { Container, Row, Col, Button } from 'react-bootstrap'



const Projects = () => {
  return (
    <div className='projects'>
      <h1><strong>Projects</strong></h1>
      <h3>Select Technology To View Projects</h3>
      <br></br>
      <Container fluid='true'>
        <Row >
          <Col lg={2}  >
            <Button style={{ fontFamily: 'Arial', color: 'white' }} href='/projects/react' variant="info" size='lg'>React</Button>
          </Col>
          <Col lg={2}>
            <Button style={{ fontFamily: 'Arial', color: 'white' }} href='/projects/express' variant="info" size='lg'>Express</Button>
          </Col>
          <Col lg={2}>
            <Button style={{ fontFamily: 'Arial', color: 'white' }} href='/projects/python' variant="info" size='lg'>Python</Button>
          </Col>
          <Col lg={2}>
            <Button style={{ fontFamily: 'Arial', color: 'white' }} href='/projects/redux' variant="info" size='lg'>Redux</Button>
          </Col>
          <Col lg={2}>
            <Button style={{ fontFamily: 'Arial', color: 'white' }} href='/projects/mevn' variant="info" size='lg'>MEVN</Button>
          </Col>
          <Col lg={2}>
            <Button style={{ fontFamily: 'Arial', color: 'white' }} href='/projects/moments' variant="info" size='lg'>Team Project</Button>
          </Col>
        </Row>
      </Container>
    </div >

  );
};

export default Projects;