import NavBar from "../../component/navBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ReservationResult() {

	// Create reservation result page
	return (
		<div className="search-result">
			<div className="result-header">
				<NavBar />
			</div>
			<div className="results">
				<p className="tick">
					<FontAwesomeIcon color="rgb(7, 101, 7)" icon={faCheck} />
					پرداخت با <h3>موفقیت</h3> انجام شد.
				</p>
                <p>کد پیگیری خرید شما : 16454959</p>
                <button className="submit-btn">بازگشت به صفحه اصلی</button>
			</div>
		</div>
	);
}

export default ReservationResult;