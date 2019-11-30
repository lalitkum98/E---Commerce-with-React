import React, {Component} from "react";
import {connect} from 'react-redux'
import {ProductDetails} from "../../presentational/ProductDetails";
import {Action} from "../../Reducers/CatalogReducer"
import {validate} from "../../Utilities/Utility";

class Product extends Component {
	constructor() {
		super();
		this.state = {
			products: [],
		}
		this.createProduct = this.createProduct.bind(this)
		this.addDefaultProperties = this.addDefaultProperties.bind(this)
	}

	addDefaultProperties(product){
		product["id"] = "PROD" + Math.random();
		product["type"] = "Product";
		if (!product.parentCategory) {
			product["parentCategory"] = "Catalog";
		}
		return product;
	}

	createProduct(product) {
		var error = validate(product, "PRODUCT")
		if (error) {
			alert("Please enter " + error)
			return;
		}
		product = this.addDefaultProperties(product)
		this.props.dispatch(Action.SaveProduct(product));
	}

	render() {
		return (
			<ProductDetails createProduct={this.createProduct}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		catalog: state.catalog,
	};
};

const ProductRedux = connect(mapStateToProps)(Product);
export {ProductRedux};