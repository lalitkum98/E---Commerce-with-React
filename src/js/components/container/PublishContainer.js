import React, {Component} from "react";
import {connect} from 'react-redux'

class Publish extends Component {
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

const PublishRedux = connect(mapStateToProps)(Publish);
export {PublishRedux};