import React, {Component} from "react";
import {connect} from 'react-redux'


class CommerceMenu extends Component {
	constructor() {
		super()
	}

	render() {
		const {onClickCatalog, onClickSetting, onClickPublish, onClickDesign} = this.props
		return (
			<div className="menu">
				<div className="menucontainer">
					<div className="btn-group">
						<button type="submit" className="menutab" onClick={() => onClickCatalog()}>Catalog
						</button>
						<button type="submit" className="menutab" onClick={() => onClickSetting()}>Setting
						</button>
						<button type="submit" className="menutab" onClick={() => onClickPublish()}>Publish
						</button>
						<button type="submit" className="menutab" onClick={() => onClickDesign()}>Design
						</button>
					</div>
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		catalog: state,
	};
};

const CommerceMenuRedux = connect(mapStateToProps)(CommerceMenu);
export {CommerceMenuRedux};