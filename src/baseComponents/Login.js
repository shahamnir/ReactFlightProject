import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/anonymous/login/', {
        username,
        password,
      });

      navigate("/flights")

      // Handle successful login (e.g., store token, redirect to dashboard)
      console.log(response.data);
    } catch (error) {
      // Handle login error (e.g., display error message)
      setError('Invalid username or password');
    }
  };

  return (
    <>
    <h1>Login</h1>
    <div className='form-card'>
    <form onSubmit={handleSubmit}>
      
      {error && <div>{error}</div>}
      <div className='form-group'>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
    
    {/* Link to the registration page */}
    <a href="/sign-up">Don't have an acount? Register here</a>

    {/* Display error message */}
    {error &&<div>
            <div>{error}</div>
        </div>}
    </div>
    </>
  );
};

export default LoginForm;
