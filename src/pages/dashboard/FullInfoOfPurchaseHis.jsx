import { connect } from "react-redux";
import ticketReceipt from "../../data/actions/ticket/ticketReceipt";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function FullInfoOfPurchaseHis(props) {
	const [customer, setCustomer] = useState(null);
	const [trackingCode, setTrackingCode] = useState(null);
	const [ticket, setTicket] = useState(null);

	const [isOpen, setIsOpen] = useState(false);
	const [isSelected, setIsSelected] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		props.ticketReceipt(id);
	}, []);

	useEffect(() => {
		if (props.ticket.length !== 0) {
			setCustomer(props.ticket[0].customer);
			setTrackingCode(props.ticket[0].receipts[0].tracking_code);
			setTicket(props.ticket[0].ticket);
		}
	}, [props.ticket]);

	const toggle = (id) => {
		if (isSelected === id) {
			setIsSelected(null);
		} else {
			setIsSelected(id);
		}
	};

	return (
		<div className="history-info">
			<div className="items">
				<div
					className="title"
					onClick={() => {
						toggle(0);
					}}
				>
					<h1>اطلاعات مسافر</h1>
					<FontAwesomeIcon
						icon={isSelected === 0 ? faArrowUp : faArrowDown}
					/>
				</div>
				<div className={`info ${isSelected === 0 ? "open" : ""}`}>
					{customer !== null ? (
						<>
							<p>
								نام: <span>{customer.first_name}</span>
							</p>
							<p>
								نام خانوادگی: <span>{customer.last_name}</span>
							</p>
							<p>
								کد ملی: <span>{customer.national_code}</span>
							</p>
							<p>
								تاریخ تولد:{" "}
								<span>
									{new Date(
										customer.birth_date
									).toLocaleDateString()}
								</span>
							</p>
							<p>
								ایمیل: <span>{customer.email}</span>
							</p>
						</>
					) : (
						""
					)}
				</div>
			</div>
			<div className="items">
				<div
					className="title"
					onClick={() => {
						toggle(1);
					}}
				>
					<h1>اطلاعات پرواز</h1>
					<FontAwesomeIcon
						icon={isSelected === 1 ? faArrowUp : faArrowDown}
					/>
				</div>
				<div className={`info ${isSelected === 1 ? "open" : ""}`}>
					{ticket !== null ? (
						<>
							<p>{ticket.title}</p>
							<p>
								شرکت: <span>{ticket.company}</span>
							</p>
							<p>
								شماره بلیط: <span>{ticket.code}</span>
							</p>
							<p>
								مبدا:
								<span>{ticket.departure}</span>
							</p>
							<p>
								مقصد: <span>{ticket.destination}</span>
							</p>
							<p>
								شروع سفر: <span>{ticket.start_time}</span>
							</p>
							<p>
								پایان سفر: <span>{ticket.end_time}</span>
							</p>
							<p>
								قیمت: <span>{ticket.price}</span>
							</p>
						</>
					) : (
						""
					)}
				</div>
			</div>
			<div className="items">
				<div
					className="title"
					onClick={() => {
						toggle(2);
					}}
				>
					<h1>رسید</h1>
					<FontAwesomeIcon
						icon={isSelected === 2 ? faArrowUp : faArrowDown}
					/>
				</div>
				<div className={`info ${isSelected === 2 ? "open" : ""}`}>
					{trackingCode !== null ? (
						<p>
							شماره رسید: <span>{trackingCode}</span>
						</p>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		ticket: state.ticket,
	};
};

export default connect(mapStateToProps, { ticketReceipt })(
	FullInfoOfPurchaseHis
);
