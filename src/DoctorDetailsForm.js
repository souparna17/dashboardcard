// src/DoctorDetailsForm.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function DoctorDetailsForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mobile_number: '',
    gender: '',
    dob: '',
    graduation: '',
    post_graduation: '',
    speciality: '',
    fees: '',
    area_id: '',
    login_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/doctors', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <Container>
      <h1 className="text-center">Doctor Details Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Graduation</Form.Label>
          <Form.Control
            type="text"
            name="graduation"
            value={formData.graduation}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Post Graduation</Form.Label>
          <Form.Control
            type="text"
            name="post_graduation"
            value={formData.post_graduation}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Speciality</Form.Label>
          <Form.Control
            type="text"
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fees</Form.Label>
          <Form.Control
            type="number"
            name="fees"
            value={formData.fees}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Area ID</Form.Label>
          <Form.Control
            type="number"
            name="area_id"
            value={formData.area_id}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Login ID</Form.Label>
          <Form.Control
            type="number"
            name="login_id"
            value={formData.login_id}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default DoctorDetailsForm;
