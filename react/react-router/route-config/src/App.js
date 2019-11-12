import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/tacos">Tacos</Link>
        </li>
        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
      </ul>

      <Route path="/tacos" component={Tacos} />
      <Route path="/sandwiches" component={Sandwiches} />
    </Router>
  );
}

function Tacos({ match }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to={`${match.url}/bus`}>Bus</Link>
        </li>
        <li>
          <Link to={`${match.url}/cart`}>Cart</Link>
        </li>
      </ul>

      <Route path={`${match.url}/bus`} component={Bus} />
      <Route path={`${match.url}/cart`} component={Cart} />
    </div>
  );
}

function Sandwiches({ match }) {
  return <h2>Sandwiches</h2>;
}

function Bus() {
  return <h2>Bus</h2>
}

function Cart() {
  return <h2>Cart</h2>
}

export default App;
