import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
// ne izbacuje gresku da je logo definisan a ne koristi se
import './App.css';

function App() {
  const name = 'Josh Perez';
  return (
    <h1>Hello, {name}</h1>
  );
}

export default App;
