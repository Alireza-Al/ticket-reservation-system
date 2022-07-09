import React, { useState } from "react";
import axios from "../../../api/axios";

function EditUserData(props) {
	const [info, setInfo] = useState({});

	const HandleSubmit = (e) => {
		e.preventDefault();

		if (!ValidateAndAccept()) {
			alert('fields are empty')
			return
		}

		const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

		const config = {
			headers: {
				Authorization: token,
			},
		};
		axios
			.put(
				`/customer/${props.id}/`,
				{
					first_name: info.name,
					last_name: info.lastName,
					national_code: info.idNum,
					birth_date: info.birthDate,
				},
				config
			)
			.then(window.location.reload())
			.catch((err) => console.error(err));
	};

	const ValidateAndAccept = () => {
		if (!info.name || !info.lastName || !info.idNum) {
			return false
		}
		return true
	}

	return (
		<div className="edit-cont">
			<form action="submit" onSubmit={(e) => HandleSubmit(e)}>
				<div className="item-cont">
					<label htmlFor="">
						{props.containerNames[0]}
						{/* container names like name */}
					</label>
					<input
						type="text"
						onChange={(e) => {
							setInfo({
								...info,
								name: e.target.value,
							});
						}}
					/>
				</div>
				<div className="item-cont">
					<label htmlFor="">{props.containerNames[1]}</label>
					<input
						type="text"
						onChange={(e) => {
							setInfo({
								...info,
								lastName: e.target.value,
							});
						}}
					/>
				</div>
				<div className="item-cont">
					<label htmlFor="">{props.containerNames[2]}</label>
					<input
						type="number"
						onChange={(e) => {
							setInfo({
								...info,
								idNum: e.target.value,
							});
						}}
					/>
				</div>
				<div className="item-cont">
					<label htmlFor="">{props.containerNames[4]}</label>
					<input
						type="date"
						onChange={(e) => {
							setInfo({
								...info,
								birthDate: e.target.value,
							});
						}}
					/>
				</div>
				<div className="item-cont">
					<button onClick={() => {
						props.editState(false)
					}}>
						بازگشت
					</button>
					<button>ذخیره</button>
				</div>
			</form>
		</div>
	);
}

export default EditUserData;
