import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import searchResult from "../../../data/actions/ticket/searchResult";

function PlaneSearch(props) {
	const [states, setStates] = useState({
		departure: "",
		destination: "",
		start_time: "",
		type: 2,
	});

    const history = useNavigate();

	const searchTicket = (e) => {
		e.preventDefault();
		props.searchResult(states);
		history(
			`/result?dep=${states.departure}&des=${states.destination}&start_time=${states.start_time}&et=${states.end_time}&type=${states.type}`
		);
	};

	return (
		<div className="slot-container">
			<div className="source-and-destination">
				<input
					type="text"
					placeholder="مبدا(شهر)"
					value={states.departure}
					onChange={(e) => {
						setStates({
							...states,
							departure: e.target.value,
						});
					}}
				/>
				<input
					type="text"
					placeholder="مقصد(شهر)"
					value={states.destination}
					onChange={(e) => {
						setStates({
							...states,
							destination: e.target.value,
						});
					}}
				/>
			</div>
			<div className="round-trip-time">
				<input
					type="date"
					placeholder="تاریخ رفت"
					value={states.depatureDate}
					onChange={(e) => {
						setStates({
							...states,
							start_time: e.target.value,
						});
					}}
				/>
				<input
					type="date"
					placeholder="تاریخ برگشت"
					value={states.returnDate}
					onChange={(e) => {
						setStates({
							...states,
							end_time: e.target.value,
						});
					}}
					disabled
				/>
			</div>
			<div className="num-of-passengers">
				<input
					type="number"
					placeholder="مسافران"
					value={states.numOfPassengers}
					onChange={(e) => {
						setStates({
							...states,
							numOfPassengers: e.target.value,
						});
					}}
				/>
			</div>
			<div className="search-button">
				<button onClick={(e) => searchTicket(e)}>جستجو</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
return {
	ticket: state.ticket
}
}

export default connect(mapStateToProps, {searchResult})(PlaneSearch);
