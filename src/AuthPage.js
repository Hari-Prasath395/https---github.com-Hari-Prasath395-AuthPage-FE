// AuthPage.js
import React, { useState } from 'react';
import AuthService from './AuthService';

const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const data = await AuthService.login(username, password);
      console.log('Login success:', data);
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSignup = async () => {
    try {
      const data = await AuthService.signup(username, password);
      console.log('Signup success:', data);
      // Handle successful signup (e.g., redirect to another page)
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Authentication Page</h1>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default AuthPage;
