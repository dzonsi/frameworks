import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link exact to="/">Form</Link>
          </li>
          <li>
            <Link to="/one">One</Link>
          </li>
          <li>
            <Link to="/two">Two</Link>
          </li>
        </ul>

        <Route path="/" exact component={Form} />
        <Route path="/one" render={() => <h2>One</h2>} />
        <Route path="/two" render={() => <h2>Two</h2>} />
      </div>
    </Router>
  );
}

class Form extends Component {
  constructor() {
    super();
    this.state = { isBlocking: false };
  }
  render() {
    let {isBlocking} = this.state;
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          this.setState({ isBlocking: false });
        }}
      >
        <Prompt
          when={isBlocking}
          mesage={location =>
            `Are you sure you want to go to ${location.pahtname}`
          }
        />

        <p>
          Blocking:
          {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input
            type="text"
            size="50"
            placeholder="type something to block transitions"
            onChange={event => {
              this.setState({
                isBlocking: event.target.value.length > 0
              });
            }}
          />
        </p>

        <p>
          <button type="submita">Submit to stop blocking</button>
        </p>
      </form>
    )
  }
}

export default App;
