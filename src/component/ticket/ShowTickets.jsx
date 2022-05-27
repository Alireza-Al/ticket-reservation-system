import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function ShowTickets() {
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
					<h3>هواپیمایی آتا</h3>
				</div>
				{/* this div have editional information of the ticket(data, code, ...) */}
				<div className="details">
					<div className="row">
						<p>تبریز</p>
						<FontAwesomeIcon icon={faArrowLeftLong} />
						<p>تهران</p>
					</div>
					<div className="row">
						<h4>شماره بلیط:54546</h4>
						<h5>4صندلی باقی مانده</h5>
					</div>
				</div>
			</div>
			<div className="price">
				<h3>9,565,564ریال</h3>
				<button>انتخاب بلیط</button>
			</div>
		</div>
	);
}

export default ShowTickets;
