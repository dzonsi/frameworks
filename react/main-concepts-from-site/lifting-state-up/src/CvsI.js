import React from 'react';

function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' +
		props.color}>
			{props.children}
		</div>
	)
}

function WelcomeDialog() {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
		</FancyBorder>
	)
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Contacts(props) {
	return (<div className="Contacts"></div>);
}

function Chat(props) {
	return (<div className="Chat"></div>);
}

function Final() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

function Dialog(props) {
	return (
		<FancyBorder color="tomato">
			<h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
		</FancyBorder>
	);
}

class SingUpDialog extends React.Component {
	constructor(props) {
		super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
	}
	handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
  render() {
  	return (
  		<Dialog
  			title="Mars Exploration Program"
  			message="How should we refer to you?"
  		>
  			<input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
  		</Dialog>
  	);
  }
}

function First(props) {
	return (
		<div className={props.color}>
			{props.children}
		</div>
	)
}

function Second(props) {
	return (
		<div>
			<First color="main">
				<div className="back"></div>
			</First>
		</div>
	)
}

export default WelcomeDialog;
export { Final, SingUpDialog, Second };