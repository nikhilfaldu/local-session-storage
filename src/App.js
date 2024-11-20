// App.js

import React from 'react';
import './App.css';
import Counter from './Counter.js';
import LoginForm from './LoginForm.js';
import logo from "./logo3.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo" />
      <div className="row">
        {/* First Partition */}
        <div className="partition">
          <h3 className="partition-title1">Persistent Counter (LocalStorage)</h3>
          <div className="counter">
            <Counter /> {/* Counter component */}
          </div>
        </div>

        {/* Second Partition */}
        <div className="partition">
          <h3 className="partition-title2">Login Form (SessionStorage)</h3>
          <div className="login-form">
            <LoginForm /> {/* Login form component */}
          </div>
        </div>
      </div>
      <div className="name">	&#169;&nbsp;Developed By Nikhil Faldu</div>
    </div>
  );
}

export default App;
