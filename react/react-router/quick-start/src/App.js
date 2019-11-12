import React from 'react';
import { BrowserRouter as Router, Route, Link } from'react-router-dom';
import './App.css';
import ImportComponent from './custom';

function Index() {
  return <h2>Home component</h2>
}

function About() {
  return <h2>About component</h2>
}

function Users() {
  return <h2>Users component</h2>
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/import">Import</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/import/" component={ImportComponent} />
      </div>
    </Router>
  );
}

export default AppRouter;
