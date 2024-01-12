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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here
    // For example, you can log the form data to the console
    console.log('Form submitted:', formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      
      <label>
        Name:
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="error-message" id="name-error">{errors.name}</div>
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="error-message" id="email-error">{errors.email}</div>
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="error-message" id="password-error">{errors.password}</div>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RealTimeFeedbackForm;
