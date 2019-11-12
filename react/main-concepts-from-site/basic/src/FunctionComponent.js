import React from 'react';
import './FunctionComponent.css';

function Welcome(props) {
	const fullName = "John Doe";
	return (
		<div>
			<h1 className="first">Hello, {fullName}</h1>
			<h2 className="second">Hello, {props.name}</h2>
		</div>
	)
}

function NewWelcome(props) {
	return <h2 className="second">Hello, {props.name}</h2>
}

function MultiWelcome(props) {
	return (
		<div>
			<NewWelcome name="Sara" />
      <Welcome name="Cahal" />
      <NewWelcome name="Edite" />
		</div>
	)
}
export default Welcome;
export { MultiWelcome };