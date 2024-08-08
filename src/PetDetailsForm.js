// src/PetDetailsForm.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function PetDetailsForm() {
  const [formData, setFormData] = useState({
    pet_name: '',
    pet_breed: '',
    pet_gender: '',
    pet_weight: '',
    pet_age: '',
    petowner_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/pets', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <Container>
      <h1 className="text-center">Pet Details Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Pet Name</Form.Label>
          <Form.Control
            type="text"
            name="pet_name"
            value={formData.pet_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pet Breed</Form.Label>
          <Form.Control
            type="text"
            name="pet_breed"
            value={formData.pet_breed}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pet Gender</Form.Label>
          <Form.Control
            type="text"
            name="pet_gender"
            value={formData.pet_gender}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pet Weight</Form.Label>
          <Form.Control
            type="number"
            name="pet_weight"
            value={formData.pet_weight}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pet Age</Form.Label>
          <Form.Control
            type="number"
            name="pet_age"
            value={formData.pet_age}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pet Owner ID</Form.Label>
          <Form.Control
            type="number"
            name="petowner_id"
            value={formData.petowner_id}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default PetDetailsForm;
