import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Topics({ match}) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-vs-state`}>Props vs. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/rendering`} component={Rendering} />
      <Route path={`${match.path}/components`} component={Components} />
      <Route path={`${match.path}/props-vs-state`} component={Pvs} />
      <Route
        exact
        path={match.path}
        render={() => <h2>Please select a topic.</h2>}
      />

    </div>
  );
}

function Rendering() {
  return <h2>Rendering</h2>
}

function Components() {
  return <h2>Components</h2>
}

function Pvs() {
  return <h2>Props vs. State</h2>
}

export default App;
