import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { IoIosMail, IoIosCall, IoLogoLinkedin } from 'react-icons/io'
import './contact.css'


const Contact = () => {
  return (
    <Container fluid style={{ marginTop: '-190px' }}>
      <div><h1 style={{ marginBottom: '30px', style: 'Arial' }}><strong>Contact Me</strong></h1></div>
      <Row>
        <Col className='tag' sm={true}><h2 style={{ marginLeft: '300px' }}><IoIosMail className='icon' /><strong>Email</strong></h2></Col>
        <Col><h2 style={{ color: 'black', fontFamily: 'Arial' }}>keirjbetts@gmail.com</h2></Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col className='tag' sm={true}><h2 style={{ marginLeft: '300px' }}><IoIosCall className='icon' /><strong>Phone</strong></h2></Col>
        <Col><h2 style={{ color: 'black', fontFamily: 'Arial' }}>07393185075</h2></Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col className='tag' sm={true}><h2 style={{ marginLeft: '300px' }}><IoLogoLinkedin className='icon' /><strong>Linkedin</strong></h2></Col>
        <Col><h2 style={{ color: 'black', fontFamily: 'Arial' }}>@keirbetts</h2></Col>
      </Row>

    </Container>
  );
};

export default Contact;