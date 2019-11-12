import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleUpdateStateText =
			this.handleUpdateStateText.bind(this);
		this.handleUpdateStateStock =
			this.handleUpdateStateStock.bind(this);
	}
	handleUpdateStateText(e) {
		this.props.updateStateText(e.target.value);
	}
	handleUpdateStateStock(e) {
		this.props.updateStateStock(e.target.checked);
	}
	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;
		return (
			<form>
				<input
					type="text"
					placeholder="Search..."
					defaultValue={filterText}
					onChange={this.handleUpdateStateText}
				/>
				<label>
					<br />
					<input
						type="checkbox"
						defaultChecked={inStockOnly}
						onChange={this.handleUpdateStateStock}
					/> Only show products in stock
				</label>
			</form>
		)
	}
}

export default SearchBar;