import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import PlaneSearch from "../../component/searchBox/plane/PlaneSearch";
import BusSearch from "../../component/searchBox/bus/BusSearch";
import TrainSearch from "../../component/searchBox/train/TrainSearch";
import { useState, useEffect } from "react";
import ShowTickets from "../../component/ticket/ShowTickets";
import { connect } from "react-redux";
import searchResult from "../../data/actions/ticket/searchResult";
import { useLocation } from "react-router-dom";

function SearchResult(props) {
	// Create this state to use for closable section
	const [closed, setClosed] = useState(false);

	//Create this state to control results
	const [results, setResults] = useState(null);

	//Create this state to control refresh results
	const [params, setParams] = useState({
		departure: "",
		destination: "",
		start_time: "",
		type: -1,
	});

	const location = useLocation();

	useEffect(() => {
		if (props.ticket.length !== 0) {
			setResults(props.ticket[0].allResults);
		}
	}, [props.ticket]);

	// get queryParams
	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const dep = queryParams.get("dep");
		const des = queryParams.get("des");
		const st = queryParams.get("start_time");
		const type = queryParams.get("type");

		setParams({
			departure: dep,
			destination: des,
			start_time: st,
			type: type,
		});

		if (params.type !== -1) {
			props.searchResult(params);
		}
	}, [params.type]);

	//create this variable for ticket type
	let ticketType = "";
	if(params.type === 0){
		ticketType = "اتوبوس";
	}
	else if(params.type === 1){
		ticketType = "قطار";
	}
	else{
		ticketType = "هواپیما";
	}


	// Create this function to close or open div
	const closedDiv = () => {
		if (closed) {
			setClosed(false);
		} else {
			setClosed(true);
		}
	};

	//Detecate searchbox
	let searchbox;

	if (params.type === -1) {
		searchbox = <h1>Loading...</h1>;
	} else if (params.type === 0) {
		searchbox = <BusSearch params={params} />;
	} else if (params.type === 1) {
		searchbox = <TrainSearch params={params} />;
	} else {
		searchbox = <PlaneSearch params={params} />;
	}

	// Create search results page
	return (
		<div className="search-result">
			<div className="result-header">
				<div className="search-box">
					<FontAwesomeIcon
						className="oc-icon"
						icon={closed ? faCircleDown : faCircleUp}
						onClick={() => closedDiv()}
					/>
					<div className={closed ? "off-screen" : "search-b"}>
						{params.type === -1 ? <h1>Loading...</h1> : searchbox}
					</div>
				</div>
			</div>
			<div className="results">
				{results !== null &&  <h2>{`بلیط ${ticketType} ${params.departure} به ${params.destination}`}</h2>}
				{results === null ? (
					<h1>Loading...</h1>
				) : (
					results.map((ticket, index) => {
						return <ShowTickets ticket={ticket} key={index} />;
					})
				)}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		ticket: state.ticket,
	};
};

export default connect(mapStateToProps, { searchResult })(SearchResult);
