import React from 'react';

class NumberIncrement extends React.Component {
	constructor(props) {
		super(props);
		this.state = { number: parseInt(this.props.number, 10) }
	}// ne mora parseInt ako se number binduje sa {0}
	// ako se salje kao string mora
	componentDidMount() {
		this.timer = setInterval(
			() => this.increment(),
			500
		);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	increment() {
		this.setState({
			number: this.state.number + 1
		});
	}
	render() {
		return (
			<div>
				<h2>Number will increment every second!</h2>
				<h2>{this.state.number}</h2>
			</div>
		)
	}
}

export default NumberIncrement;