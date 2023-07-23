import axios from 'axios';
import React, { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/anonymous/register/', {
        username,
        password,
        email,
      });

      console.log(response.data); // Handle successful registration
    } catch (error) {
      console.error(error); // Handle registration error
    }
  };

  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  return (
    <div>
        <h1>Register</h1>
    <form onSubmit={handleSubmit}>
        <div>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleUsernameChange} />
      </div>

      <div>  
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      </div>

      <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Register</button>
    </form>

    
    </div>
  );
};

export default RegisterForm;

