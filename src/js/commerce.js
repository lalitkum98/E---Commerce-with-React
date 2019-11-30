import style from "../main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {createStore, applyMiddleware} from "redux";
import {MainRedux as MainContainer} from "./components/container/MainContainer";
import {CatalogReducer} from "./components/Reducers/CatalogReducer";
import Thunk from 'redux-thunk';
import {fetchProductsByCategoryId} from "./components/Utilities/Utility";
import {UtilityRMP} from "./components/container/Design/UtilityRMP";
import {UtilityMP} from "./components/container/Design/UtilityMP";

const defaultState = {
	catalog: {
		id: "cat1001",
		type: "Category",
		name: "Catalog",
		parentCategory: null,
		description: "Catalog",
		brand: null,
		image: null,
		imageName: null,
		imageVersion: null,
		childNodes: [
			{
				id: "prod1001",
				type: "Product",
				name: "Puma Shoe",
				parentCategory: "Catalog",
				description: "Puma Shoe",
				brand: "Puma",
				image: null,
				imageName: "puma",
				imageVersion: "1527422526"
			},
			{
				id: "cat1002",
				type: "Category",
				name: "Clothing",
				parentCategory: "Catalog",
				description: "Category-1002",
				brand: null,
				image: null,
				imageName: null,
				imageVersion: null,
				childNodes: [
					{
						id: "cat1003",
						type: "Category",
						name: "Shirt",
						parentCategory: "Clothing",
						description: "Shirt",
						brand: null,
						image: null,
						imageName: null,
						imageVersion: null,
						childNodes: [
							{
								id: "prod1003",
								type: "Product",
								name: "US Polo Shirt",
								parentCategory: "Clothing",
								description: "US Polo Shirt",
								brand: "Lee",
								image: null,
								imageName: "shirt",
								imageVersion: "1527674736",

							}
						]
					},
					{
						id: "prod1002",
						type: "Product",
						name: " US Polo Jeans",
						parentCategory: "Clothing",
						description: "US Polo Jeans",
						brand: "US POLO",
						image: null,
						imageName: "jeans",
						imageVersion: "1527674736",
					}
				]
			}
		]
	},
	products: []
};

defaultState.products = fetchProductsByCategoryId("Catalog", defaultState.catalog)


const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);
const CatalogStore = createStoreWithMiddleware(CatalogReducer, defaultState);

ReactDOM.render(
	<Provider store={CatalogStore}>
		<div className="container">
			<div className="header">
				<div className="headerText">
					<h1>Commerce</h1>
				</div>
			</div>
			<Router history = {browserHistory}>
				<Route exact path='/' component={MainContainer}/>
			</Router>
			<div className="footer">
				<div className="footerText">
					<h1>Commerce</h1>
				</div>
			</div>
		</div>
	</Provider>
	, document.getElementById('commerce')
)