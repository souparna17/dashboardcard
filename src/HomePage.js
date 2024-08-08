// src/HomePage.js
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/doctor-details');
  };

  const handleLoginClick = () => {
    navigate('/doctor-login');
  };

  const handlePetOwnerSignInClick = () => {
    navigate('/petowner-details');
  };

  const handlePetOwnerLoginClick = () => {
    navigate('/petowner-login');
  };

  return (
    <Container>
      <h1 className="text-center my-4">Dashboard</h1>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Body>
              <Card.Title>Doctor Sign In</Card.Title>
              <Button variant="primary" onClick={handleSignInClick}>Sign In</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Body>
              <Card.Title>Doctor Login</Card.Title>
              <Button variant="primary" onClick={handleLoginClick}>Login</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Body>
              <Card.Title>Pet Owner Sign In</Card.Title>
              <Button variant="primary" onClick={handlePetOwnerSignInClick}>Sign In</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Body>
              <Card.Title>Pet Owner Login</Card.Title>
              <Button variant="primary" onClick={handlePetOwnerLoginClick}>Login</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
