import React, {Component} from "react";
import Popup from "reactjs-popup";;

class CategoryDetails extends Component {

	constructor() {
		super();
		this.state = {}
		this.onChangeCategoryName = this.onChangeCategoryName.bind(this)
		this.onChangeCategoryDescription = this.onChangeCategoryDescription.bind(this)
		this.onChangeParentCategory = this.onChangeParentCategory.bind(this)
	}

	onChangeCategoryName(event) {
		const value = event.target.value;
		this.setState({"name": value})
	}

	onChangeCategoryDescription(event) {
		const value = event.target.value;
		this.setState({"description": value})
	}

	onChangeParentCategory(event) {
		const value = event.target.value;
		this.setState({"parentCategory": value})
	}

	render() {
		const {createCategory} = this.props;
		return (
			<Popup trigger={<button> Create Category </button>}
				   modal
				   closeOnDocumentClick>
				<h1>
					<small>Create Category</small>
				</h1>
				<div>
					<div className="form-group">
						<table className="table">
							<tbody>
							<tr>
								<td>Category Name :</td>
								<td><input className="form-control" onChange={this.onChangeCategoryName}/></td>
							</tr>
							<tr>
								<td>Category Description :</td>
								<td><input className="form-control" onChange={this.onChangeCategoryDescription}/>
								</td>
							</tr>
							<tr>
								<td>Parent Category Name :</td>
								<td><input className="form-control" onChange={this.onChangeParentCategory}/></td>
							</tr>
							</tbody>
						</table>
						<span className="centerButton">
									<button type="submit" className ="btn btn-outline-primary"
											onClick={() => createCategory(this.state)}>Save Category
									</button>
									</span>
					</div>
				</div>
			</Popup>
		);
	}
}

export {CategoryDetails};



