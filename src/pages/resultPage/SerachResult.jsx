import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import PlaneSearch from "../../component/searchBox/plane/PlaneSearch";
import NavBar from "./../../component/navBar/NavBar";
import { useState } from "react";
import ShowTickets from "../../component/ticket/ShowTickets";

function SearchResult() {
	// Create this state to use for closable section
	const [closed, setClosed] = useState(false);

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
				<ShowTickets />
				<ShowTickets />
			</div>
		</div>
	);
}

export default SearchResult;
