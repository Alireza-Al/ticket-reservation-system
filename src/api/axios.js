import axios from 'axios';

export default axios.create({
	baseURL: "http://Ticketx-backend.herokuapp.com/",
	headers: { "Content-Type": "application/json" },
});
