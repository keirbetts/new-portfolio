import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <main>
        <br></br>
        <br></br>
        <Container fluid>
          <Col>
            <Row lg={12} className='justify-content-center'>
              <h1><strong>Full Stack Developer</strong></h1>
            </Row>
            <Row className='justify-content-center'>
              <h3 lg={12}><strong> React | React Native | JavaScript |  NodeJS | Express | Python | HTML/CSS
                </strong>
              </h3>
            </Row>
          </Col>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Row className='justify-content-center' style={{ marginTop: '-100px', textAlign: 'center' }}>
            <Col sm={4} lg={2}>
              <Button style={{ borderRadius: '10px 10px 10px 10px' }} variant="warning" href='/projects'>Projects</Button></Col>
            <Col sm={4} lg={2}>
              <Button style={{ borderRadius: '10px 10px 10px 10px' }} variant="outline-primary" href='https://www.linkedin.com/in/keir-betts-201b55189/' target='_blank'>Linkedin</Button>
            </Col>
            <Col sm={4} lg={2}>
              <Button style={{ borderRadius: '10px 10px 10px 10px' }} variant="outline-primary" href='https://github.com/keirbetts' target='_blank'>Github</Button>
            </Col>
          </Row>
        </Container>
        {/* Github, Linkedin */}
      </main>
    </div>
  );
};

export default Home;