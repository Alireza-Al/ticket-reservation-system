import { useState } from "react";
import CounterInput from "../CounterInput";

function TrainSearch() {
	const [states, setStates] = useState({
		source: "",
		destination: "",
		depatureDate: "",
		returnDate: "",
		numOfPassengers: 0,
	});

	//Create this state to control number of passengers
	const [numOfPassengers, setNumOfPassengers] = useState(1);

	//Create this function to control counter input
	const inputFunction = (count) => {
		setNumOfPassengers(count);
	};

	return (
		<div className="slot-container">
			<div className="source-and-destination">
				<input
					type="text"
					placeholder="مبدا(شهر)"
					value={states.source}
					onChange={(e) => {
						setStates({
							...states,
							source: e.target.value,
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
					type="text"
					placeholder="تاریخ رفت"
					onFocus={(e) => (e.target.type = "date")}
					onBlur={(e) => (e.target.type = "text")}
					value={states.depatureDate}
					onChange={(e) => {
						setStates({
							...states,
							depatureDate: e.target.value,
						});
					}}
				/>
				<input
					type="text"
					placeholder="تاریخ برگشت"
					onFocus={(e) => (e.target.type = "date")}
					onBlur={(e) => (e.target.type = "text")}
					value={states.returnDate}
					onChange={(e) => {
						setStates({
							...states,
							returnDate: e.target.value,
						});
					}}
					disabled
				/>
			</div>
			<div className="num-of-passengers">
				<CounterInput inputF={inputFunction} />
			</div>
			<div className="search-button">
				<button>جستجو</button>
			</div>
		</div>
	);
}

export default TrainSearch;
