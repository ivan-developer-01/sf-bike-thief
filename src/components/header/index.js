import { Link } from "react-router-dom";
import logo from "../../logo.png";
import Links from "../links";

export default function Header({ links }) {
	return (
		<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
			<div className="col-md-3 mb-2 mb-md-0">
				<a href="/">
					<img src={logo} alt="logo" width="40" height="40" className="me-2" />
				</a>
			</div>

			<Links links={links} />

			<div className="col-md-3 text-end">
				<Link to="login" type="button" className="btn btn-outline-primary me-2">Войти</Link>
				<Link to="sign-up" type="button" className="btn btn-primary">Зарегистрироваться</Link>
			</div>
		</header>
	)
}