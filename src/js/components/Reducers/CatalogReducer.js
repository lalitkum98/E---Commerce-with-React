import {saveItem, deleteItem, fetchProductsByCategoryId} from "../Utilities/Utility";
import {uploadImage} from "../Resources/CatalogResources";

const CatalogReducer = (state, action) => {
	switch (action.type) {
		case 'SAVE':
			return save(state, action)
			break;
		case 'DELETE':
			return deleteProduct(state, action)
			break;
		case 'SAVEPRODUCTS':
			return saveProducts(state, action)
			break;
		default:
			return state;
			break;
	}
};

const saveProducts = (state, {payload}) => {
	var newState = Object.assign({}, state);
	newState.products = payload
	return newState
}
const save = (state, {payload}) => {
	var newState = Object.assign({}, state);
	const saveNewItem= saveItem(payload, payload.parentCategory)
	newState.catalog = saveNewItem(newState.catalog)
	newState.products = fetchProductsByCategoryId(payload.parentCategory, newState.catalog)
	return newState
}

const deleteProduct = (state, {payload}) => {
	var newState = Object.assign({}, state);
	const deleteOldItem= deleteItem(payload, payload.parentCategory)
	newState.catalog = deleteOldItem(newState.catalog)
	newState.products = fetchProductsByCategoryId(payload.parentCategory, newState.catalog)
	return newState;
}

export const Action = {
	SaveProduct(product) {
		return (dispatch) => {
			uploadImage(product)
				.then((response) => {
					product["imageName"] = response.data.public_id;
					product["imageVersion"] = response.data.version;
					dispatch({
						type: 'SAVE',
						payload: product
					})
				}).catch((error) => {
				console.log(error);
			});
		}
	},
	SaveCategory(category) {
		return (dispatch) => {
			dispatch({
				type: 'SAVE',
				payload: category
			})
		}
	},
	DeleteProduct(product) {
		return (dispatch) => {
			dispatch({
				type: 'DELETE',
				payload: product
			})

		}
	},
	SaveProducts(products) {
		return (dispatch) => {
			dispatch({
				type: 'SAVEPRODUCTS',
				payload: products
			})

		}
	},
};

export {CatalogReducer}
