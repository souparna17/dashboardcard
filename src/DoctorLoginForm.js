// src/DoctorLoginForm.js
import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function DoctorLoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      if (response.data.success) {
        navigate('/doctor-details');
      } else {
        setError('Invalid login credentials');
      }
    } catch (error) {
      setError('There was an error logging in');
    }
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    alert('Forgot password logic not implemented');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} style={{ width: '18rem' }}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3">
            <h2>Doctor Login</h2>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="link" onClick={handleForgotPassword}>
          Forgot Password?
        </Button>
      </Form>
    </Container>
  );
}

export default DoctorLoginForm;
