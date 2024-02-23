import { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../../util-components/title";

export default class Cases extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cases: [
				{
					status: "new",
					licenseNumber: "123456",
					type: "sport",
					ownerFullName: "Иванов Иван Иванович",
					clientId: "ClientId12983245389726345",
					createdAt: new Date("2021-01-01T00:00:00.000Z"),
					updatedAt: new Date("2021-01-01T00:00:00.000Z"),
					color: "black",
					date: new Date("2021-01-01T00:00:00.000Z"),
					officer: "3874",
					description: "Украли велосипед №123",
					resolution: "Вернули велосипед №123, вор велосипеда Вор Воров наказан.",
				}
			]
		}
	}
	render() {
		console.log(this.state.cases)
		return (
			<>
				<Title pageTitle="Сообщения о кражах" />
				<h1>Сообщения о кражах</h1>

				<table className="table table-striped table-bordered">
					<thead>
						<tr>
							<th scope="col">Статус</th>
							{/* <th scope="col">Номер лицензии</th> */}
							{/* <th scope="col">Тип</th> */}
							<th scope="col">ФИО клиента</th>
							<th scope="col">Дата создания</th>
							<th scope="col">Цвет</th>
							<th scope="col">Дата кражи</th>
							<th scope="col">Ответственный сотрудник</th>
							{/* <th scope="col">Описание</th> */}
							{/* <th scope="col">Комментарий</th> */}
							<th scope="col">Ссылка</th>
						</tr>
					</thead>
					<tbody>
						{this.state.cases.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.status}</td>
									{/* <td>{item.licenseNumber}</td> */}
									{/* <td>{item.type}</td> */}
									<td>{item.ownerFullName}</td>
									<td>{item.createdAt.toDateString?.()}</td>
									<td>{item.color}</td>
									<td>{item.date.toDateString?.()}</td>
									<td>{item.officer}</td>
									{/* <td>{item.description}</td> */}
									{/* <td>{item.resolution}</td> */}
									<td><Link to={`/cases/${item.id}`}>Подробнее</Link></td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</>
		)
	}
}