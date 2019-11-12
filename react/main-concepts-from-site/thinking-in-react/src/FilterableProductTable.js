import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: "",
			inStockOnly: false
		}
		this.updateStateText=
			this.updateStateText.bind(this);
		this.updateStateStock=
			this.updateStateStock.bind(this);
	}
	updateStateText(text) {
		this.setState({filterText: text});
	}
	updateStateStock(inStockOnly) {
		this.setState({inStockOnly: inStockOnly});
	}
	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					updateStateText={this.updateStateText}
					updateStateStock={this.updateStateStock}
				/>
				<ProductTable
					products={this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>
		);
	}
}

export default FilterProductTable;