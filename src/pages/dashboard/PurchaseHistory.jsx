import axios from '../../api/axios'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function PurchaseHistory() {

  const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };


  const [state, setState] = useState({})

  axios
  .get("/order/",config )
  .then((res) => {
    setState(res);
    console.log(res);
  })
  .catch((err) => {
    console.error(err)
  })  


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
					<h3>{/*props.ticket.company*/}</h3>
				</div>
				{/* this div have editional information of the ticket(data, code, ...) */}
				<div className="details">
					<div className="row">
						<p>{/*props.ticket.departure*/}</p>
						<FontAwesomeIcon icon={faArrowLeftLong} />
						<p>{/*props.ticket.destination*/}</p>
					</div>
					<div className="row">
						<h4>شماره بلیط:{/*props.ticket.code*/}</h4>
						<h5>{/*props.ticket.count*/}صندلی باقی مانده</h5>
					</div>
				</div>
			</div>
			<div className="price">
				<h3>{/*props.ticket.price*/}ریال</h3>
			</div>
		</div>
  )
}

export default PurchaseHistory