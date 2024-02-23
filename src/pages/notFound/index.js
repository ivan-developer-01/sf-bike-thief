import { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../util-components/title';
// export default function NotFound() {
// 	let notFoundUrl = document.location.href.replace(document.location.origin, "")

// 	useEffect(() => {
// 		document.title = "Ошибка 404"
// 	})
	

// 	return (
// 		<>
// 			<h3>404</h3>
// 			<p>Страница {notFoundUrl} не найдена. <Link to="/">Вернитесь на главную.</Link></p>
// 		</>
// 	)
// }

export default class NotFound extends Component {
	onReturnHome = () => {
		const homeLinkId = this.props.links.find(link => link.home).id
		this.props.onLinkClick(homeLinkId)
	}

	render() {
		let notFoundUrl = document.location.href.replace(document.location.origin, "")
		return (
			<>
				<Title pageTitle="Ошибка 404" />
				<h1>404</h1>
				<p>Страница {notFoundUrl} не найдена. <Link to="/" onClick={this.onReturnHome}>Вернитесь на главную.</Link></p>
			</>
		)
	}
}