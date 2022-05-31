import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";


function ShowTickets(props) {
	//Create this parameter to redirect pages
	const history = useNavigate();

	const buyTicket = () => {
		const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

		const config = {
			headers: {
				Authorization: token,
			},
		};
		axios
			.post(`/ticket/${props.ticket.id}/reserve/`, { count: 1 }, config)
			.then((response) => {
				history(`/reserve?reserveCode=${response.data.receipts[0].tracking_code}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// Create show tickets in result page component
	return (
		<div className="ticket-result">
			{/* this div have all information of the ticket */}
			<div className="info">
				{/* this div have information of the company */}
				<div className="ticket-company">
					<img
						src="https://airhex.com/images/airline-logos/ata-airlines.png"
						alt=""
					/>
					<h3>{props.ticket.company}</h3>
				</div>
				{/* this div have editional information of the ticket(data, code, ...) */}
				<div className="details">
					<div className="row">
						<p>{props.ticket.departure}</p>
						<FontAwesomeIcon icon={faArrowLeftLong} />
						<p>{props.ticket.destination}</p>
					</div>
					<div className="row">
						<h4>شماره بلیط:{props.ticket.code}</h4>
						<h5>{props.ticket.count}صندلی باقی مانده</h5>
					</div>
				</div>
			</div>
			<div className="price">
				<h3>{props.ticket.price}ریال</h3>
				<button onClick={() => buyTicket()}>رزرو بلیط</button>
			</div>
		</div>
	);
}

export default ShowTickets;
