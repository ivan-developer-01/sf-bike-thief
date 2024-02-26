import logo from "../../logo.png";
import Links from "../links";

export default function Footer({ links }) {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
			<p className="col-md-4 mb-0 text-muted">© 2024 Skillfactory & Ivan Kolosov</p>

			<div>
				<a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
					<img src={logo} alt="logo" width="40" height="40" />
				</a>
			</div>

			<Links links={links} />
		</footer>
	)
}