import NavBar from "../../component/navBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function ReservationResult() {
	const queryParams = new URLSearchParams(window.location.search);
	const reserveCode = queryParams.get("reserveCode");

		//Create this parameter to redirect pages
	const history = useNavigate();

	// Create reservation result page
	return (
		<div className="search-result">
			<div className="results">
				<p className="tick">
					<FontAwesomeIcon color="rgb(7, 101, 7)" icon={faCheck} />
					پرداخت با <h3>موفقیت</h3> انجام شد.
				</p>
				<p>:کد پیگیری</p>
				<p>{reserveCode}</p>
				<button className="submit-btn" onClick={() => history("/")}>بازگشت به صفحه اصلی</button>
			</div>
		</div>
	);
}

export default ReservationResult;
