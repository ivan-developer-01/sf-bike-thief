import { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import nextId from "react-id-generator";
import Layout from "./components/layout";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import Cases from "./pages/cases";
import NewCase from "./pages/cases/new";
// import SignUp from "./pages/signup";

class App extends Component {
	constructor() {
		super();
		this.state = {
			links: [
				{ id: nextId("link-id-"), url: "/", title: "Главная", here: true, home: true },
				{ id: nextId("link-id-"), url: "/cases", title: "Кражи", here: false },
				{ id: nextId("link-id-"), url: "/cases/new", title: "Сообщить о краже", here: false },
			]
		}

		this.onLinkClick = this.onLinkClick.bind(this)
		this.clearActiveLinks = this.clearActiveLinks.bind(this)
	}

	onLinkClick(linkId) {
		this.setState(prevState => ({
			links: prevState.links.map(link => {
				if (link.id === linkId) {
					return { ...link, here: true }
				} else {
					return { ...link, here: false }
				}
			})
		}))
	}

	clearActiveLinks() {
		this.setState(prevState => ({
			links: prevState.links.map(link => {
				return { ...link, here: false }
			})
		}))
	}

	render() {
		const { state, onLinkClick } = this
		return (
			<BrowserRouter>
				<Routes>
					<Route element={<Layout links={state.links} onLinkClick={onLinkClick} />}>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login clearActiveLinks={this.clearActiveLinks} />} />
						<Route path="/cases/" element={<Cases />} />
						<Route path="/cases/new" element={<NewCase />} />
						<Route path="*" element={<NotFound links={state.links} onLinkClick={onLinkClick} />} />
					</Route>
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
