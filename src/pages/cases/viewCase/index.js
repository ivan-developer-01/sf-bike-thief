import { Component } from "react";
import { useParams } from "react-router-dom";
import Title from "../../../util-components/title";
import NotFound from "../../notFound";

export default function ViewCase({ theftCases }) {
	const id = useParams().id

	return <BypassingHooks id={id} cases={theftCases} />
}

class BypassingHooks extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { id, cases } = this.props
		const theftCase = cases.find(c => c.id === id)
		if (!theftCase) {
			return <NotFound />
		}

		let resolutionProps = {}

		if (theftCase.status !== "done") {
			resolutionProps = {
				disabled: true,
				defaultValue: "Это поле отключено, так как дело еще не завершено",
				style: { opacity: 0.7 }
			}
		}
		
		return (
			<>
				<Title pageTitle={`Просмотр сообщения о краже с ID ${id}`} />
				<h1>Просмотр сообщения о краже с ID {id}</h1>

				<p>Создано {theftCase.createdAt.toLocaleDateString?.()}, обновлено {theftCase.updatedAt.toLocaleDateString?.()}, clientId {theftCase.clientId}</p>

				<form className="container">
					<div className="form-floating mb-3">
						<select className="form-select" id="statusSelect" defaultValue={theftCase.status}>
							<option value="new">new</option>
							<option value="in_progress">in_progress</option>
							<option value="done">done</option>
						</select>
						<label htmlFor="statusSelect">Статус</label>
					</div>
					<div className="form-floating mb-3">
						<input type="text" className="form-control" id="licenseNumber" placeholder="123456" defaultValue={theftCase.licenseNumber} />
						<label htmlFor="licenseNumber">Номер лицензии</label>
					</div>
					<div className="form-floating mb-3">
						<select className="form-select" id="typeSelect" defaultValue={theftCase.type}>
							<option value="general">general</option>
							<option value="sport">sport</option>
						</select>
						<label htmlFor="typeSelect">Тип</label>
					</div>
					<div className="form-floating mb-3">
						<input type="text" className="form-control" id="ownerFullName" placeholder="Иванов Иван Иванович" defaultValue={theftCase.ownerFullName} />
						<label htmlFor="ownerFullName">ФИО владельца</label>
					</div>
					<div className="form-floating mb-3">
						<input type="text" className="form-control" id="color" placeholder="black" defaultValue={theftCase.color} />
						<label htmlFor="color">Цвет</label>
					</div>
					<div className="form-floating mb-3">
						<input type="date" className="form-control" id="date" defaultValue={theftCase.date.toISOString().slice(0, 10)} />
						<label htmlFor="date">Дата</label>
					</div>
					<div className="form-floating mb-3">
						<input type="text" className="form-control" id="officer" placeholder="1" defaultValue={theftCase.officer} />
						<label htmlFor="officer">Офицер</label>
					</div>
					<div className="form-floating mb-3">
						<input type="text" className="form-control" id="description" placeholder="Украли велосипед №123" defaultValue={theftCase.description} />
						<label htmlFor="description">Описание</label>
					</div>
					<div className="form-floating mb-3">
						<input type="text" className="form-control" id="resolution" placeholder="Велосипед был украден, и велосипед был найден" defaultValue={theftCase.resolution} {...resolutionProps} />
						<label htmlFor="resolution">Решение</label>
					</div>
				</form>
			</>
		)
	}
}