import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/topics/" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home component</h2>;
}

function About() {
  return <h2>About component</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render ={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}

function Header() {
  return (
    <ul>
      <li>
        <NavLink to="/" activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about/" activeClassName="active">About</NavLink>
      </li>
      <li>
        <NavLink to="/topics/" activeClassName="active">Topics</NavLink>
      </li>
    </ul>
  )
}

export default App;
