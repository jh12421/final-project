import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Welcome to My React Project</h1>
          <p>This is the home page where you can learn more about what we do.</p>
          <Button variant="primary" className="m-2">Get Started</Button>
          <Button variant="outline-secondary" className="m-2">Learn More</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md="4">
          <h3>Feature 1</h3>
          <p>Brief description of feature 1.</p>
        </Col>
        <Col md="4">
          <h3>Feature 2</h3>
          <p>Brief description of feature 2.</p>
        </Col>
        <Col md="4">
          <h3>Feature 3</h3>
          <p>Brief description of feature 3.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
