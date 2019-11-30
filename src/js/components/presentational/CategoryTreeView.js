import React, {Component} from "react";
import * as R from "ramda";

class CategoryTree extends Component {
	constructor() {
		super();
		this.state = {
			visible: true,
		};
		this.onClickItem = this.onClickItem.bind(this)
		this.expandOrShrink = this.expandOrShrink.bind(this)
		this.removeStyle = this.removeStyle.bind(this)
	}

	onClickItem({node, getProducts}) {
		getProducts(node.name)
		this.setState({visible: !this.state.visible});
	};


	expandOrShrink(className) {
		return function(visible) {
			if (visible) {
				return className += ' togglable-down';
			} else {
				return className += ' togglable-up';
			}
		}
	}

	removeStyle(visible) {
		if (!visible) {
			return {display: "none"};
		}
	}

	render() {
		const {node, getProducts} = this.props;
		const {visible} = this.state;
		var childNodes;
		var className;
		if (node.childNodes != null) {
			childNodes = R.map(function(node, index) {
				return (
					<CategoryTree node={node} getProducts={getProducts}/>
				)
			},node.childNodes);
			className = this.expandOrShrink('togglable')(visible)
		}
		var style = this.removeStyle(visible)

		return (
			<div>
				<div className="list-group">
					<a className="list-group-item" >
						<span onClick={() => this.onClickItem({node, getProducts})}
							  className={className}> {node.name} </span>
						<ul style={style}> {childNodes} </ul>
					</a>
				</div>

			</div>
		);
	}
}

export {CategoryTree};