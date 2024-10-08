// src/components/Register.js
import React, { useState } from 'react';
import { registerStudent } from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    levelId: '',
    nationalID: '',
    phoneNumber: '',
    parentPhoneNumber: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerStudent(formData);
      alert('Check your email for the OTP!');
      navigate('/verify-otp');
      // Redirect to Verify OTP page
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form Fields */}
      <input name="firstName" onChange={handleChange} placeholder="First Name" />
      <input name="lastName" onChange={handleChange} placeholder="Last Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <input name="levelId" onChange={handleChange} placeholder="Level ID" />
      <input name="nationalID" onChange={handleChange} placeholder="National ID" />
      <input name="phoneNumber" onChange={handleChange} placeholder="Phone Number" />
      <input name="parentPhoneNumber" onChange={handleChange} placeholder="Parent Phone Number" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
