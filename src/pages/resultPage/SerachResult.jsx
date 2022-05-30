import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import PlaneSearch from "../../component/searchBox/plane/PlaneSearch";
import { useState, useEffect } from "react";
import ShowTickets from "../../component/ticket/ShowTickets";
import { connect } from "react-redux";
import searchResult from "../../data/actions/ticket/searchResult";

function SearchResult(props) {
	// Create this state to use for closable section
	const [closed, setClosed] = useState(false);

	//Create this state to control results
	const [results, setResults] = useState(null);

	useEffect(() => {
		if (props.ticket.length !== 0) {
			setResults(props.ticket[0].allResults);
		}
	}, [props.ticket]);

	// Create this function to close or open div
	const closedDiv = () => {
		if (closed) {
			setClosed(false);
		} else {
			setClosed(true);
		}
	};

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
						<PlaneSearch />
					</div>
				</div>
			</div>
			<div className="results">
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
