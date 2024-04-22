 
import React, { useState } from 'react';
import axios from 'axios';
import './index.css';  
import Cookies from 'js-cookie';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ecommerce-app-1-kaio.onrender.com/users/login', { email, password });
      if(response.status === 200 && response.data.token){
        Cookies.set('jwt_token', response.data.token, { expires: 90 })
        navigate('/home')
      }
      setMessage(response.data.message);
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p>Don't have an account? <Link to="/registerForm">Sign Up</Link></p>
    </div>
  );
};

export default LoginForm;
