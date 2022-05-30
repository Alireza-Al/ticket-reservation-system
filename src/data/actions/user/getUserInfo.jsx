import axios from "../../../api/axios";

const getUserInfo = () => (dispatch) => {
	const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

	const config = {
		header: {
			Authentication: token,
		},
	};

	axios.get("/customer/", config).then((response) => {

		console.log(response.data);

		const id = response.data.id;
		const firstName = response.data.first_name;
		const lastName = response.data.last_name;
		const email = response.data.email;
		const nationalCode = response.data.national_code;
		const birthDate = response.data.birth_date;
		const isRegistered = response.data.is_registered;

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
