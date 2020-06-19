import React from 'react';
import './techstack.css'
import { Container, Col, Row } from 'react-bootstrap'


const Techstack = () => {
  return (
    <Container className='container'  >
      <Col>
        <Row >
          <h1><strong>Techstack</strong></h1></Row>
        <Row>JavaScript | NodeJS | Python(wk) | Express</Row>
        <br></br>
        <Row>NPM | HTML | CSS | React | React Native</Row>
        <br></br>
        <Row>React Router | Reach Router  | Redux(wk)</Row>
        <br></br>
        <Row>PSQL | Axios | Knex | Github | Bootstrap</Row>
        <br></br>
        <Row>AWS(wk Lambda | Amplify | Cognito | API Gateway)</Row>
        <br></br>
        <Row>Mocha | Chai | Jest | Supertest</Row>
      </Col>
    </Container >
  );
};


export default Techstack;