import { NavLink } from "react-router-dom";

export default function Links({ links }) {
	return (
		<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
			{links.map((link) => (
				<li key={link.id}>
					<NavLink
						to={link.url}
						className={({ isActive }) => "nav-link px-2 link-opacity-75 link-opacity-100-hover " + (isActive ? "link-secondary" : "link-dark")}
					>{link.title}</NavLink>
				</li>
			))}
		</ul>
	);
}