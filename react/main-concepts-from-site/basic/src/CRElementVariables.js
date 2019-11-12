import React from 'react';

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	)
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting(props) {
	return <h1>Welcome Back!</h1>
}

class GuestGreeting extends React.Component {
	render() {
		return <h1>Please sign up.</h1>
	}
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn) {
		return (
			<UserGreeting />
		)
	}
	return (
		<GuestGreeting />
	)
}

function WarningBanner(props) {
	if(!props.warn) {
		return null;
	}

	return (
    <div className="warning">
      Warning!
    </div>
  );
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
   	this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if(isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
				<div>
					The value of isLoggedIn is&nbsp;
					<b>
						{ isLoggedIn ? "true" : "false" }
					</b>
				</div>
				<div>
					<WarningBanner warn={isLoggedIn} />
				</div>
			</div>
		)
	}
}

class Mailbox extends React.Component {
	constructor(props) {
		super(props);
		this.unreadMessages = props.unreadMessages;
	}
	render() {
		return (
			<div>
				<h1>Hello!</h1>
				{
					this.unreadMessages.length > 0 &&
					<h2>
						You have {this.unreadMessages.length} unread messages.
					</h2>
				}
			</div>
		);
	}
}
export default LoginControl;
export { Mailbox };
