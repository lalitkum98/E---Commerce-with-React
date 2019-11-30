import React, {Component} from "react";
import * as R from 'ramda';
import {ProductView} from "../presentational/ProductView";

class ProductList extends Component {
	constructor() {
		super();
	}

	render() {
		const {products,deleteProduct} = this.props;
		return R.map((product, id) => {
			return (
					<ProductView
						key={id}
						product={product}
						deleteProduct={deleteProduct}
					/>

			)
		}, products)
	}
}

export {ProductList};
