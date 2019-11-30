import React, {Component} from "react";
import {connect} from 'react-redux'

class Design extends Component {
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
		catalog: state,
	};
};

const DesignRedux = connect(mapStateToProps)(Design);
export {DesignRedux};