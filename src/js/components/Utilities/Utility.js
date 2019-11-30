import * as R from "ramda";

export function validate(item, type) {
	switch (type) {
		case 'PRODUCT':
			return validateProduct(item)
			break;
		case 'CATEGORY':
			return validateCategory(item)
			break;
	}
	return false;
}

const validateProduct = ({name, brand, description, image}) => {
	if (!name)
		return "Product Name"
	if (!brand)
		return "Product Brand"
	if (!description)
		return "Product Description"
	if (!image)
		return "Product Image"
}

const validateCategory = ({name, description, parentCategory}) => {
	if (!name)
		return "Category Name"
	if (!description)
		return "Category Description"
	if (!parentCategory)
		return "Parent Category"
}


export function fetchProductsByCategoryId(categoryId, catalog) {
	var traverse = traverseCatalog("Product", categoryId)
	return traverse(catalog)
}


const traverseCatalog = (type, categoryId) => {
	var items = []
	var valid = false;
	return function traverse(value) {
		if (value !== null && Array.isArray(value)) {
			for (var item in value) {
				traverse(value[item])
			}
		} else if (value !== null && typeof value === 'object') {
			if (value.type == type && valid) {
				items.push(value)
			} else {
				if (value.name === categoryId) {
					valid = true;
				}
				traverse(value.childNodes)
				if (value.name === categoryId) {
					valid = false;
				}
			}
		}
		return items;
	}
}

export const saveItem = (item, parentItem) => {
	return function traverse(value) {
		if (value !== null && Array.isArray(value)) {
			for (var element in value) {
				traverse(value[element])
			}
		} else if (value !== null && typeof value === 'object') {
			if (value.name === parentItem) {
				value.childNodes.push(item)
				return value;
			}
			traverse(value.childNodes)
		}
		return value;
	}
}

export const deleteItem = (item, parentItem) => {
	return function traverse(value) {
		debugger
		if (value !== null && Array.isArray(value)) {
			for (var element in value) {
				traverse(value[element])
			}
		} else if (value !== null && typeof value === 'object') {
			if (value.name === parentItem) {
				const index = R.map((child) => {
					return child.id;
				}, value.childNodes).indexOf(item.id);
				if (index > -1) {
					value.childNodes.splice(index, 1);
				}
				return value;
			}
			traverse(value.childNodes)
		}
		return value;
	}
}
