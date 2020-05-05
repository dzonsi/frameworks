import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ThemeContext, themes, UserContext} from './theme-context';
import ThemedButton from './themed-button';

// an intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  )
}

function ProfilePage(props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <div>
              <h2 style={{color: theme.foreground, backgroundColor: theme.background}}>{user.name}</h2>
            </div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark
          ? themes.light
          : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton>Default dark theme, doesn't have change theme.</ThemedButton>
        </div>
        <ThemeContext.Provider value={this.state.theme}>
          <UserContext.Provider value={{name: 'user'}}>
            <ProfilePage />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App;
