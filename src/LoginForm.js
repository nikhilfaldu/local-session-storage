// LoginForm.js

import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle saving email and password to sessionStorage
  const handleSave = () => {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default LoginForm;
