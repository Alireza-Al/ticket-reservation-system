import axios from "../../../api/axios";

const getUserInfo = () => (dispatch) => {
	const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

	const config = {
		headers: {
			Authorization: token,
		},
	};

	axios.get("/customer/", config).then((response) => {
		const id = response.data[0].id;
		const firstName = response.data[0].first_name;
		const lastName = response.data[0].last_name;
		const email = response.data[0].email;
		const nationalCode = response.data[0].national_code;
		const birthDate = response.data[0].birth_date;
		const isRegistered = response.data[0].is_registered;

		dispatch({
			type: "GET_USER_INFO",
			payload: {
				id,
				firstName,
				lastName,
				email,
				nationalCode,
				birthDate,
				isRegistered,
			},
		});
	});
};

export default getUserInfo;
