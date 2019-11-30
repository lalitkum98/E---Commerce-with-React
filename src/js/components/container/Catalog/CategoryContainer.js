import React, {Component} from "react";
import {connect} from 'react-redux'
import {CategoryDetails} from "../../presentational/CategoryDetails";
import {Action} from "../../Reducers/CatalogReducer"
import {validate} from "../../Utilities/Utility";

class Category extends Component {
	constructor() {
		super();
		this.state = {}
		this.createCategory = this.createCategory.bind(this)
		this.addDefaultProperties = this.addDefaultProperties.bind(this)
	}

	addDefaultProperties(category) {
		category["id"] = "CAT" + Math.random();
		category["type"] = "Category";
		category["brand"] = null;
		category["image"] = null;
		category["imageName"] = null,
		category["imageVersion"] = null,
			category["childNodes"] = []
		return category;
	}

	createCategory(category) {
		var error = validate(category, "CATEGORY")
		if (error) {
			alert("Please enter " + error)
			return;
		}
		category = this.addDefaultProperties(category)
		this.props.dispatch(Action.SaveCategory(category));
	}

	render() {
		return (
			<CategoryDetails createCategory={this.createCategory}
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

const CategoryRedux = connect(mapStateToProps)(Category);
export {CategoryRedux};