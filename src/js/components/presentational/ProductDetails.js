import React, {Component} from "react";
import Popup from "reactjs-popup";

class ProductDetails extends Component {

	constructor() {
		super();
		this.state = {}
		this.onChangeProductName = this.onChangeProductName.bind(this)
		this.onChangeProductDescription = this.onChangeProductDescription.bind(this)
		this.onChangeProductBrand = this.onChangeProductBrand.bind(this)
		this.onChangeUploadImage = this.onChangeUploadImage.bind(this)
		this.onChangeParentCategory = this.onChangeParentCategory.bind(this)
	}

	onChangeProductName(event) {
		const value = event.target.value;
		this.setState({"name": value})
	}

	onChangeProductDescription(event) {
		const value = event.target.value;
		this.setState({"description": value})
	}

	onChangeProductBrand(event) {
		const value = event.target.value;
		this.setState({"brand": value})
	}

	onChangeUploadImage(event) {
		const file = event.target.files[0];
		this.setState({"image": file})
	};

	onChangeParentCategory(event) {
		const value = event.target.value;
		this.setState({"parentCategory": value})
	}


	render() {
		const {createProduct} = this.props;
		return (
			<Popup trigger={<button> Create Product </button>}
				   modal
				   closeOnDocumentClick>
				<h1>
					<small>Create Product</small>
				</h1>
				<div>
					<div className="form-group">
						<table className="table">
							<tbody>
							<tr>
								<td>Product Name :</td>
								<td><input className="form-control" onChange={this.onChangeProductName}/></td>
							</tr>
							<tr>
								<td>Product Description :</td>
								<td><input className="form-control" onChange={this.onChangeProductDescription}/>
								</td>
							</tr>
							<tr>
								<td>Product Brand :</td>
								<td><input className="form-control" onChange={this.onChangeProductBrand}/></td>
							</tr>
							<tr>
								<td>Parent Category Name :</td>
								<td><input className="form-control" onChange={this.onChangeParentCategory}/>
								</td>
							</tr>
							<tr>
								<td>

									<label htmlFor="imageUpload" className ="btn btn-outline-primary">Upload
										Image</label>
									<input type="file" id="imageUpload" accept="image/*"
										   onChange={this.onChangeUploadImage}
										   style={{display: "none"}}/></td>
							</tr>
							</tbody>
						</table>
						<span className="centerButton">
									<button type="submit" className ="btn btn-outline-primary"
											onClick={() => createProduct(this.state)}>Save Product
									</button>
									</span>
					</div>
				</div>
			</Popup>
		);
	}
}

export {ProductDetails};



