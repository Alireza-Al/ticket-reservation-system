import axios from "../../../api/axios";

const searchResult =
	(
		ticket = {
			departure: "",
			destination: "",
			start_time: "",
			type: 0,
		}
	) =>
	(dispatch) => {

        const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

		const config = {
			headers: {
				Authorization: token,
			},
		};

		axios
			.get("/ticket/", {params: ticket}, config)
			.then((response) => {
				dispatch({
					type: "SEARCH_RESULT",
					payload: {
						allResults: response.data,
					},
				});
			})
			.catch((error) => {});
	};

export default searchResult;
