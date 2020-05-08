import React, { useState } from 'react';
import './App.css';

import {
  Transition,
  CSSTransition,
  SwitchTransition,
  TransitionGroup
} from 'react-transition-group';

const duration = 500;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms linear`,
  opacity: 0,
  transform: 'scale(0)',
}
const transitionStyles = {
  entering: { opacity: 1, transform: 'scale(1)' },
  entered:  { opacity: 1, transform: 'scale(1)' },
  exiting:  { opacity: 0, transform: 'scale(0)' },
  exited:  { opacity: 0, transform: 'scale(0)' },
};

const Fade = ({ in: inProp, onEnter }) => (
  <Transition in={inProp} timeout={duration} onEnter={onEnter}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade & scale Transition!
      </div>
    )}
  </Transition>
);

function CSST() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
    {
      showButton && (
        <button onClick={() => setShowMessage(true)}>Show Message</button>
      )
    }
    <CSSTransition
      in={showMessage}
      timeout={300}
      classNames="alert"
      unmountOnExit
      onEnter={() => setShowButton(false)}
      onExited={() => setShowButton(true)}
    >
      <div>
        <h2>Message</h2>
        <p>Message text...</p>
        <button onClick={() => setShowMessage(false)}>Close</button>
      </div>
    </CSSTransition>
    </div>
  )
}

const modes = ['out-in', 'in-out'];
function Switch() {
  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(true);

  return (
    <React.Fragment>
    <form>
      Mode: <br/>
      {modes.map(m => {
        return (
          <label key={m}> {m}
            <input
              type="checkbox"
              name="mode"
              checked={m === mode}
              value={m}
              onChange={event => {
              setMode(event.target.value);
              }}
            />
          </label>
        )
      })}
    </form>
    <div className="container">
      <SwitchTransition mode={mode}>
        <CSSTransition
          key={state}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <div>
            <button className="btn" onClick={() => setState(state => !state)}>
              {state ? "Hello, world!" : "Goodbye, world!"}
            </button>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
    </React.Fragment>
  )
}

function TodoList() {
  const [items, setItems] = useState([
    { id: 0, text: 'Buy eggs' },
    { id: 1, text: 'Pay bills' },
    { id: 2, text: 'Invite friends over' },
    { id: 3, text: 'Fix the TV' },
  ]);
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>TodoList:</h2>
      <div style={{ marginBottom: '1rem' }}>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={500}
              classNames="item"
            >
              <div className="item">
                <button
                  className="round"
                  onClick={() =>
                    setItems(items =>
                      items.filter(item => item.id !== id)
                    )
                  }
                >
                  &times;
                </button>
                <span>{text}</span>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <button
        onClick={() => {
          const text = prompt('Enter some text');
          if (text) {
            setItems(items => [
              ...items,
              { id: items.length, text },
            ]);
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
}

function App() {
  const [animate, setAnimate] = useState(false);

  var onEnter = (node, isAppearing) => {
    console.log('onEnter');
  }

  return (
    <div className="App">
      <Fade in={animate} onEnter={onEnter}></Fade>
      <button onClick={() => setAnimate(!animate)}>
        Click to Enter
      </button>
      <CSST />
      <Switch />
      <TodoList />
    </div>
  );
}

export default App;
