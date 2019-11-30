import React, {Component} from "react";

class ProductView extends Component {
	constructor() {
		super();
	}

	render() {
		const {product,deleteProduct} = this.props
		const url = "http://res.cloudinary.com/dgpq7iwfq/image/upload/v" + product.imageVersion + "/" + product.imageName + ".jpg";
		return (
			<div className="productListingBox ">
				<div className="productListingBoxInner">
					<li>
						<img className="img-thumbnail" src={url}></img><p></p>
					</li>

					<table className="table">
						<tbody>
						<tr>
							<td>Product Name</td>
							<td>{product.name}</td>
						</tr>
						<tr>
							<td>Product Desc</td>
							<td>{product.description}</td>
						</tr>
						<tr>
							<td>Product Brand</td>
							<td>{product.brand}</td>
						</tr>
						</tbody>
					</table>
					<button type="submit" className ="btn btn-outline-primary"
							onClick={() => deleteProduct(product)}> Delete
					</button>
				</div>
			</div>
		);
	}
}

export {ProductView};


