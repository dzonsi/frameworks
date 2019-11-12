import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		const rows =[];
		let lastCategory = null;

		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		this.props.products.forEach((product) => {
			if(product.name.indexOf(filterText) === -1) {
				return;
			}
			if(inStockOnly && !product.stocked) {
				return;
			}
			if(product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category}
					/>
				);
			}
			rows.push(
				<ProductRow
					product={product}
					key={product.name}
				/>
			);
			lastCategory = product.category;
		});

		return (
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Price</td>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

export default ProductTable;