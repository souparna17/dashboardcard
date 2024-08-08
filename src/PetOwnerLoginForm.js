// src/PetOwnerLoginForm.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function PetOwnerLoginForm() {
  const [formData, setFormData] = useState({
    login_id: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/petowner-login', formData);
      if (response.data.success) {
        navigate('/pet-details');
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <Container>
      <h1 className="text-center">Pet Owner Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Login ID</Form.Label>
          <Form.Control
            type="number"
            name="login_id"
            value={formData.login_id}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default PetOwnerLoginForm;
