import React, { Component } from 'react';
import './ClassComponent.css';

class ClassComponent extends Component {
	render() {
		return (
			<div>
				<h1 className="third">Hello, from ClassComponent</h1>
				<h2 className="fourth">{this.props.sport}</h2>
			</div>
		)
	}
}

class ClassComponent2 extends Component {
	render() {
		return (
			<div className="fifth">
				<ClassComponent sport="Basketball" />
			</div>
		)
	}
}

export default ClassComponent;
export { ClassComponent2 };