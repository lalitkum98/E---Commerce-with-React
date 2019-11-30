import React, {Component} from "react";
import {connect} from 'react-redux'
import {ProductRedux as ProductContainer} from "./Catalog/ProductContainer";
import {ProductsRedux as ProductsContainer} from "./Catalog/ProductsContainer";
import {CategoryRedux as CategoryContainer} from "./Catalog/CategoryContainer";
import {CategoryTree} from "../presentational/CategoryTreeView";
import {fetchProductsByCategoryId} from "../Utilities/Utility";
import {Action} from "../Reducers/CatalogReducer";

class Catalog extends Component {
	constructor() {
		super()
		this.state = {};
		this.getProducts = this.getProducts.bind(this)
	}

	getProducts = (CategoryId) => {
		const catalog = this.props.catalog
		const products = fetchProductsByCategoryId(CategoryId, catalog)
		this.props.dispatch(Action.SaveProducts(products));
	}


	render() {
		const {catalog, products} = this.props
		return (
			<div className="mainarea">
				<div className="leftArea">
					<div className="leftareainside">
						<ProductContainer/>
						<span className="space">
						<CategoryContainer/>
						</span>
					</div>
					<CategoryTree node={catalog}
								  getProducts={this.getProducts}/>
				</div>
				<div className="rightArea">
					<ProductsContainer products={products}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		catalog: state.catalog,
		products: state.products
	};
};

const CatalogRedux = connect(mapStateToProps)(Catalog);
export {CatalogRedux};