 

import React, { useState } from 'react';
import axios from 'axios';
import './index.css';  
import { useNavigate } from 'react-router-dom';
 
const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [message, setMessage] = useState('');

   const navigate = useNavigate()


  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    if (!termsAgreed) {
      setMessage('Please agree to the terms of service');
      return;
    }
    try {
      const response = await axios.post('https://ecommerce-app-1-kaio.onrender.com/users/register', { 
        username, 
        password, 
        fullName, 
        email 
      });

       console.log(response.data)
      if(response.data){
        navigate('/login')
      }
        setUsername("");
        setPassword("")
        setConfirmPassword('')
        setFullName('')
        setEmail("")
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="register-form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="termsAgreed"
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
          />
          <label htmlFor="termsAgreed">I agree to the terms of service</label>
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RegisterForm;
