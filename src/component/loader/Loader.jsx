import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";


function Loader() {

	const [complete, setComplete] = useState(0);

	useEffect(() => {
		if (complete < 99) {setComplete(complete + 1)}
	}, [complete])

    return (
		<div className="loader-container">
			<div className="loader">
				<div className="load-line" style={{ width: `${complete}%` }}>
					<span className="load">{complete}%</span>
				</div>
			</div>
		</div>
	);
    
}

export default Loader;