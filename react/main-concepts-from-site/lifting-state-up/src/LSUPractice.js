import React from 'react';

const text = {
	budget: {
		label: "Enter your budget:",
		id: "budget"
	},
	price: {
		label: "Enter phone price:",
		id: "price"
	}
}

function Phones(props) {
	if(props.numberOfPhones === 0) {
		return (
			<h2>You don't have enough money to buy a phone!</h2>
		)
	}
	return (
		<h2>
			You can by {props.numberOfPhones} {
				props.numberOfPhones === 1 ?
				"phone!" : "phones!"}
		</h2>
	)
}
// parseInt
// parseFloat
function calculate(budget, priceOfPhone) {
	const b = parseInt(budget);
	const p = parseInt(priceOfPhone);
	if(Number.isNaN(b) || Number.isNaN(p)) {
		return 0;
	}
	return Math.floor(budget / priceOfPhone)
}
class Numbers extends React.Component {
	constructor(props) {
		super(props);
		this.change= this.change.bind(this);
	}
	change(e) {
		this.props.onChange(e.target.value);
	}
	render() {
		const id = this.props.id;
		const label = this.props.label;
		return (
			<div>
				<label htmlFor={id}>{label}</label>
				<input
					type="number"
					id={id}
					onChange={this.change}
				/>
			</div>
		)
	}
}



class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfPhones: 0,
			price: null,
			budget: null
		}
		this.updatePrice = this.updatePrice.bind(this);
		this.updateBudget = this.updateBudget.bind(this);
	}
	updatePrice(price) {
		this.setState({
			price: price,
			numberOfPhones: calculate(this.state.budget, price)
		});
	}
	updateBudget(budget) {
		this.setState({
			budget: budget,
			numberOfPhones: calculate(budget, this.state.price)
		});
	}
	render() {
		const numberOfPhones = this.state.numberOfPhones;
		return (
			<div>
				<Numbers
					label={text.price.label}
					id={text.price.id}
					onChange={this.updatePrice}
				/>
				<Numbers
					label={text.budget.label}
					id={text.budget.id}
					onChange={this.updateBudget}
				/>
				<Phones numberOfPhones={numberOfPhones} />
			</div>
		)
	}
}

export default Main;