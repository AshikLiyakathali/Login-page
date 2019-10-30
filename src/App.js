import React from 'react';

import './App.css';
import Register from './routes/register';
import Login from './routes/login';

function App() {
  return (
    <div> 
      <h1>Login</h1>
      <Register />
      <Login />
    </div>
  );
}

export default App;
