import axios from "../../../api/axios";

const ticketReceipt = (id) => (dispatch) => {
	const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

	const config = {
		headers: {
			Authorization: token,
		},
	};

	axios
		.get(`/order/${id}`, config)
		.then((response) => {
			dispatch({
				type: "TICKET_RECEIPT",
				payload: response.data,
			});
		})
		.catch((err) => {
			console.error(err);
		});
};

export default ticketReceipt;
