import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './FunctionComponent';
import { MultiWelcome } from './FunctionComponent';
import ClassComponent from './ClassComponent';
import { ClassComponent2 } from "./ClassComponent";
import Clock from "./StateComponent";
import NumberIncrement from './PracticeStateComponent';
import Greeting from './ConditionalRenderingGreeting';
import LoginControl from './CRElementVariables';
import { Mailbox } from './CRElementVariables';
import ListAndKeys from './ListsAndKeys';
import { Blog as BlogOtherName } from './ListsAndKeys';
// HandlingEvents kao HandlingEventsPractice
// import dozvoljava odabir imena
// export default bez as
// export mora sa as
import HandlingEventsPractice from './HandlingEvents';
import NameForm from './Forms';
import { EssayForm, FlavorForm } from './Forms';
import Reservation from './HandlingMultipleInputs';
import Calculator from './LiftingStateUp';
import * as serviceWorker from './serviceWorker';

const player = 'Aaron Rodgers';
const element = <h1>Hello, {player}</h1>

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
}

const element2 = (
	<h1>
		Hello, { formatName(user)}!
	</h1>
);

function getGreeting(user) {
	if( typeof user === Object) {
		return <h1>Hello, {formatName(user)}!</h1>;
	}
	return <h2>Hello, Stranger.</h2>;
}

const element3 = (
	getGreeting(player)
)
// zasto nece da radi ako pomerim sliku iz foldera???
const url = "img_5terre.jpg";
const alt = url.substring(4, 10);
const imgStyle = {
	width: "400px",
	height: "300px",
	innerWidth: "100%"
}

const element4 = (
	<div style={{width: imgStyle.width, height: imgStyle.height}}>
		<img style={{width: imgStyle.innerWidth}} src={url} alt={alt} />
	</div>
);

const element5 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
// tick renderuje sa ReactDOM.render()
function tick() {
	const element6 = (
		<div>
			<h1>Ticking clock</h1>
			<h2>It is {new Date().toLocaleTimeString()}</h2>
		</div>
	)
	ReactDOM.render(
		element6,
		document.getElementById('root11')
	);
}
setInterval(tick, 1000);

const messages = ['React', "Re: React", "Re:Re: React"];

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'},
  {id: 3, title: "React", content: "React, React!"}
];


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(element, document.getElementById('root2'));
ReactDOM.render(element2, document.getElementById('root3'));
ReactDOM.render(element3, document.getElementById('root4'));
ReactDOM.render(element4, document.getElementById('root5'));
ReactDOM.render(element5, document.getElementById('root6'));
ReactDOM.render(<Welcome name="Name from props!" />, document.getElementById('root7'));
ReactDOM.render(<MultiWelcome/>, document.getElementById('root8'));
ReactDOM.render(<ClassComponent sport="American football"/>, document.getElementById('root9'));
ReactDOM.render(<ClassComponent2 sport="basketball"/>, document.getElementById('root10'));
ReactDOM.render(<Clock />, document.getElementById('root12'));
ReactDOM.render(<NumberIncrement number="0" />, document.getElementById('root13'));
ReactDOM.render(<HandlingEventsPractice />, document.getElementById('root14'));
ReactDOM.render(<Greeting isLoggedIn ={false}/>, document.getElementById('root15'));
ReactDOM.render(<LoginControl/>, document.getElementById('root16'));
ReactDOM.render(<Mailbox unreadMessages={messages}/>, document.getElementById('root17'));
ReactDOM.render(<ListAndKeys />, document.getElementById('root18'));
ReactDOM.render(<BlogOtherName posts={posts} />, document.getElementById('root19'));
ReactDOM.render(<NameForm />, document.getElementById('root20'));
ReactDOM.render(<EssayForm />, document.getElementById('root21'));
ReactDOM.render(<FlavorForm />, document.getElementById('root22'));
ReactDOM.render(<Reservation />, document.getElementById('root23'));
ReactDOM.render(<Calculator />, document.getElementById('root23'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
