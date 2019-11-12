import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './LiftingStateUp';
import Main from './LSUPractice';
import WelcomeDialog from './CvsI';
import { Final, SingUpDialog, Second } from './CvsI';

function App() {
  return (
    <div>
      <Calculator />
      <Main />
      <WelcomeDialog />
      <Final />
      <SingUpDialog />
      <Second />
    </div>
  );
}

export default App;
