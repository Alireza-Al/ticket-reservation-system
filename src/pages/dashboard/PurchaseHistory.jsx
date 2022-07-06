import axios from "../../api/axios";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function PurchaseHistory(props) {
	const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

	const config = {
		headers: {
			Authorization: token,
		},
	};

	const [states, setStates] = useState();

	useEffect(() => {
		axios
			.get("/order/", config)
			.then((res) => {
				setStates(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div className="container-tic">
			{states ? states.map((state, index) => {
				return (
					<div className="ticket-result" key={index}>
						{/* this div have all information of the ticket */}
						<div className="info">
							{/* this div have information of the company */}
							<div className="ticket-company">
								<img
									src="https://airhex.com/images/airline-logos/ata-airlines.png"
									alt=""
								/>
								<h3>{state.ticket.company}</h3>
							</div>
							{/* this div have editional information of the ticket(data, code, ...) */}
							<div className="details">
								<div className="row">
									<p>{state.ticket.departure}</p>
									<FontAwesomeIcon icon={faArrowLeftLong} />
									<p>{state.ticket.destination}</p>
								</div>
								<div className="row">
									<h4>شماره بلیط:{state.ticket.code}</h4>
								</div>
							</div>
						</div>
						<div className="price">
							<h3>{state.ticket.price}ریال</h3>
							<a href={`/dashboard/purchaseHistory/${state.id}`}>اطلاعات بیشتر...</a>
						</div>
					</div>
				);
			}) : (<p>Loading...</p>)}
		</div>
	);
}

export default PurchaseHistory;
