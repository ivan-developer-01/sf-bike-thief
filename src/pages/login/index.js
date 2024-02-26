import { Component } from "react";
import Title from "../../util-components/title";
import RequiredSymbol from "../../util-components/requiredSymbol";

export default class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: "", incorrectEmail: false,
			password: "", incorrectPassword: false
		}
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value, incorrectEmail: false })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value, incorrectPassword: false })
	}

	onSubmit = (event) => {
		event.preventDefault();
		if (this.state.email.length === 0) {
			this.setState({ incorrectEmail: true })
		}

		if (this.state.password.length === 0) {
			this.setState({ incorrectPassword: true })
		}
	}

	render() {
		return (
			<>
				<Title pageTitle="Войти" />
				<h1>Войти</h1>

				<form onSubmit={this.onSubmit}>
					<div className="form-floating mb-3 needs-validation">
						<input type="email" onInput={this.onEmailChange} className="form-control" id="floatingEmail" placeholder="name@example.com" />
						<label htmlFor="floatingEmail">Почта<RequiredSymbol/></label>
						<div className={"invalid-feedback" + (this.state.incorrectEmail ? " d-block" : "")}>Пожалуйста, введите корректную почту</div>
					</div>
					<div className="form-floating mb-3 needs-validation">
						<input type="password" onInput={this.onPasswordChange} className="form-control" id="floatingPassword" placeholder="Password" />
						<label htmlFor="floatingPassword">Пароль<RequiredSymbol/></label>
						<div className={"invalid-feedback" + (this.state.incorrectPassword ? " d-block" : "")}>Пожалуйста, введите корректный пароль</div>
					</div>
					<button type="submit" className="btn btn-primary">Войти</button>
				</form>
			</>
		)
	}
}