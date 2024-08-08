// src/SignIn.js
import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/doctor-login');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Doctor Sign In</Card.Title>
          <Button variant="primary" onClick={handleSignIn}>Sign In</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignIn;
