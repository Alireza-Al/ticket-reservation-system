/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function CounterInput(props) {

	const [count, setCount] = useState(1);

    //Set value of count for number of passengers
    useEffect(() => {
        props.inputF(count)
    }, [count])

	return (
		<div className="counter">
			<button
				className="counter-btn"
				onClick={() => count > 1 && setCount(count - 1)}
			>
				-
			</button>
			<input readOnly className="counter-input" type="text" value={count} />
			<button className="counter-btn" onClick={() => setCount(count + 1)}>
				+
			</button>
		</div>
	);
}

export default CounterInput;
