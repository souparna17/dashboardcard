// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DoctorDetailsForm from './DoctorDetailsForm';
import DoctorLoginForm from './DoctorLoginForm';
import PetOwnerDetailsForm from './PetOwnerDetailsForm';
import PetOwnerLoginForm from './PetOwnerLoginForm';
import PetDetailsForm from './PetDetailsForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor-details" element={<DoctorDetailsForm />} />
        <Route path="/doctor-login" element={<DoctorLoginForm />} />
        <Route path="/petowner-details" element={<PetOwnerDetailsForm />} />
        <Route path="/petowner-login" element={<PetOwnerLoginForm />} />
        <Route path="/pet-details" element={<PetDetailsForm />} />
      </Routes>
    </Router>
  );
}

export default App;
