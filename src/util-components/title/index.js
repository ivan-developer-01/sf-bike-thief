import { Component } from 'react';
import ReactDOM from 'react-dom';
import globalData from '../../global-data';

const titleNode = document.getElementsByTagName("title")[0];
titleNode.innerText = "";

class Title extends Component {
	constructor(props) {
		super(props);
		this.titleEl = document.getElementsByTagName("title")[0];
		// this.titleEl.innerText = "";
	}

	render() {
		let fullTitle;
		if (this.props.pageTitle) {
			fullTitle = this.props.pageTitle + " - " + this.props.siteTitle;
		} else {
			fullTitle = this.props.siteTitle;
		}

		return ReactDOM.createPortal(
			fullTitle || "",
			this.titleEl
		);
	}
}
Title.defaultProps = {
	pageTitle: null,
	siteTitle: globalData.siteName
};

export default Title;
