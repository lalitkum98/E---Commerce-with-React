import React, {Component} from "react";
import {connect} from 'react-redux'
import {ProductList} from "../../presentational/ProductList";
import {Action} from "../../Reducers/CatalogReducer"

class Products extends Component {
	constructor() {
		super()
		this.state = {};
		this.deleteProduct = this.deleteProduct.bind(this)
	}

	deleteProduct(product) {
		this.props.dispatch(Action.DeleteProduct(product));
	}

	render() {
		const {products} = this.props
		return (
				<ProductList
					products={products}
					deleteProduct={this.deleteProduct}
				/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		catalog: state.catalog,
		products: state.products
	};
};

const ProductsRedux = connect(mapStateToProps)(Products);
export {ProductsRedux};