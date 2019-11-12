import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/zilloq-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/yahoo">Yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">Modus Create</Link>
        </li>
      </ul>

      <Route path="/:id" component={Id} />
      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
    </Router>
  );
}

function Id({ match }) {
  return (
    <h2>{`ID: ${match.params.id}`}</h2>
  )
}

function ComponentWithRegex({ match }) {
  return (
    <div>
      <h2>Only asc/desc are allowed: {match.params.direction}</h2>
    </div>
  )
}

export default App;
