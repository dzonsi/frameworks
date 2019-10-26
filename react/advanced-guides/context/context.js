const ThemeContext = React.createContext("light");

class App extends React.Component {
	render() {
		return (
			<ThemeContext.Provider value="dark">
				<Toolbar />
			</ThemeContext.Provider>
		);
	}
}

function Toolbar(props) {
	return (
		<div>
			<ThemeButton />
		</div>
	);
}

class ThemeButton extends React.Component {
	static contextType = ThemeContext;
	render() {
		return <Button theme={this.context} />;
	}
}
// moze se koristiti i slanje konponenti umesto Context-a!