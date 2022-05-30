import axios from "./../../api/axios";

const getUserInfo = () => (dispatch) => {
	const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

	const config = {
		header: {
			Authentication: token,
		},
	};

	axios.get("/customer/", config).then((response) => {
        
    });
};
