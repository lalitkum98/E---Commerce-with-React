import React, {Component} from "react";
import {connect} from 'react-redux'
import {CommerceMenuRedux as MenuView} from "../presentational/MenuView";
import {SettingRedux as SettingContainer} from "./SettingContainer";
import {CatalogRedux as CatalogContainer} from "./CatalogContainer";
import {PublishRedux as PublishContainer} from "./PublishContainer";
import {DesignRedux as DesignContainer} from "./DesignContainer";

class Main extends Component {
	constructor() {
		super()
		this.state = {catalogTab: true}
		this.onClickSetting = this.onClickSetting.bind(this)
		this.onClickPublish = this.onClickPublish.bind(this)
		this.onClickDesign = this.onClickDesign.bind(this)
		this.onClickCatalog = this.onClickCatalog.bind(this)
	}

	onClickSetting() {
		this.setState({settingTab: true, publishTab: false, designTab: false, catalogTab: false,});
	}

	onClickPublish() {
		this.setState({settingTab: false, publishTab: true, designTab: false, catalogTab: false,});
	}

	onClickDesign() {
		this.setState({settingTab: false, publishTab: false, designTab: true, catalogTab: false,});
	}

	onClickCatalog() {
		this.setState({settingTab: false, publishTab: false, designTab: false, catalogTab: true,});
	}

	render() {
		const {catalogTab, settingTab, publishTab, designTab} = this.state
		return (
			<div>
				<MenuView
					onClickSetting={this.onClickSetting}
					onClickPublish={this.onClickPublish}
					onClickDesign={this.onClickDesign}
					onClickCatalog={this.onClickCatalog}
				/>
				{catalogTab ? <CatalogContainer/> : null}
				{settingTab ? <SettingContainer/> : null}
				{publishTab ? <PublishContainer/> : null}
				{designTab ? <DesignContainer/> : null}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		catalog: state,
	};
};

const MainRedux = connect(mapStateToProps)(Main);
export {MainRedux};