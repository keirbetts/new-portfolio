import React from 'react';
import './education.css'
import { Container, Row, Col } from 'react-bootstrap'

const Education = () => {
  return (
    <Container fluid className='con-top' >
      <h1 ><strong>Education</strong></h1>
      <Row>
        <Col className='dates' lg={5}><h4><strong>NorthCoders: October 2019-March 2020</strong></h4></Col>
        <Col className='info' lg={6}><strong>
          <ul style={{ listStyle: 'none' }}>
            <li>A developer pathway where I gained the skills required to be a full-stack developer.
            </li>
            <br></br>
            <li>Learned and utilised industry standards: pair programming and test driven development.</li>
            <br></br>
            <li>Worked in an agile environment.</li>
            <br></br>
            <li>Developed knowledge of the MVC framework, RESTful APIs, version control and relational databases</li>
          </ul>
        </strong></Col>
      </Row>
      <br></br>
      <br></br>
      <Row><Col className='dates2' lg={5}><h4><strong>Cardiff University: 2016-2019</strong></h4></Col>
        <Col className='info2' lg={6}><strong><ul style={{ listStyle: 'none' }}> <li>2:1 History BA hons.
          </li>
          <br></br>
          <li>Developed skills, in presentation, communication and analysis</li>
          <br></br>
          <li> Nurtured an ability to critically evaluate work.</li>
          <br></br>
          <li> Researched and produced a dissertation which focused on the impact of technological change in eighteenth-century Europe.</li>
          <br></br>
          <li> My studies saw me hone a natural problem-solving ability, alongside excellent oral and written communication skills</li></ul></strong></Col>
      </Row>
    </Container>
  );
};

export default Education;