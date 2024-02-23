import { Link } from "react-router-dom";

export default function Links({ links, onLinkClick }) {
	return (
		<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
			{links.map((link) => (
				<li key={link.id}>
					<Link
						to={link.url}
						className={`nav-link px-2 link-${link.here ? "secondary" : "dark"} link-opacity-75 link-opacity-100-hover`}
						onClick={() => onLinkClick(link.id)}
					>{link.title}</Link>
				</li>
			))}
		</ul>
	);
}