import React, {Component} from "react";
import {connect} from 'react-redux'

class Setting extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="mainarea">
				<div className="mainareainside">
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		catalog: state.catalog,
	};
};

const SettingRedux = connect(mapStateToProps)(Setting);
export {SettingRedux};