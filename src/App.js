import { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import nextId from "react-id-generator";
import Layout from "./components/layout";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import Cases from "./pages/cases";
import NewCase from "./pages/cases/new";
import ViewCase from "./pages/cases/viewCase";
// import SignUp from "./pages/signup";

class App extends Component {
	constructor() {
		super();
		this.state = {
			links: [
				{ id: nextId("link-id-"), url: "/", title: "Главная", here: true, home: true },
				{ id: nextId("link-id-"), url: "/cases", title: "Кражи"},
				{ id: nextId("link-id-"), url: "/cases/new", title: "Сообщить о краже" },
			],
			theftCases: [
				{
					status: "new",
					licenseNumber: "123456",
					type: "general",
					ownerFullName: "Иванов Иван Иванович",
					clientId: "ClientId12983245389726345",
					createdAt: new Date("2021-01-01T00:00:00.000Z"),
					updatedAt: new Date("2021-01-01T00:00:00.000Z"),
					color: "black",
					date: new Date("2021-01-01T00:00:00.000Z"),
					officer: "3874",
					description: "Украли велосипед №123",
				},
				{
					status: "in_progress",
					licenseNumber: "1995-10-8-9-7313-4923-4",
					type: "sport",
					ownerFullName: "Петров Пётр Петрович",
					clientId: "ClientId12983245389726345",
					createdAt: new Date("2022-11-04T22:23:09.493Z"),
					updatedAt: new Date("2022-11-04T22:40:44.098Z"),
					color: "rainbow",
					date: new Date("2022-11-03"),
					officer: "1337",
					description: "Украли велосипед №059, было ясно, что вор спрятал велосипед где-то в сугробе на севере.",
				},
				{
					status: "done",
					licenseNumber: "2024-2-20-2-5489-1298-5",
					type: "sport",
					ownerFullName: "ИВАНОВ ИВАН ИВАНОВОВИЧ",
					clientId: "ClientId12983245389726345",
					createdAt: new Date("2024-02-23T19:43:24.812Z"),
					updatedAt: new Date("2024-02-23T19:43:24.812Z"),
					color: "blue",
					date: new Date("2024-02-22"),
					// officer: "3874",
					description: "Украли велосипед №8481 в Томске",
					resolution: "Вернули велосипед №8481 клиенту Иванов Иван Ивановичу, вор велосипеда Воров Вор Ворович наказан.",
				}
			].map((item) => {
				item.id = nextId("case-id-")
				return item
			})
		}
	}

	render() {
		const { state } = this
		return (
			<BrowserRouter>
				<Routes>
					<Route element={<Layout links={state.links} />}>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/cases/" element={<Cases theftCases={state.theftCases} />} />
						<Route path="/cases/new" element={<NewCase />} />
						<Route path="/cases/:id" element={<ViewCase theftCases={state.theftCases} />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
