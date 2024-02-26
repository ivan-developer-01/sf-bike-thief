import { Component } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

export default class Layout extends Component {
	render() {
		const { links } = this.props;

		return (
			<Container>
				<Header links={links} />
				<main>
						<Outlet />
				</main>
				<Footer links={links} />
			</Container>
		);
	}
}