import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
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
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Route path="/" exact render={(routeProps) => (
        <Home {...routeProps} {...route} />
      )} />
      <Route
        path="/about"
        render={() => (
          route.isLoggedIn ? (
            <About />
          ) : (
            <Redirect to="/login" />
          )
        )}
      />
      <Route
        path="/topics"
        render={() => (
          route.isLoggedIn ? (
            <Topics />
          ) : (
            <Redirect to="/login" />
          )
        )}
      />
      <Route path="/login" render={(routeProps) => (
        <Login {...routeProps} {...route} />
      )} />
    </Router>
  );
}

const route = {
  isLoggedIn: false,
  login: function() {
    route.isLoggedIn = true;
  },
  signout: function() {
    route.isLoggedIn = false;
  }
}

function changeStatus() {
  route.isLoggedIn = !route.isLoggedIn;
}

function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <p>You must be log in to se About and Topics</p>
      <p>Currently login status is: { route.isLoggedIn ? 'You are logged in!' : 'Please login to continue!' }</p>
    </div>
  );
}

function About() {
  return <h2>About</h2>
}

function Topics() {
  return <h2>Topics</h2>
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogged: this.props.isLoggedIn };

    this.login = this.login.bind(this);
    this.signout = this.signout.bind(this);
  }

  login = () => {
    changeStatus();
    this.setState({ isLogged: true });
  }

  signout = () => {
    this.props.signout();
    this.setState({ isLogged: false })
  }

  render() {
    return (
      <div>
        <h3>Please log in</h3>
        <button onClick={this.login}>Login</button>
        <button onClick={this.signout}>Signout</button>
        <br />
        { this.state.isLogged ? 'Thanks for login.' : 'Please log in.' }
      </div>
    )
  }
}

export default App;