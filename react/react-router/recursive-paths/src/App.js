import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 5] },
  { id: 1, name: "Sean", friends: [0, 3, 4] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2, 4] },
  { id: 4, name: "Aaron", friends: [1, 3, 5] },
  { id: 5, name: "John", friends: [0, 2, 3] }
];

function find(id) {
  return PEEPS.find(p => p.id == id);
}

function App() {
  return (
    <Router>
      <Person match={{ params: { id: 0}, url: "" }} />
    </Router>
  )
}

function Person({ match }) {
  let person = find(match.params.id);

  return (
    <div>
      <h3>
        {person.name}
        's Friends
      </h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  );
}

export default App;
