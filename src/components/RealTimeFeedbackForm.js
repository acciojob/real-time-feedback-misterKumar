import React, { useState } from 'react';

const RealTimeFeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = '';

    switch (fieldName) {
      case 'name':
        errorMessage = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        // Basic email format validation
        errorMessage = /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address';
        break;
      case 'password':
        errorMessage = value.length < 6 ? 'Password must be at least 6 characters long' : '';
        break;
      default:
        break;
    }

    setErrors({ ...errors, [fieldName]: errorMessage });
  };

  return (
    <div>
      
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="error-message">{errors.name}</div>
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="error-message">{errors.email}</div>
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="error-message">{errors.password}</div>
      </label>
    </div>
  );
};

export default RealTimeFeedbackForm;
