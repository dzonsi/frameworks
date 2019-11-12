import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { act } from 'react-dom/test-utils';
import Hooks from './Hooks';

let container;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});

it('can render and update a counter', () => {
	// test first render
	act(() => {
		ReactDOM.render(<Hooks />, container);
	});
	const button = container.querySelector("button");
	const label = container.querySelector("p");
	expect(label.textContent).toBe("You clicked 0 times");
	expect(document.title).toBe("You clicked 0 times");

	// test second render
	act(() => {
		button.dispatchEvent(new MouseEvent("click", {bubbles: true}));
	});
	expect(label.textContent).toBe("You clicked 1 times");
	expect(document.title).toBe("You clicked 1 times");
});
